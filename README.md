# Aconews

Aconews is a news website that fetches the latest news articles using the [GNews API](https://gnews.io/). It displays these articles on a responsive frontend, providing users with a clean and modern interface to browse news from around the world. The project utilizes a React and TailwindCSS-based frontend, along with an Express.js and MongoDB backend.

## Features

- **Latest News**: Fetches real-time news articles from the GNews API.
- **Responsive Design**: Built with TailwindCSS to ensure a great user experience across devices.
- **Full-Stack Application**: Combines a React frontend with an Express and MongoDB backend.
- **RESTful API**: Follows best practices for building scalable and maintainable backend services.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Express.js, MongoDB, REST API
- **API**: GNews API for fetching news articles

## Installation & Running the Project

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)
- [Nodemon](https://nodemon.io/) (optional for easier backend development)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/aconnews.git
   cd aconews
2. ## Run the Frontend:

Navigate to the `client` folder and run the frontend:

```bash
cd client
npm install
npm run dev
```

3. ## Run the Backend:

Navigate to the `server` folder and run the backend:

```bash
cd server
npm install
nodemon app.js
```
# ACONEWS

ACONEWS is a web application that provides the latest news articles using the GNews API.

## Access the Application

* Frontend: http://localhost:3000
* Backend: http://localhost:5000

## API Endpoints

* `GET /api/news`: Fetches the latest news articles.
* `POST /api/search`: Allows searching for news articles by keyword.

## Environment Variables

Make sure to set up the following environment variables:

* **GNEWS_API_KEY**: Your GNews API key.
* **MONGO_URI**: MongoDB connection string.

You can create a `.env` file in the root of the `server` folder and add these variables:

## Installation

To install all necessary dependencies, run the following command in both the `server` and `client` directories:

```bash
npm install express cors axios mongoose dotenv tailwindcss@latest postcss@latest autoprefixer@latest react react-dom react-scripts
```
Setup Tailwind using
```bash
npx tailwindcss init -p
```
