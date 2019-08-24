import React from 'react';
import { Button } from 'react-bootstrap';
// import unlockHouse from '../../routes/api/index';

function unlockHouse() { console.log (`unlocked`) };

function UnlockButton() {
    return(
        <Button onClick={unlockHouse}>
            I'm ready to view!
        </Button>
    )
};


export default UnlockButton;