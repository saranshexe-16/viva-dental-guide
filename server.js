// Load environment variables from .env file
require('dotenv').config(); // This loads variables into process.env

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Access the API key from environment variables (loaded from .env)
const API_KEY = process.env.API_KEY;  // Fetch API key securely from the .env file

// API URL for your external service (replace with the actual API URL)
const API_URL = 'https://api.example.com/data';

const fetchApiData = async () => {
    try {
        // Add the API key to the request headers (or query params)
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`, // Example using Bearer token
                // OR
                // 'x-api-key': API_KEY  // Example if the API expects the key in a custom header
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching API data:', error);
        return {}; // Return empty object in case of an error
    }
};

// Example API endpoint to fetch data
app.get('/fetch-data', async (req, res) => {
    const apiData = await fetchApiData();
    const result = { apiData };
    res.json(result);  // Send the API data to the frontend
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
