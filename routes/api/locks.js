const axios = require('axios');

// Dev access_token that we'll use if getting individual authorization doesn't work
backupAccessToken = '2bb0bfc90e2423181aeaf2200a06b2c7d4b8cc1ef2b10b94fdb4166fe7c160a6';

// Global AXIOS defaults
axios.defaults.baseURL = 'https://api.lockitron.com';
axios.defaults.params = {};
axios.defaults.params['access_token'] = backupAccessToken;


// GET authentication code
// axios.get('/oauth/authorize')
//     .then(function (res) {
//         console.log(res.status);
//         // need to get auth code from here and then 
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
//     .finally(function() {
//         console.log(`Get authentication code complete`);
//     });

// GET all locks
axios.get('/v2/locks', {
    params: {
        'access_token': backupAccessToken
    }
})
    .then(function(res) {
        console.log(res);
    })
    .catch(function(err) {
        console.log(err);
    })
    .finally(function() {
        console.log(`get all locks complete`);
    });