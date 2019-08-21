import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
// import Servives from '../components/Services'
// import FeaturedRooms from '../components/FeaturedRooms'
import { useAuth0 } from "../react-auth0-wrapper";



function Home(){
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <>
        <Hero>
          <Banner title="luxurious homes" subtitle="Find your dream home today">
              {/* <Link to='/rooms' > */}
              {!isAuthenticated && (
        <button className="btn-primary"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in to view listings
        </button>
      )}

      {isAuthenticated && <button className="btn-primary" onClick={() => logout()}>Log out</button>}
              {/* </Link> */}
              </Banner>  
        </Hero>
        {/* <Servives /> */}
        {/* <FeaturedRooms rooms="rooms"/> */}
        
        </>
    );
}

export default Home
