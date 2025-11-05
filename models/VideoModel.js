const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../config/config');

class VideoModel {
    constructor() {
        this.baseUrl = config.scraper.baseUrl;
    }

    /**
     * Scrape videos from a specific page
     * @param {number} page - Page number
     * @param {string} tag - Optional tag filter
     * @param {boolean} includeDetails - Whether to fetch full video details
     * @returns {Promise<Object>} Videos data
     */
    async scrapeVideos(page = 1, tag = null, includeDetails = false) {
        try {
            let url = tag 
                ? `${this.baseUrl}?tag=${tag}&page=${page}`
                : `${this.baseUrl}?page=${page}`;

            const response = await axios.get(url, {
                headers: {
                    'User-Agent': config.scraper.userAgent,
                    ...config.scraper.headers
                },
                timeout: config.scraper.timeout
            });

            const $ = cheerio.load(response.data);
            const videos = [];

            // Extract video cards
            const videoUrls = [];
            $('.column.is-half-mobile').each((index, element) => {
                const $card = $(element);
                const $link = $card.find('a');
                const videoUrl = $link.attr('href');
                
                const $img = $card.find('img');
                const thumbnailUrl = $img.attr('src');
                const title = $img.attr('alt');
                
                const $content = $card.find('.card-content .content');
                const description = $content.find('p').first().text().trim();
                const timeAgo = $content.find('p.has-text-grey').text().trim();

                // Only add if we have a valid video URL
                if (videoUrl && videoUrl.includes('/video/')) {
                    const fullVideoUrl = videoUrl.startsWith('http') ? videoUrl : `${this.baseUrl}${videoUrl}`;
                    
                    videoUrls.push({
                        fullVideoUrl,
                        title: description || title,
                        thumbnailUrl,
                        timeAgo
                    });
                }
            });

            // Fetch details if requested
            if (includeDetails && videoUrls.length > 0) {
                for (let i = 0; i < videoUrls.length; i++) {
                    const videoData = videoUrls[i];
                    const details = await this.scrapeVideoDetails(videoData.fullVideoUrl);
                    
                    if (details.success) {
                        videos.push({
                            ...details,
                            timeAgo: videoData.timeAgo,
                            page: page
                        });
                    }
                    
                    // Rate limiting between detail requests (avoid overwhelming server)
                    if (i < videoUrls.length - 1) {
                        await this.sleep(500); // 500ms delay between requests
                    }
                }
            } else {
                // Add basic info without details
                videoUrls.forEach(videoData => {
                    videos.push({
                        title: videoData.title,
                        videoUrl: videoData.fullVideoUrl,
                        thumbnailUrl: videoData.thumbnailUrl,
                        timeAgo: videoData.timeAgo,
                        page: page,
                        tag: tag || 'all'
                    });
                });
            }

            // Extract total videos count
            const totalVideos = $('.tag.is-info').text().trim();

            return {
                success: true,
                videos: videos,
                totalVideos: totalVideos,
                page: page,
                count: videos.length
            };

        } catch (error) {
            return {
                success: false,
                error: error.message,
                videos: [],
                page: page
            };
        }
    }

    /**
     * Scrape video details from video page
     * @param {string} videoUrl - Video URL
     * @returns {Promise<Object>} Video details
     */
    async scrapeVideoDetails(videoUrl) {
        try {
            const response = await axios.get(videoUrl, {
                headers: {
                    'User-Agent': config.scraper.userAgent,
                    ...config.scraper.headers
                },
                timeout: config.scraper.timeout
            });

            const $ = cheerio.load(response.data);
            
            // Extract title from the page
            const videoTitle = $('.title.is-5.has-text-centered.has-text-light').text().trim() || 
                              $('title').text().replace('Buu Mal (ဘူးမယ်)', '').trim();
            
            // Extract video source URL
            const videoSrc = $('video source').attr('src');
            
            // Extract video ID from URL
            const videoId = videoUrl.split('/').pop();
            
            // Extract tags
            const tags = [];
            $('.tag.is-link.is-normal').each((index, element) => {
                tags.push($(element).text().trim());
            });
            
            // Extract thumbnail (if available)
            const thumbnail = $('meta[property="og:image"]').attr('content') || 
                            $('.card-image img').first().attr('src');
            
            // Extract description/content
            const description = $('.content p').first().text().trim();
            
            return {
                success: true,
                videoId: videoId,
                url: videoUrl,
                title: videoTitle,
                videoSrc: videoSrc,
                tags: tags,
                thumbnail: thumbnail,
                description: description
            };

        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Get available tags
     * @returns {Array<string>} Available tags
     */
    getAvailableTags() {
        return config.tags;
    }

    /**
     * Sleep function for rate limiting
     * @param {number} ms - Milliseconds to sleep
     * @returns {Promise}
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

module.exports = VideoModel;
