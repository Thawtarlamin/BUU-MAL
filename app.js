const express = require('express');
const path = require('path');
const config = require('./config/config');
const apiRoutes = require('./routes/api');

class Application {
    constructor() {
        this.app = express();
        this.port = config.server.port;
        this.setupMiddleware();
        this.setupRoutes();
    }

    /**
     * Setup middleware
     */
    setupMiddleware() {
        // Body parser
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Static files
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use('/views', express.static(path.join(__dirname, 'views')));

        // CORS
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            next();
        });

        // Logging middleware
        this.app.use((req, res, next) => {
            console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
            next();
        });
    }

    /**
     * Setup routes
     */
    setupRoutes() {
        // Home route - Documentation
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'views', 'home.html'));
        });

        // Dashboard route
        this.app.get('/dashboard.html', (req, res) => {
            res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
        });

        // Video detail route
        this.app.get('/video-detail.html', (req, res) => {
            res.sendFile(path.join(__dirname, 'views', 'video-detail.html'));
        });

        // API routes
        this.app.use('/api', apiRoutes);

        // 404 handler
        this.app.use((req, res) => {
            res.status(404).json({
                success: false,
                error: 'Route not found',
                path: req.path
            });
        });

        // Error handler
        this.app.use((err, req, res, next) => {
            console.error('Error:', err);
            res.status(500).json({
                success: false,
                error: err.message || 'Internal server error'
            });
        });
    }

    /**
     * Start the server
     */
    start() {
        this.app.listen(this.port, () => {
            console.log('╔═══════════════════════════════════════════════╗');
            console.log('║   Buumal Video Scraper API (MVC)             ║');
            console.log('╚═══════════════════════════════════════════════╝');
            console.log('');
            console.log(`🚀 Server running on http://${config.server.host}:${this.port}`);
            console.log(`📊 Dashboard: http://${config.server.host}:${this.port}`);
            console.log(`📚 API Docs: http://${config.server.host}:${this.port}/api`);
            console.log('');
            console.log('📂 Project Structure: MVC Architecture');
            console.log('   ├── Models: Data layer (scraping, storage)');
            console.log('   ├── Views: Presentation layer (HTML/UI)');
            console.log('   └── Controllers: Business logic layer');
            console.log('');
            console.log('✨ Ready to scrape!');
            console.log('════════════════════════════════════════════════');
        });
    }
}

// Create and start the application
if (require.main === module) {
    const app = new Application();
    app.start();
}

module.exports = Application;
