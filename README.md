# 🎬 Buumal Video Scraper# 🎬 Buumal Video Scraper# 🎬 Buumal Video Scraper# 🎬 Buumal Video Scraper - MVC Architecture



A professional web scraping application for **buumal.com** built with **MVC architecture** using Node.js, Express, Cheerio, and Axios.



[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)A professional web scraping application for **buumal.com** video content extraction, built with **Node.js**, **Express.js**, and following **MVC architecture** principles.

[![Express](https://img.shields.io/badge/Express-v5.1.0-blue.svg)](https://expressjs.com/)

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)



---[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)A professional web scraping tool for **buumal.com** video content extraction, built with **Node.js**, **Express.js**, and following **MVC architecture** principles.A professional web scraper for buumal.com built with **MVC (Model-View-Controller)** architecture pattern using Node.js, Express, Cheerio, and Axios.



## ✨ Features[![Express](https://img.shields.io/badge/Express-v5.1.0-blue.svg)](https://expressjs.com/)



- 🎯 **Smart Web Scraping** - Intelligent video extraction with Cheerio[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

- 🏷️ **Tag-Based Filtering** - Filter by 8 video categories

- 📊 **Interactive Dashboard** - Real-time scraping interface

- 🎬 **Video Detail Pages** - Full video player with metadata

- 💾 **Dual Export** - Automatic JSON & CSV export---![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)## 🏗️ Architecture Overview

- 🔄 **Rate Limiting** - Smart delays prevent server overload

- 🏗️ **MVC Architecture** - Clean, maintainable code structure

- 📡 **RESTful API** - 6 well-documented endpoints

- ⚡ **Retry Logic** - Automatic retry with exponential backoff## ✨ Features![Express](https://img.shields.io/badge/Express-v5.1.0-blue.svg)

- 🎨 **Responsive Design** - Mobile-friendly interface

- 💿 **Cached Fallback** - Returns saved data when scraping fails



---- 🎯 **Smart Web Scraping** - Intelligent video data extraction with Cheerio![License](https://img.shields.io/badge/license-MIT-green.svg)This project follows the **MVC design pattern** for clean, maintainable, and scalable code:



## 📋 Table of Contents- 🏷️ **Tag-Based Filtering** - Filter videos by 8 available categories



- [Installation](#-installation)- 📊 **Interactive Dashboard** - Real-time scraping with beautiful UI

- [Usage](#-usage)

- [API Documentation](#-api-documentation)- 🎬 **Video Detail Pages** - Full video player with complete metadata

- [Project Structure](#-project-structure)

- [Configuration](#%EF%B8%8F-configuration)- 💾 **Multiple Export Formats** - JSON and CSV output support## ✨ Features```

- [Technologies](#%EF%B8%8F-technologies)

- [Available Tags](#-available-tags)- 🔄 **Rate Limiting** - Smart delays to prevent server overload

- [Deployment](#-deployment)

- [Contributing](#-contributing)- 🏗️ **MVC Architecture** - Clean, maintainable, and scalable code structurebuumal/



---- 📡 **RESTful API** - Well-documented API endpoints



## 🚀 Installation- ⚡ **Retry Logic** - Automatic retry with exponential backoff- 🎯 **Smart Web Scraping** - Intelligent video extraction with Cheerio├── app.js                    # Main application entry point



### Prerequisites- 🎨 **Responsive Design** - Mobile-friendly web interface



- **Node.js** v14 or higher- 🏷️ **Tag-Based Filtering** - Filter by 8 available video categories├── config/

- **npm** or **yarn**

---

### Steps

- 📊 **Interactive Dashboard** - Real-time scraping with beautiful UI│   └── config.js            # Configuration settings

1. **Clone the repository**

```bash## 📋 Table of Contents

git clone https://github.com/Thawtarlamin/BUU-MAL.git

cd BUU-MAL- 🎬 **Video Detail Pages** - Full video player with metadata├── models/

```

- [Installation](#-installation)

2. **Install dependencies**

```bash- [Usage](#-usage)- 💾 **Multiple Export Formats** - JSON and CSV output support│   ├── VideoModel.js        # Data layer - Video scraping logic

npm install

```- [API Documentation](#-api-documentation)



3. **Start the application**- [Project Structure](#-project-structure)- 🔄 **Rate Limiting** - Prevents server overload with smart delays│   └── StorageModel.js      # Data layer - File operations

```bash

npm start- [Configuration](#%EF%B8%8F-configuration)

```

- [Technologies](#%EF%B8%8F-technologies)- 🏗️ **MVC Architecture** - Clean, maintainable code structure├── views/

4. **Access the application**

- 🏠 Home: http://localhost:3000- [Available Tags](#-available-tags)

- 📊 Dashboard: http://localhost:3000/dashboard.html

- 📚 API: http://localhost:3000/api/videos- [Deployment](#-deployment)- 📡 **RESTful API** - Well-documented API endpoints│   ├── home.html            # Landing page



---- [Contributing](#-contributing)



## 💻 Usage- ⚡ **Background Processing** - Non-blocking scraping operations│   └── dashboard.html       # Dashboard UI



### Web Dashboard---



1. Navigate to `http://localhost:3000/dashboard.html`- 🎨 **Responsive Design** - Mobile-friendly interface├── controllers/

2. Configure parameters:

   - **Start Page**: Starting page number (default: 1)## 🚀 Installation

   - **End Page**: Ending page number (default: 3)

   - **Tag Filter**: Select category or "All Tags"│   └── VideoController.js   # Business logic layer

   - **Include Details**: ✓ Enable for full details (slower)

3. Click **"🚀 Start Scraping"**### Prerequisites

4. View results in real-time

5. Click **"🎬 View Details"** to watch videos## 📋 Table of Contents├── routes/



### API Examples- **Node.js** v14 or higher



**Scrape single page:**- **npm** or **yarn**│   └── api.js               # API route definitions

```bash

curl http://localhost:3000/api/scrape?page=1- Internet connection

```

- [Installation](#installation)├── data/                    # Output directory

**Scrape with tag filter:**

```bash### Steps

curl http://localhost:3000/api/scrape?page=1&tag=myanmar

```- [Usage](#usage)│   ├── buumal_videos.json   # Scraped data (JSON)



**Scrape with full details:**1. **Clone the repository**

```bash

curl http://localhost:3000/api/scrape?page=1&details=true```bash- [API Documentation](#api-documentation)│   └── buumal_videos.csv    # Scraped data (CSV)

```

git clone https://github.com/Thawtarlamin/BUU-MAL.git

**Scrape multiple pages:**

```bashcd BUU-MAL- [Project Structure](#project-structure)└── public/                  # Static assets

curl http://localhost:3000/api/scrape/multiple?startPage=1&endPage=3&tag=myanmar

``````



**Get video details:**- [Configuration](#configuration)```

```bash

curl http://localhost:3000/api/scrape/video/690ACE0F2. **Install dependencies**

```

```bash- [Technologies](#technologies)

---

npm install

## 📡 API Documentation

```- [Available Tags](#available-tags)### 📦 Model Layer

### Base URL

```

http://localhost:3000/api

```3. **Start the application**- [Export Formats](#export-formats)- **VideoModel.js** - Handles web scraping, HTTP requests, HTML parsing



### Endpoints```bash



#### 1️⃣ Scrape Single Pagenpm start- [Contributing](#contributing)- **StorageModel.js** - Manages file operations, data persistence, statistics

```http

GET /api/scrape?page=<number>&tag=<tag>&details=<boolean>```

```

- [License](#license)

| Parameter | Type | Required | Description |

|-----------|------|----------|-------------|4. **Access the application**

| `page` | number | ✅ Yes | Page number |

| `tag` | string | ❌ No | Category filter |- 🏠 Home Page: http://localhost:3000### 🎨 View Layer

| `details` | boolean | ❌ No | Include full details |

- 📊 Dashboard: http://localhost:3000/dashboard.html

**Response:**

```json- 📚 API: http://localhost:3000/api/videos## 🚀 Installation- **home.html** - API documentation and landing page

{

  "success": true,

  "data": {

    "videos": [...],---- **dashboard.html** - Interactive web dashboard for scraping

    "count": 20,

    "page": 1

  },

  "cached": false## 💻 Usage### Prerequisites

}

```



#### 2️⃣ Scrape Multiple Pages### Web Dashboard### 🎮 Controller Layer

```http

GET /api/scrape/multiple?startPage=<number>&endPage=<number>&tag=<tag>&details=<boolean>

```

1. Navigate to `http://localhost:3000/dashboard.html`- Node.js (v14 or higher)- **VideoController.js** - Orchestrates models, handles business logic, processes requests

| Parameter | Type | Required | Description |

|-----------|------|----------|-------------|2. Configure scraping parameters:

| `startPage` | number | ✅ Yes | Start page |

| `endPage` | number | ✅ Yes | End page |   - **Start Page**: Starting page number (default: 1)- npm or yarn

| `tag` | string | ❌ No | Category filter |

| `details` | boolean | ❌ No | Include full details |   - **End Page**: Ending page number (default: 3)



**Max:** 10 pages per request   - **Tag Filter**: Select specific category or "All Tags"### 🛣️ Routes Layer



#### 3️⃣ Get Video Details   - **Include Details**: ✓ Enable for full video details (slower but complete)

```http

GET /api/scrape/video/:id3. Click **"🚀 Start Scraping"**### Steps- **api.js** - Defines API endpoints and maps to controller methods

```

4. View scraped videos in real-time

**Response:**

```json5. Click **"🎬 View Details"** to watch videos with full metadata

{

  "success": true,

  "data": {

    "videoId": "690ACE0F",### API Usage Examples1. **Clone the repository**### ⚙️ Config Layer

    "title": "Video Title",

    "videoSrc": "https://...",

    "thumbnail": "https://...",

    "tags": ["myanmar"],**Scrape a single page:**   ```bash- **config.js** - Centralized configuration (server, scraper settings, tags)

    "description": "..."

  }```bash

}

```curl http://localhost:3000/api/scrape?page=1   git clone https://github.com/yourusername/buumal-scraper.git



#### 4️⃣ Get All Saved Videos```

```http

GET /api/videos?page=<number>&limit=<number>   cd buumal-scraper---

```

**Scrape with tag filter:**

| Parameter | Type | Default | Description |

|-----------|------|---------|-------------|```bash   ```

| `page` | number | 1 | Page number |

| `limit` | number | 20 | Items per page (max: 100) |curl http://localhost:3000/api/scrape?page=1&tag=myanmar



#### 5️⃣ Get Available Tags```## ✨ Features

```http

GET /api/tags

```

**Scrape with full details:**2. **Install dependencies**

**Response:**

```json```bash

{

  "success": true,curl http://localhost:3000/api/scrape?page=1&details=true   ```bash- ✅ **MVC Architecture** - Clean separation of concerns

  "tags": ["drhmonegyi", "myanmar", ...]

}```

```

   npm install- ✅ **RESTful API** - 6 well-documented endpoints

#### 6️⃣ Get Statistics

```http**Scrape multiple pages:**

GET /api/stats

``````bash   ```- ✅ **Web Dashboard** - Beautiful UI for easy scraping



**Response:**curl http://localhost:3000/api/scrape/multiple?startPage=1&endPage=3&tag=myanmar

```json

{```- ✅ **Smart Scraping** - Rate limiting, error handling, retries

  "success": true,

  "stats": {

    "totalVideos": 150,

    "availableTags": 8,**Get specific video details:**3. **Start the application**- ✅ **Tag Filtering** - Filter by 8 different categories

    "lastUpdated": "2025-11-05T..."

  }```bash

}

```curl http://localhost:3000/api/scrape/video/690ACE0F   ```bash- ✅ **Dual Export** - Automatic JSON & CSV export



---```



## 📁 Project Structure   npm start- ✅ **Analytics** - Detailed statistics and insights



```---

BUU-MAL/

├── app.js                      # Main entry point   ```- ✅ **Pagination** - Efficient data retrieval

├── package.json                # Dependencies

├── README.md                   # Documentation## 📡 API Documentation

├── .gitignore                  # Git ignore rules

│   or- ✅ **CORS Enabled** - Cross-origin request support

├── config/

│   └── config.js              # Configuration### Base URL

│

├── models/                     # Data Layer (MVC)```   ```bash

│   ├── VideoModel.js          # Scraping logic

│   └── StorageModel.js        # Data storagehttp://localhost:3000/api

│

├── controllers/                # Business Logic (MVC)```   node app.js---

│   └── VideoController.js     # Request handling

│

├── routes/                     # Routes Layer

│   └── api.js                 # API endpoints### Endpoints   ```

│

├── views/                      # Presentation (MVC)

│   ├── home.html              # Landing page

│   ├── dashboard.html         # Dashboard#### 1️⃣ Scrape Single Page## 🚀 Quick Start

│   └── video-detail.html      # Video player

│```http

└── data/                       # Output

    ├── buumal_videos.json     # JSON exportGET /api/scrape?page=<number>&tag=<tag>&details=<boolean>4. **Access the application**

    └── buumal_videos.csv      # CSV export

``````



### MVC Architecture   - Home Page: http://localhost:3000### Installation



**📦 Model Layer****Query Parameters:**

- `VideoModel.js` - Web scraping, HTTP requests

- `StorageModel.js` - File I/O, data persistence| Parameter | Type | Required | Description |   - Dashboard: http://localhost:3000/dashboard.html```bash



**🎨 View Layer**|-----------|------|----------|-------------|

- `home.html` - API documentation

- `dashboard.html` - Interactive interface| `page` | number | ✅ Yes | Page number to scrape |   - API: http://localhost:3000/api/videos# Dependencies already installed

- `video-detail.html` - Video player

| `tag` | string | ❌ No | Filter by category |

**🎮 Controller Layer**

- `VideoController.js` - Business logic| `details` | boolean | ❌ No | Include full video details |npm install



**🛣️ Routes Layer**

- `api.js` - URL to controller mapping

**Response:**## 💻 Usage```

**⚙️ Config Layer**

- `config.js` - Settings management```json



---{



## ⚙️ Configuration  "success": true,



Edit `config/config.js`:  "data": {### Web Dashboard### Start the Server



```javascript    "videos": [...],

module.exports = {

    server: {    "count": 20,```bash

        port: process.env.PORT || 3000

    },    "page": 1

    scraper: {

        baseUrl: 'https://www.buumal.com',  }1. Open your browser and navigate to `http://localhost:3000/dashboard.html`npm start

        timeout: 15000,              // 15 seconds

        delayBetweenRequests: 3000,  // 3 seconds}

        userAgent: 'Mozilla/5.0...'

    },```2. Configure scraping parameters:```

    pagination: {

        defaultLimit: 20,

        maxLimit: 100

    },#### 2️⃣ Scrape Multiple Pages   - **Start Page**: Starting page number (default: 1)

    tags: [

        'drhmonegyi', 'myanmar', 'drkogyi', 'mamagyi',```http

        'kosargyi', 'samusar', 'mmporns', 'mmhdhub'

    ]GET /api/scrape/multiple?startPage=<number>&endPage=<number>&tag=<tag>&details=<boolean>   - **End Page**: Ending page number (default: 3)Visit: **http://localhost:3000**

};

``````



---   - **Tag Filter**: Select specific category or "All Tags"



## 🛠️ Technologies**Query Parameters:**



### Backend| Parameter | Type | Required | Description |   - **Include Details**: ✓ Enable for full video details (videoSrc, tags, description)---

- **Node.js** - Runtime

- **Express.js v5.1.0** - Web framework|-----------|------|----------|-------------|

- **Axios v1.13.2** - HTTP client

- **Cheerio v1.1.2** - HTML parser| `startPage` | number | ✅ Yes | Starting page number |3. Click **"🚀 Start Scraping"**



### Frontend| `endPage` | number | ✅ Yes | Ending page number |

- **HTML5** - Markup

- **CSS3** - Styling| `tag` | string | ❌ No | Filter by category |4. View results in real-time## 📚 API Documentation

- **JavaScript** - Interactivity

- **Fetch API** - HTTP requests| `details` | boolean | ❌ No | Include full video details |



### Architecture5. Click **"🎬 View Details"** on any video to watch with full metadata

- **MVC Pattern** - Separation of concerns

- **RESTful API** - Standard HTTP methods**Response:**

- **Modular Design** - Reusable components

```json### Base URL

---

{

## 🎯 Available Tags

  "success": true,### CLI Usage```

| Tag | Description |

|-----|-------------|  "data": {

| `drhmonegyi` | Dr. Hmon Egyi |

| `myanmar` | Myanmar |    "videos": [...],http://localhost:3000/api

| `drkogyi` | Dr. Ko Gyi |

| `mamagyi` | Mama Gyi |    "count": 60,

| `kosargyi` | Ko Sar Gyi |

| `samusar` | Sam U Sar |    "pages": "1-3"You can also use the API directly via curl or any HTTP client:```

| `mmporns` | MM Porns |

| `mmhdhub` | MM HD Hub |  }



---}



## 📊 Export Formats```



### JSON (`data/buumal_videos.json`)**Scrape a single page:**### Endpoints

```json

[#### 3️⃣ Get Video Details

  {

    "videoId": "690ACE0F",```http```bash

    "title": "Video Title",

    "videoUrl": "https://www.buumal.com/video/690ACE0F",GET /api/scrape/video/:id

    "videoSrc": "https://...",

    "thumbnail": "https://...",```curl http://localhost:3000/api/scrape?page=1#### 1. Scrape Single Page

    "tags": ["myanmar"],

    "description": "...",

    "timeAgo": "3 hours ago",

    "page": 1**Response:**``````http

  }

]```json

```

{GET /api/scrape?page=1&tag=myanmar

### CSV (`data/buumal_videos.csv`)

```csv  "success": true,

videoId,title,videoUrl,thumbnailUrl,timeAgo,page,tag

690ACE0F,"Video Title","https://...","https://...","3 hours ago",1,"myanmar"  "data": {**Scrape multiple pages with tag filter:**```

```

    "videoId": "690ACE0F",

---

    "title": "Video Title",```bash

## 🚀 Deployment

    "videoSrc": "https://...",

### Render.com

    "thumbnail": "https://...",curl http://localhost:3000/api/scrape/multiple?startPage=1&endPage=3&tag=myanmar**Query Parameters:**

1. **Create Web Service**

   - Go to [Render Dashboard](https://dashboard.render.com/)    "tags": ["tag1", "tag2"],

   - Click "New" → "Web Service"

   - Connect: `Thawtarlamin/BUU-MAL`    "description": "..."```- `page` (optional) - Page number (default: 1)



2. **Configure**  }

   ```

   Name: buumal-scraper}- `tag` (optional) - Category filter

   Region: Singapore

   Branch: main```

   Build Command: npm install

   Start Command: node app.js**Get full video details:**

   ```

#### 4️⃣ Get All Saved Videos

3. **Deploy**

   - Click "Create Web Service"```http```bash**Response:**

   - Wait for deployment

GET /api/videos?page=<number>&limit=<number>

### Heroku

```bash```curl http://localhost:3000/api/scrape?page=1&details=true```json

heroku create buumal-scraper

git push heroku main

```

**Query Parameters:**```{

### Railway

```bash| Parameter | Type | Default | Description |

railway login

railway init|-----------|------|---------|-------------|  "success": true,

railway up

```| `page` | number | 1 | Page number for pagination |



---| `limit` | number | 20 | Items per page |**Get specific video details:**  "data": {



## ⚠️ Rate Limiting



### Built-in Protection#### 5️⃣ Get Available Tags```bash    "videos": [...],



- ✅ 500ms delay between detail requests```http

- ✅ 3 second delay between pages

- ✅ 3 retry attempts with exponential backoffGET /api/tagscurl http://localhost:3000/api/scrape/video/690ACE0F    "totalVideos": "54314",

- ✅ Realistic browser headers

- ✅ 15 second timeout```

- ✅ Fallback to cached data on failure

```    "page": 1,

### Best Practices

**Response:**

1. ✅ Use rate limiting

2. ✅ Enable details only when needed```json    "count": 20

3. ✅ Export data regularly

4. ✅ Respect website terms{

5. ✅ Monitor logs for errors

  "success": true,## 📡 API Documentation  },

---

  "tags": ["drhmonegyi", "myanmar", "drkogyi", ...]

## 💿 Cached Fallback

}  "message": "Successfully scraped 20 videos from page 1"

When live scraping fails (403 error):

- Automatically returns cached data```

- Warning message indicates cached state

- Partial successes are saved### Base URL}

- Application remains functional

#### 6️⃣ Get Statistics

**Response with cache:**

```json```http``````

{

  "success": true,GET /api/stats

  "data": { "videos": [...] },

  "message": "Live scraping failed. Returning cached data.",```http://localhost:3000/api

  "warning": "Using cached data due to: Access forbidden (403)",

  "cached": true

}

```**Response:**```#### 2. Scrape Multiple Pages



---```json



## 🐛 Troubleshooting{```http



**403 Forbidden Error:**  "success": true,

- Website blocking datacenter IPs

- Fallback returns cached data  "stats": {### EndpointsGET /api/scrape/multiple?startPage=1&endPage=3&tag=myanmar

- Consider using VPS or proxy

    "totalVideos": 150,

**Timeout Errors:**

- Increase timeout in config    "availableTags": 8,```

- Check internet connection

- Try fewer pages    "lastUpdated": "2025-11-05T..."



**Empty Results:**  }#### 1. Scrape Single Page

- Check website structure

- Verify selectors}

- Check console logs

``````http**Query Parameters:**

**Data Not Saving:**

- Ensure `data/` directory exists

- Check file permissions

- Verify disk space---GET /api/scrape?page=1&tag=myanmar&details=true- `startPage` (optional) - Start page (default: 1)



---



## 🤝 Contributing## 📁 Project Structure```- `endPage` (optional) - End page (default: 3)



1. Fork the repository

2. Create feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit changes (`git commit -m 'Add AmazingFeature'`)```- `tag` (optional) - Category filter

4. Push to branch (`git push origin feature/AmazingFeature`)

5. Open Pull RequestBUU-MAL/



### Coding Standards├── 📄 app.js                   # Main application entry point**Query Parameters:**- **Max:** 10 pages per request

- Follow MVC structure

- Add comments├── 📄 package.json             # Dependencies and scripts

- Update documentation

- Test thoroughly├── 📄 README.md                # This file- `page` (required): Page number to scrape



---├── 📄 .gitignore               # Git ignore rules



## 📋 Roadmap│- `tag` (optional): Filter by tag (drhmonegyi, myanmar, drkogyi, mamagyi, kosargyi, samusar, mmporns, mmhdhub)**Response:**



- [ ] Dashboard pagination├── 📁 config/

- [ ] Search functionality

- [ ] Download manager│   └── config.js               # Centralized configuration- `details` (optional): Set to `true` for full video details```json

- [ ] Video playlists

- [ ] XML/Excel export│

- [ ] Redis caching

- [ ] User authentication├── 📁 models/                  # Data Layer (MVC){

- [ ] Mobile app

- [ ] Quality selection│   ├── VideoModel.js           # Video scraping logic

- [ ] Batch downloads

│   └── StorageModel.js         # Data storage operations**Response:**  "success": true,

---

│

## 📄 License

├── 📁 controllers/             # Business Logic Layer (MVC)```json  "data": {

ISC License - See [LICENSE](LICENSE) file

│   └── VideoController.js      # Request handling

---

│{    "videos": [...],

## 👤 Author

├── 📁 routes/                  # Routes Layer

**Thawtar Lamin**

- GitHub: [@Thawtarlamin](https://github.com/Thawtarlamin)│   └── api.js                  # API endpoint definitions  "success": true,    "count": 60,

- Repository: [BUU-MAL](https://github.com/Thawtarlamin/BUU-MAL)

│

---

├── 📁 views/                   # Presentation Layer (MVC)  "data": {    "pages": "1-3"

## 🙏 Acknowledgments

│   ├── home.html               # Landing page

- [Cheerio](https://cheerio.js.org/) - HTML parsing

- [Express.js](https://expressjs.com/) - Web framework│   ├── dashboard.html          # Interactive dashboard    "videos": [...],  },

- [Axios](https://axios-http.com/) - HTTP client

- [Node.js](https://nodejs.org/) - Runtime│   └── video-detail.html       # Video player page



---│    "count": 20,  "message": "Successfully scraped 60 videos from pages 1 to 3"



## ⚖️ Disclaimer└── 📁 data/                    # Output Directory



**For educational purposes only.**    ├── buumal_videos.json      # JSON export    "page": 1}



Please respect:    └── buumal_videos.csv       # CSV export

- Website terms of service

- robots.txt directives```  }```

- Rate limiting policies

- Copyright laws



Authors not responsible for misuse.### MVC Architecture}



---



## 📞 Support#### 📦 Model Layer```#### 3. Get Video Details



- [Issues](https://github.com/Thawtarlamin/BUU-MAL/issues)- **VideoModel.js** - Handles web scraping, HTTP requests, HTML parsing

- Create new issue with details

- Contact via GitHub- **StorageModel.js** - Manages file I/O, data persistence, pagination```http



---



## 🌟 Show Support#### 🎨 View Layer#### 2. Scrape Multiple PagesGET /api/scrape/video/:id



- ⭐ Star the repository- **home.html** - API documentation page

- 🍴 Fork for your use

- 📢 Share with others- **dashboard.html** - Interactive scraping interface```http```

- 💬 Provide feedback

- 🐛 Report bugs- **video-detail.html** - Video player with full details



---GET /api/scrape/multiple?startPage=1&endPage=3&tag=myanmar&details=true



<div align="center">#### 🎮 Controller Layer



**Made with ❤️ and Node.js**- **VideoController.js** - Orchestrates models, processes requests```**Example:**



⭐ **[Star this repo](https://github.com/Thawtarlamin/BUU-MAL)** if helpful!



*Last updated: November 5, 2025*#### 🛣️ Routes Layer```http



</div>- **api.js** - Maps URLs to controller methods


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
