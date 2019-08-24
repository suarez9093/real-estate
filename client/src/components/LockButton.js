import React from 'react';
import { Button } from 'react-bootstrap';
// import lockHouse from '../../routes/api/index';
function lockHouse() { console.log (`locked`) };

// const toggle = [lockHouse, unlockHouse];

function LockButton() {
    return(
        <Button onClick={lockHouse}>
            I'm done viewing
        </Button>
    )
};
// function LockButton() {
    
//     return(
//         function() {for(i=0; i<toggle.length; i++){
//         <Button onClick={toggle[i]}>
//             {function() {
//                 if(toggle[i] === lockHouse) {
//                     return (
//                         `I'm done! Lock the house`
//                     ) 
//             } else if (toggle[i] === unlockHouse) {
//                 return (
//                     `I'm here, let's see the house`
//                 )
//             }
//             }}
//         </Button>
//     }});
// }

export default LockButton;