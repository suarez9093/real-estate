const router = require("express").Router();

// lock the house
router
  .route("/:id")
  .put(lockHouse)

module.exports = router;
// **DON'T TRUST THIS ONE YET**
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

// GET ALL LOCKS
// GET: all locks
// axios.get('/v2/locks')
//     .then(function(res) {
//         for(i=0; i<res.data.length; i++) {

//             console.log({ // need to actually do something with this information
//                 id: res.data[i].id,
//                 name: res.data[i].name,
//                 lockState: res.data[i].state
//             });
//         }
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
//     .finally(function() {
//         console.log(`****\nGET all locks ✅`);
//     });

// UNLOCK
// PUT: this will unlock Locks
// const lockId = `3d5f236f-fee0-4e91-8e43-71f6eb7503a0`;       // 'Project 3 Lockitron' on Lockitron's dashboard
// axios.put(`/v2/locks/${lockId}`, {
//     state: 'unlock'
// })
//     .then(function(res) {
//         console.log(`CONFIG SENT:\n**`);
//         console.log(res.config)
//         console.log(`DATA RECEIVED:\n**`);
//         console.log(res.data);

//         // pertinent information:
//         let currentLock = {
//             name: res.data.name,
//             lockState: res.data.state,
//         };

//         // human
//         console.log(`${currentLock.name} has been ${currentLock.lockState}ed!`);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
//     .finally(function(){
//         console.log(`***\nUNLOCK THE HOUSE ✅`);
//     });


// LOCK
// PUT: this will lock Locks
function lockHouse() {
        const lockId = `3d5f236f-fee0-4e91-8e43-71f6eb7503a0`;      // 'Project 3 Lockitron' on Lockitron's dashboard
    axios.put(`/v2/locks/${lockId}`, {
        state: 'lock'
    })
        .then(function(res) {
            console.log(`CONFIG SENT:\n**`);
            console.log(res.config)
            console.log(`DATA RECEIVED:\n**`);
            console.log(res.data);

            // pertinent information:
            let currentLock = {
                name: res.data.name,
                lockState: res.data.state,
            };

            // human
            alert(`${currentLock.name} has been ${currentLock.lockState}ed!`);
        })
        .catch(function(err) {
            console.log(err);
        })
        .finally(function(){
            console.log(`***\nLOCK THE HOUSE ✅`);
        });
}


// GET CURRENT USER
// GET: current user
// axios.get('/v2/users/me')
//     .then(function(res){
//         console.log(res.config);
//         console.log(res.data);

//         // pertinent information:
//         let currentUser = {
//             firstName: res.data.first_name,
//             email: res.data.email,
//             phone: res.data.phone
//         }
//         console.log(currentUser);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
//     .finally(function(){
//         console.log(`***\nGET CURRENT USER ✅`);
//     });

//

