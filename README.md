# 🎬 Buumal Video Scraper# 🎬 Buumal Video Scraper# 🎬 Buumal Video Scraper - MVC Architecture



A professional web scraping application for **buumal.com** video content extraction, built with **Node.js**, **Express.js**, and following **MVC architecture** principles.



[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)A professional web scraping tool for **buumal.com** video content extraction, built with **Node.js**, **Express.js**, and following **MVC architecture** principles.A professional web scraper for buumal.com built with **MVC (Model-View-Controller)** architecture pattern using Node.js, Express, Cheerio, and Axios.

[![Express](https://img.shields.io/badge/Express-v5.1.0-blue.svg)](https://expressjs.com/)

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)



---![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)## 🏗️ Architecture Overview



## ✨ Features![Express](https://img.shields.io/badge/Express-v5.1.0-blue.svg)



- 🎯 **Smart Web Scraping** - Intelligent video data extraction with Cheerio![License](https://img.shields.io/badge/license-MIT-green.svg)This project follows the **MVC design pattern** for clean, maintainable, and scalable code:

- 🏷️ **Tag-Based Filtering** - Filter videos by 8 available categories

- 📊 **Interactive Dashboard** - Real-time scraping with beautiful UI

- 🎬 **Video Detail Pages** - Full video player with complete metadata

- 💾 **Multiple Export Formats** - JSON and CSV output support## ✨ Features```

- 🔄 **Rate Limiting** - Smart delays to prevent server overload

- 🏗️ **MVC Architecture** - Clean, maintainable, and scalable code structurebuumal/

- 📡 **RESTful API** - Well-documented API endpoints

- ⚡ **Retry Logic** - Automatic retry with exponential backoff- 🎯 **Smart Web Scraping** - Intelligent video extraction with Cheerio├── app.js                    # Main application entry point

- 🎨 **Responsive Design** - Mobile-friendly web interface

- 🏷️ **Tag-Based Filtering** - Filter by 8 available video categories├── config/

---

- 📊 **Interactive Dashboard** - Real-time scraping with beautiful UI│   └── config.js            # Configuration settings

## 📋 Table of Contents

- 🎬 **Video Detail Pages** - Full video player with metadata├── models/

- [Installation](#-installation)

- [Usage](#-usage)- 💾 **Multiple Export Formats** - JSON and CSV output support│   ├── VideoModel.js        # Data layer - Video scraping logic

- [API Documentation](#-api-documentation)

- [Project Structure](#-project-structure)- 🔄 **Rate Limiting** - Prevents server overload with smart delays│   └── StorageModel.js      # Data layer - File operations

- [Configuration](#%EF%B8%8F-configuration)

- [Technologies](#%EF%B8%8F-technologies)- 🏗️ **MVC Architecture** - Clean, maintainable code structure├── views/

- [Available Tags](#-available-tags)

- [Deployment](#-deployment)- 📡 **RESTful API** - Well-documented API endpoints│   ├── home.html            # Landing page

- [Contributing](#-contributing)

- ⚡ **Background Processing** - Non-blocking scraping operations│   └── dashboard.html       # Dashboard UI

---

- 🎨 **Responsive Design** - Mobile-friendly interface├── controllers/

## 🚀 Installation

│   └── VideoController.js   # Business logic layer

### Prerequisites

## 📋 Table of Contents├── routes/

- **Node.js** v14 or higher

- **npm** or **yarn**│   └── api.js               # API route definitions

- Internet connection

- [Installation](#installation)├── data/                    # Output directory

### Steps

- [Usage](#usage)│   ├── buumal_videos.json   # Scraped data (JSON)

1. **Clone the repository**

```bash- [API Documentation](#api-documentation)│   └── buumal_videos.csv    # Scraped data (CSV)

git clone https://github.com/Thawtarlamin/BUU-MAL.git

cd BUU-MAL- [Project Structure](#project-structure)└── public/                  # Static assets

```

- [Configuration](#configuration)```

2. **Install dependencies**

```bash- [Technologies](#technologies)

npm install

```- [Available Tags](#available-tags)### 📦 Model Layer



3. **Start the application**- [Export Formats](#export-formats)- **VideoModel.js** - Handles web scraping, HTTP requests, HTML parsing

```bash

npm start- [Contributing](#contributing)- **StorageModel.js** - Manages file operations, data persistence, statistics

```

- [License](#license)

4. **Access the application**

- 🏠 Home Page: http://localhost:3000### 🎨 View Layer

- 📊 Dashboard: http://localhost:3000/dashboard.html

- 📚 API: http://localhost:3000/api/videos## 🚀 Installation- **home.html** - API documentation and landing page



---- **dashboard.html** - Interactive web dashboard for scraping



## 💻 Usage### Prerequisites



### Web Dashboard### 🎮 Controller Layer



1. Navigate to `http://localhost:3000/dashboard.html`- Node.js (v14 or higher)- **VideoController.js** - Orchestrates models, handles business logic, processes requests

2. Configure scraping parameters:

   - **Start Page**: Starting page number (default: 1)- npm or yarn

   - **End Page**: Ending page number (default: 3)

   - **Tag Filter**: Select specific category or "All Tags"### 🛣️ Routes Layer

   - **Include Details**: ✓ Enable for full video details (slower but complete)

3. Click **"🚀 Start Scraping"**### Steps- **api.js** - Defines API endpoints and maps to controller methods

4. View scraped videos in real-time

5. Click **"🎬 View Details"** to watch videos with full metadata



### API Usage Examples1. **Clone the repository**### ⚙️ Config Layer



**Scrape a single page:**   ```bash- **config.js** - Centralized configuration (server, scraper settings, tags)

```bash

curl http://localhost:3000/api/scrape?page=1   git clone https://github.com/yourusername/buumal-scraper.git

```

   cd buumal-scraper---

**Scrape with tag filter:**

```bash   ```

curl http://localhost:3000/api/scrape?page=1&tag=myanmar

```## ✨ Features



**Scrape with full details:**2. **Install dependencies**

```bash

curl http://localhost:3000/api/scrape?page=1&details=true   ```bash- ✅ **MVC Architecture** - Clean separation of concerns

```

   npm install- ✅ **RESTful API** - 6 well-documented endpoints

**Scrape multiple pages:**

```bash   ```- ✅ **Web Dashboard** - Beautiful UI for easy scraping

curl http://localhost:3000/api/scrape/multiple?startPage=1&endPage=3&tag=myanmar

```- ✅ **Smart Scraping** - Rate limiting, error handling, retries



**Get specific video details:**3. **Start the application**- ✅ **Tag Filtering** - Filter by 8 different categories

```bash

curl http://localhost:3000/api/scrape/video/690ACE0F   ```bash- ✅ **Dual Export** - Automatic JSON & CSV export

```

   npm start- ✅ **Analytics** - Detailed statistics and insights

---

   ```- ✅ **Pagination** - Efficient data retrieval

## 📡 API Documentation

   or- ✅ **CORS Enabled** - Cross-origin request support

### Base URL

```   ```bash

http://localhost:3000/api

```   node app.js---



### Endpoints   ```



#### 1️⃣ Scrape Single Page## 🚀 Quick Start

```http

GET /api/scrape?page=<number>&tag=<tag>&details=<boolean>4. **Access the application**

```

   - Home Page: http://localhost:3000### Installation

**Query Parameters:**

| Parameter | Type | Required | Description |   - Dashboard: http://localhost:3000/dashboard.html```bash

|-----------|------|----------|-------------|

| `page` | number | ✅ Yes | Page number to scrape |   - API: http://localhost:3000/api/videos# Dependencies already installed

| `tag` | string | ❌ No | Filter by category |

| `details` | boolean | ❌ No | Include full video details |npm install



**Response:**## 💻 Usage```

```json

{

  "success": true,

  "data": {### Web Dashboard### Start the Server

    "videos": [...],

    "count": 20,```bash

    "page": 1

  }1. Open your browser and navigate to `http://localhost:3000/dashboard.html`npm start

}

```2. Configure scraping parameters:```



#### 2️⃣ Scrape Multiple Pages   - **Start Page**: Starting page number (default: 1)

```http

GET /api/scrape/multiple?startPage=<number>&endPage=<number>&tag=<tag>&details=<boolean>   - **End Page**: Ending page number (default: 3)Visit: **http://localhost:3000**

```

   - **Tag Filter**: Select specific category or "All Tags"

**Query Parameters:**

| Parameter | Type | Required | Description |   - **Include Details**: ✓ Enable for full video details (videoSrc, tags, description)---

|-----------|------|----------|-------------|

| `startPage` | number | ✅ Yes | Starting page number |3. Click **"🚀 Start Scraping"**

| `endPage` | number | ✅ Yes | Ending page number |

| `tag` | string | ❌ No | Filter by category |4. View results in real-time## 📚 API Documentation

| `details` | boolean | ❌ No | Include full video details |

5. Click **"🎬 View Details"** on any video to watch with full metadata

**Response:**

```json### Base URL

{

  "success": true,### CLI Usage```

  "data": {

    "videos": [...],http://localhost:3000/api

    "count": 60,

    "pages": "1-3"You can also use the API directly via curl or any HTTP client:```

  }

}

```

**Scrape a single page:**### Endpoints

#### 3️⃣ Get Video Details

```http```bash

GET /api/scrape/video/:id

```curl http://localhost:3000/api/scrape?page=1#### 1. Scrape Single Page



**Response:**``````http

```json

{GET /api/scrape?page=1&tag=myanmar

  "success": true,

  "data": {**Scrape multiple pages with tag filter:**```

    "videoId": "690ACE0F",

    "title": "Video Title",```bash

    "videoSrc": "https://...",

    "thumbnail": "https://...",curl http://localhost:3000/api/scrape/multiple?startPage=1&endPage=3&tag=myanmar**Query Parameters:**

    "tags": ["tag1", "tag2"],

    "description": "..."```- `page` (optional) - Page number (default: 1)

  }

}- `tag` (optional) - Category filter

```

**Get full video details:**

#### 4️⃣ Get All Saved Videos

```http```bash**Response:**

GET /api/videos?page=<number>&limit=<number>

```curl http://localhost:3000/api/scrape?page=1&details=true```json



**Query Parameters:**```{

| Parameter | Type | Default | Description |

|-----------|------|---------|-------------|  "success": true,

| `page` | number | 1 | Page number for pagination |

| `limit` | number | 20 | Items per page |**Get specific video details:**  "data": {



#### 5️⃣ Get Available Tags```bash    "videos": [...],

```http

GET /api/tagscurl http://localhost:3000/api/scrape/video/690ACE0F    "totalVideos": "54314",

```

```    "page": 1,

**Response:**

```json    "count": 20

{

  "success": true,## 📡 API Documentation  },

  "tags": ["drhmonegyi", "myanmar", "drkogyi", ...]

}  "message": "Successfully scraped 20 videos from page 1"

```

### Base URL}

#### 6️⃣ Get Statistics

```http``````

GET /api/stats

```http://localhost:3000/api



**Response:**```#### 2. Scrape Multiple Pages

```json

{```http

  "success": true,

  "stats": {### EndpointsGET /api/scrape/multiple?startPage=1&endPage=3&tag=myanmar

    "totalVideos": 150,

    "availableTags": 8,```

    "lastUpdated": "2025-11-05T..."

  }#### 1. Scrape Single Page

}

``````http**Query Parameters:**



---GET /api/scrape?page=1&tag=myanmar&details=true- `startPage` (optional) - Start page (default: 1)



## 📁 Project Structure```- `endPage` (optional) - End page (default: 3)



```- `tag` (optional) - Category filter

BUU-MAL/

├── 📄 app.js                   # Main application entry point**Query Parameters:**- **Max:** 10 pages per request

├── 📄 package.json             # Dependencies and scripts

├── 📄 README.md                # This file- `page` (required): Page number to scrape

├── 📄 .gitignore               # Git ignore rules

│- `tag` (optional): Filter by tag (drhmonegyi, myanmar, drkogyi, mamagyi, kosargyi, samusar, mmporns, mmhdhub)**Response:**

├── 📁 config/

│   └── config.js               # Centralized configuration- `details` (optional): Set to `true` for full video details```json

│

├── 📁 models/                  # Data Layer (MVC){

│   ├── VideoModel.js           # Video scraping logic

│   └── StorageModel.js         # Data storage operations**Response:**  "success": true,

│

├── 📁 controllers/             # Business Logic Layer (MVC)```json  "data": {

│   └── VideoController.js      # Request handling

│{    "videos": [...],

├── 📁 routes/                  # Routes Layer

│   └── api.js                  # API endpoint definitions  "success": true,    "count": 60,

│

├── 📁 views/                   # Presentation Layer (MVC)  "data": {    "pages": "1-3"

│   ├── home.html               # Landing page

│   ├── dashboard.html          # Interactive dashboard    "videos": [...],  },

│   └── video-detail.html       # Video player page

│    "count": 20,  "message": "Successfully scraped 60 videos from pages 1 to 3"

└── 📁 data/                    # Output Directory

    ├── buumal_videos.json      # JSON export    "page": 1}

    └── buumal_videos.csv       # CSV export

```  }```



### MVC Architecture}



#### 📦 Model Layer```#### 3. Get Video Details

- **VideoModel.js** - Handles web scraping, HTTP requests, HTML parsing

- **StorageModel.js** - Manages file I/O, data persistence, pagination```http



#### 🎨 View Layer#### 2. Scrape Multiple PagesGET /api/scrape/video/:id

- **home.html** - API documentation page

- **dashboard.html** - Interactive scraping interface```http```

- **video-detail.html** - Video player with full details

GET /api/scrape/multiple?startPage=1&endPage=3&tag=myanmar&details=true

#### 🎮 Controller Layer

- **VideoController.js** - Orchestrates models, processes requests```**Example:**



#### 🛣️ Routes Layer```http

- **api.js** - Maps URLs to controller methods

**Query Parameters:**GET /api/scrape/video/690ACE0F

#### ⚙️ Config Layer

- **config.js** - Centralized settings (server, scraper, tags)- `startPage` (required): Starting page number```



---- `endPage` (required): Ending page number



## ⚙️ Configuration- `tag` (optional): Filter by tag**Response:**



Edit `config/config.js` to customize:- `details` (optional): Set to `true` for full video details```json



```javascript{

module.exports = {

    server: {**Response:**  "success": true,

        port: process.env.PORT || 3000

    },```json  "data": {

    scraper: {

        baseUrl: 'https://www.buumal.com',{    "url": "https://www.buumal.com/video/690ACE0F",

        timeout: 15000,                  // 15 seconds

        delayBetweenRequests: 3000,      // 3 seconds  "success": true,    "title": "Video Title",

        userAgent: 'Mozilla/5.0...'

    },  "data": {    "embedUrl": "...",

    tags: [

        'drhmonegyi', 'myanmar', 'drkogyi', 'mamagyi',    "videos": [...],    "videoSrc": "..."

        'kosargyi', 'samusar', 'mmporns', 'mmhdhub'

    ]    "count": 60,  }

};

```    "pages": "1-3"}



### Key Settings  }```



| Setting | Default | Description |}

|---------|---------|-------------|

| `timeout` | 15000ms | HTTP request timeout |```#### 4. Get All Saved Videos

| `delayBetweenRequests` | 3000ms | Delay between page requests |

| `maxRetries` | 3 | Number of retry attempts |```http



---#### 3. Get Video DetailsGET /api/videos?page=1&limit=20



## 🛠️ Technologies```http```



### BackendGET /api/scrape/video/:id

- **Node.js** - JavaScript runtime

- **Express.js v5.1.0** - Web framework```**Query Parameters:**

- **Axios v1.13.2** - HTTP client

- **Cheerio v1.1.2** - HTML parser- `page` (optional) - Page number (default: 1)



### Frontend**URL Parameters:**- `limit` (optional) - Items per page (default: 20, max: 100)

- **HTML5** - Markup

- **CSS3** - Styling with gradients- `id` (required): Video ID

- **Vanilla JavaScript** - No frameworks

- **Fetch API** - Async requests**Response:**



### Architecture**Response:**```json

- **MVC Pattern** - Model-View-Controller

- **RESTful API** - Standard HTTP methods```json{

- **Modular Design** - Separation of concerns

{  "success": true,

---

  "success": true,  "data": {

## 🎯 Available Tags

  "data": {    "videos": [...],

| Tag | Category |

|-----|----------|    "videoId": "690ACE0F",    "pagination": {

| `drhmonegyi` | Dr. Hmon Egyi |

| `myanmar` | Myanmar |    "title": "Video Title",      "currentPage": 1,

| `drkogyi` | Dr. Ko Gyi |

| `mamagyi` | Mama Gyi |    "videoSrc": "https://...",      "totalVideos": 60,

| `kosargyi` | Ko Sar Gyi |

| `samusar` | Sam U Sar |    "thumbnail": "https://...",      "totalPages": 3,

| `mmporns` | MM Porns |

| `mmhdhub` | MM HD Hub |    "tags": ["tag1", "tag2"],      "limit": 20,



---    "description": "..."      "hasNextPage": true,



## 📊 Export Formats  }      "hasPrevPage": false



### JSON Export (`data/buumal_videos.json`)}    }

```json

[```  }

  {

    "success": true,}

    "videoId": "690ACE0F",

    "title": "Video Title",#### 4. Get All Saved Videos```

    "videoUrl": "https://www.buumal.com/video/690ACE0F",

    "videoSrc": "https://...",```http

    "thumbnail": "https://...",

    "tags": ["myanmar", "drkogyi"],GET /api/videos?page=1&limit=20#### 5. Get Available Tags

    "description": "Description...",

    "timeAgo": "3 hours ago",``````http

    "page": 1

  }GET /api/tags

]

```**Query Parameters:**```



### CSV Export (`data/buumal_videos.csv`)- `page` (optional): Page number for pagination (default: 1)

```csv

videoId,title,videoUrl,thumbnailUrl,timeAgo,page,tag- `limit` (optional): Items per page (default: 20)**Response:**

690ACE0F,"Video Title","https://...","https://...","3 hours ago",1,"myanmar"

``````json



---**Response:**{



## 🚀 Deployment```json  "success": true,



### Deploy to Render.com{  "data": {



1. **Create Web Service**  "success": true,    "tags": [

   - Go to [Render Dashboard](https://dashboard.render.com/)

   - Click "New +" → "Web Service"  "data": {      "drhmonegyi",

   - Connect your GitHub repository: `Thawtarlamin/BUU-MAL`

    "videos": [...],      "myanmar",

2. **Configure Service**

   ```    "pagination": {      "drkogyi",

   Name: buumal-scraper

   Region: Singapore or Oregon      "currentPage": 1,      "mamagyi",

   Branch: main

   Runtime: Node      "totalPages": 5,      "kosargyi",

   Build Command: npm install

   Start Command: node app.js      "totalVideos": 100,      "samusar",

   Instance Type: Free

   ```      "limit": 20      "mmporns",



3. **Environment Variables (Optional)**    }      "mmhdhub"

   ```

   PORT=3000  }    ],

   NODE_ENV=production

   ```}    "count": 8



4. **Deploy**```  }

   - Click "Create Web Service"

   - Wait for deployment to complete}

   - Access your app at the provided URL

#### 5. Get Available Tags```

### Deploy to Other Platforms

```http

**Heroku:**

```bashGET /api/tags#### 6. Get Statistics

heroku create buumal-scraper

git push heroku main``````http

```

GET /api/stats

**Railway:**

```bash**Response:**```

railway login

railway init```json

railway up

```{**Response:**



**DigitalOcean App Platform:**  "success": true,```json

- Connect GitHub repository

- Auto-detect Node.js  "tags": ["drhmonegyi", "myanmar", "drkogyi", "mamagyi", "kosargyi", "samusar", "mmporns", "mmhdhub"]{

- Deploy

}  "success": true,

---

```  "data": {

## ⚠️ Rate Limiting & Best Practices

    "totalVideos": 60,

### Built-in Protection

#### 6. Get Statistics    "videosByTag": {

- ✅ **500ms delay** between video detail requests

- ✅ **3 second delay** between page requests```http      "all": 60

- ✅ **Retry logic** with exponential backoff (3 attempts)

- ✅ **Realistic headers** to mimic browser behaviorGET /api/stats    },

- ✅ **15 second timeout** for slow connections

```    "videosByPage": {

### Best Practices

      "1": 20,

1. ✅ Use rate limiting to avoid overwhelming servers

2. ✅ Enable "Include Details" only when necessary**Response:**      "2": 20,

3. ✅ Export data regularly to prevent loss

4. ✅ Check `data/` folder for saved results```json      "3": 20

5. ✅ Respect target website's terms of service

6. ✅ Monitor logs for errors{    },



---  "success": true,    "latestScrape": "6 hours ago"



## 🐛 Troubleshooting  "stats": {  }



### Common Issues    "totalVideos": 150,}



**403 Forbidden Error:**    "availableTags": 8,```

- Website may be blocking datacenter IPs

- Solution: Use residential proxy or VPS    "lastUpdated": "2025-11-05T..."

- Already implemented: Retry logic with better headers

  }---

**Timeout Errors:**

- Increase timeout in `config.js`}

- Check internet connection

- Try fewer pages at once```## 💻 Programmatic Usage



**Empty Results:**

- Check if website structure changed

- Verify selectors in `VideoModel.js`## 📁 Project Structure### Using Models Directly

- Check console logs for errors



**Data Not Saving:**

- Ensure `data/` directory exists``````javascript

- Check file permissions

- Verify disk spacebuumal-scraper/const VideoModel = require('./models/VideoModel');



---├── app.js                      # Main application entry pointconst StorageModel = require('./models/StorageModel');



## 🤝 Contributing├── package.json                # Project dependencies



Contributions are welcome! Please follow these steps:├── README.md                   # This fileasync function example() {



1. Fork the repository│    const videoModel = new VideoModel();

2. Create a feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)├── config/    const storageModel = new StorageModel();

4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request│   └── config.js              # Centralized configuration    



### Coding Standards│    // Scrape videos

- Follow existing MVC structure

- Add comments for complex logic├── models/    const result = await videoModel.scrapeVideos(1, 'myanmar');

- Update README for new features

- Test thoroughly before submitting│   ├── VideoModel.js          # Video scraping logic (Data Layer)    



---│   └── StorageModel.js        # Data storage operations (Data Layer)    // Save to files



## 📋 Roadmap│    storageModel.saveToJson(result.videos);



- [ ] Add pagination to dashboard results├── controllers/    storageModel.saveToCsv(result.videos);

- [ ] Implement search functionality

- [ ] Add video download manager│   └── VideoController.js     # Business logic layer    

- [ ] Create video playlists

- [ ] Export to XML and Excel formats│    // Load from files

- [ ] Implement Redis caching

- [ ] Add user authentication├── routes/    const loaded = storageModel.loadFromJson();

- [ ] Mobile app development

- [ ] Video quality selection│   └── api.js                 # API route definitions    

- [ ] Batch download feature

│    // Get statistics

---

├── views/    const stats = storageModel.getStatistics();

## 📄 License

│   ├── home.html              # Landing page with API docs}

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

│   ├── dashboard.html         # Interactive scraping dashboard```

---

│   └── video-detail.html      # Video player with full details

## 👤 Author

│### Using Controller

**Thawtar Lamin**

- GitHub: [@Thawtarlamin](https://github.com/Thawtarlamin)└── data/

- Repository: [BUU-MAL](https://github.com/Thawtarlamin/BUU-MAL)

    ├── buumal_videos.json     # JSON export```javascript

---

    └── buumal_videos.csv      # CSV exportconst VideoController = require('./controllers/VideoController');

## 🙏 Acknowledgments

```

- [Cheerio](https://cheerio.js.org/) - Fast HTML parsing

- [Express.js](https://expressjs.com/) - Web frameworkconst controller = new VideoController();

- [Axios](https://axios-http.com/) - HTTP client

- [Node.js](https://nodejs.org/) - JavaScript runtime### MVC Architecture



---// Controller methods automatically handle request/response



## ⚖️ DisclaimerThis project follows the **Model-View-Controller** design pattern:// Used by Express routes



This tool is for **educational purposes only**. Please respect:```

- Website's Terms of Service

- robots.txt directives#### 📦 Model Layer

- Rate limiting policies

- Copyright and intellectual property rights- **VideoModel.js** - Handles web scraping, HTTP requests, HTML parsing with Cheerio---



The authors are not responsible for any misuse of this software.- **StorageModel.js** - Manages file operations, data persistence, pagination, statistics



---## 🎨 Web Dashboard



## 📞 Support#### 🎨 View Layer



Found a bug or have a question?- **home.html** - API documentation and landing pageAccess the interactive dashboard at: **http://localhost:3000/views/dashboard.html**



1. Check [Issues](https://github.com/Thawtarlamin/BUU-MAL/issues)- **dashboard.html** - Interactive web dashboard for scraping

2. Create a new issue with details

3. Contact via GitHub- **video-detail.html** - Video player page with metadata**Features:**



---- Real-time scraping



## 🌟 Show Your Support#### 🎮 Controller Layer- Visual statistics



If you find this project helpful:- **VideoController.js** - Orchestrates models, handles business logic, processes HTTP requests- Tag filtering



- ⭐ Star the repository- Video grid display

- 🍴 Fork for your own use

- 📢 Share with others#### 🛣️ Routes Layer- Export options

- 💬 Provide feedback

- 🐛 Report bugs- **api.js** - Defines API endpoints and maps to controller methods



------



<div align="center">#### ⚙️ Config Layer



**Made with ❤️ and Node.js**- **config.js** - Centralized configuration (server, scraper settings, tags)## ⚙️ Configuration



⭐ **[Star this repo](https://github.com/Thawtarlamin/BUU-MAL)** if you find it helpful!



*Last updated: November 5, 2025*## ⚙️ ConfigurationEdit `config/config.js` to customize:



</div>


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
