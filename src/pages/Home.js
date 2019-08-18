import React, {Component} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
// import Servives from '../components/Services'
// import FeaturedRooms from '../components/FeaturedRooms'


class Home extends Component {
    render(){
        return (
            <div>
    
                <Hero>
    
                    <Banner title="luxurious homes" subtitle="">
    
                        {this.props.authenticated ?
                            <Link to='/rooms' className="btn-primary">
                                Listings
                            </Link>
    
                            : <Link to="/login" className="btn-primary">
                                Log in to view listings
                            </Link>}
                    </Banner>
    
                </Hero>
    
              
            </div>
        );
    }
    
}

export default Home
