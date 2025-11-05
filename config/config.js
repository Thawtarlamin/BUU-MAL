module.exports = {
    // Server configuration
    server: {
        port: process.env.PORT || 3000,
        host: 'localhost'
    },

    // Scraper configuration
    scraper: {
        baseUrl: 'https://www.buumal.com',
        timeout: 10000,
        delayBetweenRequests: 2000, // 2 seconds
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        }
    },

    // Available tags/categories
    tags: [
        'drhmonegyi',
        'myanmar',
        'drkogyi',
        'mamagyi',
        'kosargyi',
        'samusar',
        'mmporns',
        'mmhdhub'
    ],

    // Export configuration
    export: {
        jsonPath: './data/buumal_videos.json',
        csvPath: './data/buumal_videos.csv'
    },

    // Pagination
    pagination: {
        defaultLimit: 20,
        maxLimit: 100
    }
};
