import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer';

const Room = () => {
    return( 
        <>
    <Hero hero="roomsHero">
         <Banner title="Near By Listings">
              <Link to='/' className="btn-primary">
                  return home
              </Link>
              </Banner>
    </Hero>
    <RoomsContainer />
    </>
    );
};

export default Room
