const express = require('express');
const VideoController = require('../controllers/VideoController');

const router = express.Router();
const videoController = new VideoController();

/**
 * @route   GET /api/scrape
 * @desc    Scrape videos from a single page
 * @query   page, tag
 * @access  Public
 */
router.get('/scrape', (req, res) => {
    videoController.scrapeSinglePage(req, res);
});

/**
 * @route   GET /api/scrape/multiple
 * @desc    Scrape videos from multiple pages
 * @query   startPage, endPage, tag
 * @access  Public
 */
router.get('/scrape/multiple', (req, res) => {
    videoController.scrapeMultiplePages(req, res);
});

/**
 * @route   GET /api/scrape/video/:id
 * @desc    Get video details by ID
 * @param   id - Video ID
 * @access  Public
 */
router.get('/scrape/video/:id', (req, res) => {
    videoController.getVideoDetails(req, res);
});

/**
 * @route   GET /api/videos
 * @desc    Get all saved videos
 * @query   page, limit
 * @access  Public
 */
router.get('/videos', (req, res) => {
    videoController.getAllVideos(req, res);
});

/**
 * @route   GET /api/tags
 * @desc    Get available tags
 * @access  Public
 */
router.get('/tags', (req, res) => {
    videoController.getAvailableTags(req, res);
});

/**
 * @route   GET /api/stats
 * @desc    Get scraping statistics
 * @access  Public
 */
router.get('/stats', (req, res) => {
    videoController.getStatistics(req, res);
});

module.exports = router;
