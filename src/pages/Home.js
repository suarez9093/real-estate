import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
// import Servives from '../components/Services'
// import FeaturedRooms from '../components/FeaturedRooms'


const Home = () => {
    return (
        <>
       
        <Hero>
        
          <Banner title="luxurious homes" subtitle="Log in to view our homes">
           
              {/* <Link to='/rooms' className="btn-primary">
                  Listings
              </Link> */}
            
              </Banner>  
              
        </Hero>
      
        {/* <Servives /> */}
        {/* <FeaturedRooms rooms="rooms"/> */}
        
        </>
    );
}

export default Home
