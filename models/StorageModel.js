const fs = require('fs');
const path = require('path');
const config = require('../config/config');

class StorageModel {
    constructor() {
        this.jsonPath = path.join(__dirname, '..', 'data', 'buumal_videos.json');
        this.csvPath = path.join(__dirname, '..', 'data', 'buumal_videos.csv');
        this.ensureDataDirectory();
    }

    /**
     * Ensure data directory exists
     */
    ensureDataDirectory() {
        const dataDir = path.join(__dirname, '..', 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
    }

    /**
     * Save videos to JSON file
     * @param {Array} videos - Array of video objects
     * @param {string} filename - Optional custom filename
     * @returns {Object} Result object
     */
    saveToJson(videos, filename = null) {
        try {
            const filePath = filename ? path.join(__dirname, '..', 'data', filename) : this.jsonPath;
            fs.writeFileSync(filePath, JSON.stringify(videos, null, 2), 'utf8');
            return {
                success: true,
                message: `Data saved to ${path.basename(filePath)}`,
                count: videos.length,
                path: filePath
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Save videos to CSV file
     * @param {Array} videos - Array of video objects
     * @param {string} filename - Optional custom filename
     * @returns {Object} Result object
     */
    saveToCsv(videos, filename = null) {
        try {
            if (videos.length === 0) {
                return {
                    success: false,
                    error: 'No data to save'
                };
            }

            const filePath = filename ? path.join(__dirname, '..', 'data', filename) : this.csvPath;
            const headers = Object.keys(videos[0]).join(',');
            const rows = videos.map(video => {
                return Object.values(video).map(value => {
                    const escaped = String(value).replace(/"/g, '""');
                    return `"${escaped}"`;
                }).join(',');
            });

            const csv = [headers, ...rows].join('\n');
            fs.writeFileSync(filePath, csv, 'utf8');
            
            return {
                success: true,
                message: `Data saved to ${path.basename(filePath)}`,
                count: videos.length,
                path: filePath
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Load videos from JSON file
     * @param {string} filename - Optional custom filename
     * @returns {Object} Videos data
     */
    loadFromJson(filename = null) {
        try {
            const filePath = filename ? path.join(__dirname, '..', 'data', filename) : this.jsonPath;
            
            if (!fs.existsSync(filePath)) {
                return {
                    success: false,
                    error: 'No saved data found',
                    videos: []
                };
            }

            const data = fs.readFileSync(filePath, 'utf8');
            const videos = JSON.parse(data);

            return {
                success: true,
                videos: videos,
                count: videos.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                videos: []
            };
        }
    }

    /**
     * Get statistics from saved videos
     * @returns {Object} Statistics
     */
    getStatistics() {
        try {
            const result = this.loadFromJson();
            
            if (!result.success || result.videos.length === 0) {
                return {
                    success: true,
                    data: {
                        totalVideos: 0,
                        message: 'No data scraped yet'
                    }
                };
            }

            const videos = result.videos;
            const stats = {
                totalVideos: videos.length,
                videosByTag: {},
                videosByPage: {},
                latestScrape: videos.length > 0 ? videos[0].timeAgo : null
            };

            videos.forEach(video => {
                // Count by tag
                if (!stats.videosByTag[video.tag]) {
                    stats.videosByTag[video.tag] = 0;
                }
                stats.videosByTag[video.tag]++;

                // Count by page
                if (!stats.videosByPage[video.page]) {
                    stats.videosByPage[video.page] = 0;
                }
                stats.videosByPage[video.page]++;
            });

            return {
                success: true,
                data: stats
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Paginate videos
     * @param {Array} videos - Array of videos
     * @param {number} page - Page number
     * @param {number} limit - Items per page
     * @returns {Object} Paginated result
     */
    paginate(videos, page = 1, limit = 20) {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedVideos = videos.slice(startIndex, endIndex);

        return {
            videos: paginatedVideos,
            pagination: {
                currentPage: page,
                totalVideos: videos.length,
                totalPages: Math.ceil(videos.length / limit),
                limit: limit,
                hasNextPage: endIndex < videos.length,
                hasPrevPage: page > 1
            }
        };
    }
}

module.exports = StorageModel;
