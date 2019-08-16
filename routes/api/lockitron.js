const express = require('express');
const app = express();
const router = app.Router();

// API AUTHORIZATION
    // GET route to take user to OAuth authorization page to get auth code
    router.route('/authorize')
        .get(`https://api.lockitron.com/oauth/authorize`)
        // POST route to take user's auth code and get an access_token
        .post(`https://api.lockitron.com/oauth/token`)

// test test test
