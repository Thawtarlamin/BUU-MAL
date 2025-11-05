# 🎬 Buumal Video Scraper# 🎬 Buumal Video Scraper - MVC Architecture



A professional web scraping tool for **buumal.com** video content extraction, built with **Node.js**, **Express.js**, and following **MVC architecture** principles.A professional web scraper for buumal.com built with **MVC (Model-View-Controller)** architecture pattern using Node.js, Express, Cheerio, and Axios.



![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)## 🏗️ Architecture Overview

![Express](https://img.shields.io/badge/Express-v5.1.0-blue.svg)

![License](https://img.shields.io/badge/license-MIT-green.svg)This project follows the **MVC design pattern** for clean, maintainable, and scalable code:



## ✨ Features```

buumal/

- 🎯 **Smart Web Scraping** - Intelligent video extraction with Cheerio├── app.js                    # Main application entry point

- 🏷️ **Tag-Based Filtering** - Filter by 8 available video categories├── config/

- 📊 **Interactive Dashboard** - Real-time scraping with beautiful UI│   └── config.js            # Configuration settings

- 🎬 **Video Detail Pages** - Full video player with metadata├── models/

- 💾 **Multiple Export Formats** - JSON and CSV output support│   ├── VideoModel.js        # Data layer - Video scraping logic

- 🔄 **Rate Limiting** - Prevents server overload with smart delays│   └── StorageModel.js      # Data layer - File operations

- 🏗️ **MVC Architecture** - Clean, maintainable code structure├── views/

- 📡 **RESTful API** - Well-documented API endpoints│   ├── home.html            # Landing page

- ⚡ **Background Processing** - Non-blocking scraping operations│   └── dashboard.html       # Dashboard UI

- 🎨 **Responsive Design** - Mobile-friendly interface├── controllers/

│   └── VideoController.js   # Business logic layer

## 📋 Table of Contents├── routes/

│   └── api.js               # API route definitions

- [Installation](#installation)├── data/                    # Output directory

- [Usage](#usage)│   ├── buumal_videos.json   # Scraped data (JSON)

- [API Documentation](#api-documentation)│   └── buumal_videos.csv    # Scraped data (CSV)

- [Project Structure](#project-structure)└── public/                  # Static assets

- [Configuration](#configuration)```

- [Technologies](#technologies)

- [Available Tags](#available-tags)### 📦 Model Layer

- [Export Formats](#export-formats)- **VideoModel.js** - Handles web scraping, HTTP requests, HTML parsing

- [Contributing](#contributing)- **StorageModel.js** - Manages file operations, data persistence, statistics

- [License](#license)

### 🎨 View Layer

## 🚀 Installation- **home.html** - API documentation and landing page

- **dashboard.html** - Interactive web dashboard for scraping

### Prerequisites

### 🎮 Controller Layer

- Node.js (v14 or higher)- **VideoController.js** - Orchestrates models, handles business logic, processes requests

- npm or yarn

### 🛣️ Routes Layer

### Steps- **api.js** - Defines API endpoints and maps to controller methods



1. **Clone the repository**### ⚙️ Config Layer

   ```bash- **config.js** - Centralized configuration (server, scraper settings, tags)

   git clone https://github.com/yourusername/buumal-scraper.git

   cd buumal-scraper---

   ```

## ✨ Features

2. **Install dependencies**

   ```bash- ✅ **MVC Architecture** - Clean separation of concerns

   npm install- ✅ **RESTful API** - 6 well-documented endpoints

   ```- ✅ **Web Dashboard** - Beautiful UI for easy scraping

- ✅ **Smart Scraping** - Rate limiting, error handling, retries

3. **Start the application**- ✅ **Tag Filtering** - Filter by 8 different categories

   ```bash- ✅ **Dual Export** - Automatic JSON & CSV export

   npm start- ✅ **Analytics** - Detailed statistics and insights

   ```- ✅ **Pagination** - Efficient data retrieval

   or- ✅ **CORS Enabled** - Cross-origin request support

   ```bash

   node app.js---

   ```

## 🚀 Quick Start

4. **Access the application**

   - Home Page: http://localhost:3000### Installation

   - Dashboard: http://localhost:3000/dashboard.html```bash

   - API: http://localhost:3000/api/videos# Dependencies already installed

npm install

## 💻 Usage```



### Web Dashboard### Start the Server

```bash

1. Open your browser and navigate to `http://localhost:3000/dashboard.html`npm start

2. Configure scraping parameters:```

   - **Start Page**: Starting page number (default: 1)

   - **End Page**: Ending page number (default: 3)Visit: **http://localhost:3000**

   - **Tag Filter**: Select specific category or "All Tags"

   - **Include Details**: ✓ Enable for full video details (videoSrc, tags, description)---

3. Click **"🚀 Start Scraping"**

4. View results in real-time## 📚 API Documentation

5. Click **"🎬 View Details"** on any video to watch with full metadata

### Base URL

### CLI Usage```

http://localhost:3000/api

You can also use the API directly via curl or any HTTP client:```



**Scrape a single page:**### Endpoints

```bash

curl http://localhost:3000/api/scrape?page=1#### 1. Scrape Single Page

``````http

GET /api/scrape?page=1&tag=myanmar

**Scrape multiple pages with tag filter:**```

```bash

curl http://localhost:3000/api/scrape/multiple?startPage=1&endPage=3&tag=myanmar**Query Parameters:**

```- `page` (optional) - Page number (default: 1)

- `tag` (optional) - Category filter

**Get full video details:**

```bash**Response:**

curl http://localhost:3000/api/scrape?page=1&details=true```json

```{

  "success": true,

**Get specific video details:**  "data": {

```bash    "videos": [...],

curl http://localhost:3000/api/scrape/video/690ACE0F    "totalVideos": "54314",

```    "page": 1,

    "count": 20

## 📡 API Documentation  },

  "message": "Successfully scraped 20 videos from page 1"

### Base URL}

``````

http://localhost:3000/api

```#### 2. Scrape Multiple Pages

```http

### EndpointsGET /api/scrape/multiple?startPage=1&endPage=3&tag=myanmar

```

#### 1. Scrape Single Page

```http**Query Parameters:**

GET /api/scrape?page=1&tag=myanmar&details=true- `startPage` (optional) - Start page (default: 1)

```- `endPage` (optional) - End page (default: 3)

- `tag` (optional) - Category filter

**Query Parameters:**- **Max:** 10 pages per request

- `page` (required): Page number to scrape

- `tag` (optional): Filter by tag (drhmonegyi, myanmar, drkogyi, mamagyi, kosargyi, samusar, mmporns, mmhdhub)**Response:**

- `details` (optional): Set to `true` for full video details```json

{

**Response:**  "success": true,

```json  "data": {

{    "videos": [...],

  "success": true,    "count": 60,

  "data": {    "pages": "1-3"

    "videos": [...],  },

    "count": 20,  "message": "Successfully scraped 60 videos from pages 1 to 3"

    "page": 1}

  }```

}

```#### 3. Get Video Details

```http

#### 2. Scrape Multiple PagesGET /api/scrape/video/:id

```http```

GET /api/scrape/multiple?startPage=1&endPage=3&tag=myanmar&details=true

```**Example:**

```http

**Query Parameters:**GET /api/scrape/video/690ACE0F

- `startPage` (required): Starting page number```

- `endPage` (required): Ending page number

- `tag` (optional): Filter by tag**Response:**

- `details` (optional): Set to `true` for full video details```json

{

**Response:**  "success": true,

```json  "data": {

{    "url": "https://www.buumal.com/video/690ACE0F",

  "success": true,    "title": "Video Title",

  "data": {    "embedUrl": "...",

    "videos": [...],    "videoSrc": "..."

    "count": 60,  }

    "pages": "1-3"}

  }```

}

```#### 4. Get All Saved Videos

```http

#### 3. Get Video DetailsGET /api/videos?page=1&limit=20

```http```

GET /api/scrape/video/:id

```**Query Parameters:**

- `page` (optional) - Page number (default: 1)

**URL Parameters:**- `limit` (optional) - Items per page (default: 20, max: 100)

- `id` (required): Video ID

**Response:**

**Response:**```json

```json{

{  "success": true,

  "success": true,  "data": {

  "data": {    "videos": [...],

    "videoId": "690ACE0F",    "pagination": {

    "title": "Video Title",      "currentPage": 1,

    "videoSrc": "https://...",      "totalVideos": 60,

    "thumbnail": "https://...",      "totalPages": 3,

    "tags": ["tag1", "tag2"],      "limit": 20,

    "description": "..."      "hasNextPage": true,

  }      "hasPrevPage": false

}    }

```  }

}

#### 4. Get All Saved Videos```

```http

GET /api/videos?page=1&limit=20#### 5. Get Available Tags

``````http

GET /api/tags

**Query Parameters:**```

- `page` (optional): Page number for pagination (default: 1)

- `limit` (optional): Items per page (default: 20)**Response:**

```json

**Response:**{

```json  "success": true,

{  "data": {

  "success": true,    "tags": [

  "data": {      "drhmonegyi",

    "videos": [...],      "myanmar",

    "pagination": {      "drkogyi",

      "currentPage": 1,      "mamagyi",

      "totalPages": 5,      "kosargyi",

      "totalVideos": 100,      "samusar",

      "limit": 20      "mmporns",

    }      "mmhdhub"

  }    ],

}    "count": 8

```  }

}

#### 5. Get Available Tags```

```http

GET /api/tags#### 6. Get Statistics

``````http

GET /api/stats

**Response:**```

```json

{**Response:**

  "success": true,```json

  "tags": ["drhmonegyi", "myanmar", "drkogyi", "mamagyi", "kosargyi", "samusar", "mmporns", "mmhdhub"]{

}  "success": true,

```  "data": {

    "totalVideos": 60,

#### 6. Get Statistics    "videosByTag": {

```http      "all": 60

GET /api/stats    },

```    "videosByPage": {

      "1": 20,

**Response:**      "2": 20,

```json      "3": 20

{    },

  "success": true,    "latestScrape": "6 hours ago"

  "stats": {  }

    "totalVideos": 150,}

    "availableTags": 8,```

    "lastUpdated": "2025-11-05T..."

  }---

}

```## 💻 Programmatic Usage



## 📁 Project Structure### Using Models Directly



``````javascript

buumal-scraper/const VideoModel = require('./models/VideoModel');

├── app.js                      # Main application entry pointconst StorageModel = require('./models/StorageModel');

├── package.json                # Project dependencies

├── README.md                   # This fileasync function example() {

│    const videoModel = new VideoModel();

├── config/    const storageModel = new StorageModel();

│   └── config.js              # Centralized configuration    

│    // Scrape videos

├── models/    const result = await videoModel.scrapeVideos(1, 'myanmar');

│   ├── VideoModel.js          # Video scraping logic (Data Layer)    

│   └── StorageModel.js        # Data storage operations (Data Layer)    // Save to files

│    storageModel.saveToJson(result.videos);

├── controllers/    storageModel.saveToCsv(result.videos);

│   └── VideoController.js     # Business logic layer    

│    // Load from files

├── routes/    const loaded = storageModel.loadFromJson();

│   └── api.js                 # API route definitions    

│    // Get statistics

├── views/    const stats = storageModel.getStatistics();

│   ├── home.html              # Landing page with API docs}

│   ├── dashboard.html         # Interactive scraping dashboard```

│   └── video-detail.html      # Video player with full details

│### Using Controller

└── data/

    ├── buumal_videos.json     # JSON export```javascript

    └── buumal_videos.csv      # CSV exportconst VideoController = require('./controllers/VideoController');

```

const controller = new VideoController();

### MVC Architecture

// Controller methods automatically handle request/response

This project follows the **Model-View-Controller** design pattern:// Used by Express routes

```

#### 📦 Model Layer

- **VideoModel.js** - Handles web scraping, HTTP requests, HTML parsing with Cheerio---

- **StorageModel.js** - Manages file operations, data persistence, pagination, statistics

## 🎨 Web Dashboard

#### 🎨 View Layer

- **home.html** - API documentation and landing pageAccess the interactive dashboard at: **http://localhost:3000/views/dashboard.html**

- **dashboard.html** - Interactive web dashboard for scraping

- **video-detail.html** - Video player page with metadata**Features:**

- Real-time scraping

#### 🎮 Controller Layer- Visual statistics

- **VideoController.js** - Orchestrates models, handles business logic, processes HTTP requests- Tag filtering

- Video grid display

#### 🛣️ Routes Layer- Export options

- **api.js** - Defines API endpoints and maps to controller methods

---

#### ⚙️ Config Layer

- **config.js** - Centralized configuration (server, scraper settings, tags)## ⚙️ Configuration



## ⚙️ ConfigurationEdit `config/config.js` to customize:



Edit `config/config.js` to customize:```javascript

module.exports = {

```javascript    server: {

module.exports = {        port: 3000,

    scraper: {        host: 'localhost'

        baseUrl: 'https://www.buumal.com',    },

        timeout: 10000,                  // 10 seconds timeout    scraper: {

        delayBetweenRequests: 2000,      // 2 seconds between page requests        timeout: 10000,

        userAgent: 'Mozilla/5.0...'        delayBetweenRequests: 2000  // Rate limiting

    },    },

    pagination: {    pagination: {

        defaultLimit: 20,        defaultLimit: 20,

        maxLimit: 100        maxLimit: 100

    },    }

    server: {};

        port: 3000```

    },

    tags: [---

        'drhmonegyi', 'myanmar', 'drkogyi', 'mamagyi',

        'kosargyi', 'samusar', 'mmporns', 'mmhdhub'## 📂 Data Output

    ]

};Scraped data is automatically saved to:

```

- **JSON:** `data/buumal_videos.json`

## 🛠️ Technologies- **CSV:** `data/buumal_videos.csv`



### Backend### JSON Structure

- **Node.js** - JavaScript runtime environment```json

- **Express.js v5.1.0** - Fast, minimalist web framework{

- **Axios v1.13.2** - Promise-based HTTP client for scraping  "title": "Video title",

- **Cheerio v1.1.2** - jQuery-like HTML parsing library  "videoUrl": "https://www.buumal.com/video/ID",

  "thumbnailUrl": "https://img.buumal.com/...",

### Frontend  "timeAgo": "6 hours ago",

- **HTML5** - Semantic markup  "page": 1,

- **CSS3** - Modern styling with gradients and animations  "tag": "myanmar"

- **Vanilla JavaScript** - No frameworks, pure JavaScript}

- **Fetch API** - Asynchronous HTTP requests```



### Architecture & Patterns---

- **MVC Pattern** - Separation of concerns

- **RESTful API** - Standard HTTP methods and status codes## 🏷️ Available Tags

- **Modular Design** - Reusable and maintainable components

- `drhmonegyi` - Dr.Hmone Gyi

## 🎯 Available Tags- `myanmar` - Myanmar

- `drkogyi` - VIP. Dr Ko Gyi

The scraper supports filtering by the following video categories:- `mamagyi` - VIP. Ma Ma Gyi

- `kosargyi` - Ko Sar Gyi

1. `drhmonegyi` - Dr. Hmon Egyi- `samusar` - Samusar

2. `myanmar` - Myanmar- `mmporns` - MM Porns

3. `drkogyi` - Dr. Ko Gyi- `mmhdhub` - MM HD Hub

4. `mamagyi` - Mama Gyi

5. `kosargyi` - Ko Sar Gyi---

6. `samusar` - Sam U Sar

7. `mmporns` - MM Porns## 🛡️ Best Practices

8. `mmhdhub` - MM HD Hub

### Rate Limiting

## 📊 Export FormatsThe scraper includes built-in rate limiting (2 seconds between requests) to avoid overwhelming the server.



### JSON Export (`data/buumal_videos.json`)### Error Handling

```jsonAll operations include comprehensive error handling and return structured error responses.

[

  {### Data Validation

    "success": true,Input validation on all API endpoints prevents invalid requests.

    "videoId": "690ACE0F",

    "url": "https://www.buumal.com/video/690ACE0F",### CORS

    "title": "Video Title",CORS is enabled for cross-origin requests from web applications.

    "videoSrc": "https://...",

    "tags": ["tag1", "tag2"],---

    "thumbnail": "https://...",

    "thumbnailUrl": "https://...",## 📊 MVC Benefits

    "description": "Video description...",

    "timeAgo": "3 hours ago",### Separation of Concerns

    "page": 1,- **Models** handle data operations

    "tag": "myanmar"- **Views** handle presentation

  }- **Controllers** handle business logic

]

```### Maintainability

- Easy to update individual components

### CSV Export (`data/buumal_videos.csv`)- Clear file organization

```csv- Reduced code duplication

videoId,title,videoUrl,thumbnailUrl,timeAgo,page,tag

690ACE0F,"Video Title","https://...","https://...","3 hours ago",1,"myanmar"### Scalability

```- Add new models/controllers easily

- Extend functionality without breaking existing code

## ⚠️ Rate Limiting- Easy to add new features



To prevent server overload and ensure ethical scraping:### Testability

- Each layer can be tested independently

- **500ms delay** between individual video detail requests- Mock data for unit testing

- **2000ms delay** between page requests (configurable)- Integration testing support

- Custom User-Agent header to identify the scraper

- Proper error handling and graceful failures---

- Timeout protection (10 seconds default)

## 🔧 Development

## 🔧 Development

### Project Structure

### Run in Development Mode```

```bashMVC Pattern:

node app.js├── Models (Data Layer)

```│   ├── VideoModel - Scraping logic

│   └── StorageModel - File operations

### Testing API Endpoints│

```bash├── Views (Presentation Layer)

# Test single page scraping│   ├── home.html - Landing page

curl http://localhost:3000/api/scrape?page=1│   └── dashboard.html - Dashboard UI

│

# Test multiple pages├── Controllers (Business Logic)

curl http://localhost:3000/api/scrape/multiple?startPage=1&endPage=2│   └── VideoController - Request handling

│

# Test with full details├── Routes (API Mapping)

curl http://localhost:3000/api/scrape?page=1&details=true│   └── api.js - Endpoint definitions

│

# Get all saved videos└── Config (Settings)

curl http://localhost:3000/api/videos    └── config.js - Configuration

```

# Get statistics

curl http://localhost:3000/api/stats### Adding New Features

```

**1. Add Model:**

## 🤝 Contributing```javascript

// models/NewModel.js

Contributions are welcome! Please follow these steps:class NewModel {

    // Data operations

1. Fork the repository}

2. Create a feature branch (`git checkout -b feature/AmazingFeature`)module.exports = NewModel;

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)```

4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request**2. Add Controller:**

```javascript

### Coding Standards// controllers/NewController.js

- Follow existing code structure and MVC patternclass NewController {

- Add comments for complex logic    // Business logic

- Update README.md if adding new features}

- Test thoroughly before submitting PRmodule.exports = NewController;

```

## 📝 Best Practices

**3. Add Route:**

When using this scraper:```javascript

// routes/api.js

- ✅ Always enable rate limiting to avoid overwhelming the serverrouter.get('/new', (req, res) => {

- ✅ Use "Include full details" option only when necessary (it's slower)    newController.method(req, res);

- ✅ Export data regularly to avoid data loss});

- ✅ Check `data/` folder for saved results```

- ✅ Respect the target website's resources and terms of service

- ✅ Use appropriate delay between requests---

- ✅ Handle errors gracefully

## 🐛 Troubleshooting

## 🐛 Known Issues

**Port already in use:**

- Thumbnail URLs may expire after some time (Cloudflare R2 signed URLs with expiry)```bash

- Very large scraping operations (100+ pages) may take considerable time# Change port in config/config.js or use environment variable

- Network timeouts may occur with slow or unstable connectionsPORT=3001 npm start

- Some videos may not have complete metadata```



## 📋 Roadmap**No videos found:**

```bash

Future enhancements planned:# Test connection

node test-connection.js

- [ ] Add pagination to dashboard results```

- [ ] Implement search functionality

- [ ] Add video download manager**Data not saving:**

- [ ] Create video playlists- Check `data/` directory exists

- [ ] Export to XML and Excel formats- Verify write permissions

- [ ] Implement caching system with Redis

- [ ] Add user authentication system---

- [ ] Create mobile-responsive design improvements

- [ ] Add video quality selection## ⚠️ Legal Disclaimer

- [ ] Implement batch download feature

This scraper is for **educational purposes only**. Users are responsible for:

## 📄 License- Complying with applicable laws

- Respecting copyright and intellectual property

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.- Following website terms of service

- Using responsibly and ethically

## 👤 Author

---

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)## 📝 License

- Email: your.email@example.com

- Website: https://yourwebsite.comISC



## 🙏 Acknowledgments---



- [Cheerio](https://cheerio.js.org/) - Fast, flexible, and lean HTML parsing library## 🎉 Summary

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework for Node.js

- [Axios](https://axios-http.com/) - Promise-based HTTP client**MVC Architecture:** Clean, maintainable, professional code structure  

- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 engine**RESTful API:** 6 well-documented endpoints  

**Web Dashboard:** Beautiful, intuitive user interface  

## ⚖️ Disclaimer**Smart Scraping:** Rate limited, error handling included  



This tool is for **educational purposes only**. Please respect the target website's:**Ready to use!** Start with: `npm start`

- Terms of Service

- robots.txt file---

- Rate limiting policies

- Copyright and intellectual property rightsBuilt with ❤️ using Node.js, Express, Cheerio & Axios


The authors are not responsible for any misuse of this software. Use responsibly and ethically.

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/buumal-scraper/issues) page
2. Create a new issue with detailed information
3. Contact the maintainer via email

## 🌟 Show Your Support

If you find this project helpful, please consider:

- ⭐ Starring the repository
- 🍴 Forking for your own use
- 📢 Sharing with others
- 💬 Providing feedback
- 🐛 Reporting bugs

---

**Made with ❤️ and Node.js**

⭐ **Star this repo if you find it helpful!**

*Last updated: November 5, 2025*
