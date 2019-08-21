import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer';
import { useAuth0 } from "../react-auth0-wrapper";




function Room() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return( 
        <>
    <Hero hero="roomsHero">
         <Banner title="Near By Listings">
              {/* <Link to='/' className="btn-primary"> */}
              {isAuthenticated && <button className="btn-primary" onClick={() => logout()}>Log out</button>}
              {/* </Link> */}
              </Banner>
    </Hero>
    <RoomsContainer />
    </>
    );
};

export default Room
