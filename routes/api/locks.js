const router = require("express").Router();
import { lockHouse, unlockHouse } from '../../controllers/locksController';
// lock the house
router
    .route("/lock")
    .put(lockHouse)

router
    .route('/unlock')
    .put(unlockHouse)
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

// LOCK AND UNLOCK ARE IN THE locksController.js

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

