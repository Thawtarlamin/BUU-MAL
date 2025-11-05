const VideoModel = require('../models/VideoModel');
const StorageModel = require('../models/StorageModel');
const config = require('../config/config');

class VideoController {
    constructor() {
        this.videoModel = new VideoModel();
        this.storageModel = new StorageModel();
    }

    /**
     * Scrape videos from a single page
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    async scrapeSinglePage(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const tag = req.query.tag || null;
            const includeDetails = req.query.details === 'true';

            const result = await this.videoModel.scrapeVideos(page, tag, includeDetails);
            
            if (result.success) {
                res.json({
                    success: true,
                    data: result,
                    message: `Successfully scraped ${result.videos.length} videos from page ${page}`
                });
            } else {
                res.status(500).json({
                    success: false,
                    error: result.error
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    /**
     * Scrape multiple pages
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    async scrapeMultiplePages(req, res) {
        try {
            const startPage = parseInt(req.query.startPage) || 1;
            const endPage = parseInt(req.query.endPage) || 3;
            const tag = req.query.tag || null;
            const includeDetails = req.query.details === 'true';

            if (endPage - startPage > 10) {
                return res.status(400).json({
                    success: false,
                    error: 'Maximum 10 pages can be scraped at once'
                });
            }

            const allVideos = [];

            for (let page = startPage; page <= endPage; page++) {
                const result = await this.videoModel.scrapeVideos(page, tag, includeDetails);
                if (result.success) {
                    allVideos.push(...result.videos);
                }
                
                // Rate limiting
                if (page < endPage) {
                    await this.videoModel.sleep(config.scraper.delayBetweenRequests);
                }
            }

            // Save to storage
            this.storageModel.saveToJson(allVideos);
            this.storageModel.saveToCsv(allVideos);

            res.json({
                success: true,
                data: {
                    videos: allVideos,
                    count: allVideos.length,
                    pages: `${startPage}-${endPage}`
                },
                message: `Successfully scraped ${allVideos.length} videos from pages ${startPage} to ${endPage}`
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    /**
     * Get video details
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    async getVideoDetails(req, res) {
        try {
            const videoId = req.params.id;
            const videoUrl = `${config.scraper.baseUrl}/video/${videoId}`;

            const details = await this.videoModel.scrapeVideoDetails(videoUrl);
            
            if (details.success) {
                res.json({
                    success: true,
                    data: details
                });
            } else {
                res.status(404).json({
                    success: false,
                    error: details.error || 'Video not found or error scraping details'
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    /**
     * Get all saved videos
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    getAllVideos(req, res) {
        try {
            const result = this.storageModel.loadFromJson();
            
            if (!result.success) {
                return res.status(404).json({
                    success: false,
                    error: result.error
                });
            }

            // Pagination
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || config.pagination.defaultLimit;
            
            const paginatedResult = this.storageModel.paginate(result.videos, page, limit);

            res.json({
                success: true,
                data: paginatedResult
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    /**
     * Get available tags
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    getAvailableTags(req, res) {
        const tags = this.videoModel.getAvailableTags();
        res.json({
            success: true,
            data: {
                tags: tags,
                count: tags.length
            }
        });
    }

    /**
     * Get statistics
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    getStatistics(req, res) {
        try {
            const stats = this.storageModel.getStatistics();
            res.json(stats);
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = VideoController;
