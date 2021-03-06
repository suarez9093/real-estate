
import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'
// import ModalComponent from "../components/ModalComponent/ModalComponent"
// import Form from "./FormButton";
import FormButton from '../components/FormButton';
// import React, { Component } from 'react';
// import defaultBcg from '../images/room-1.jpeg';

import LockButton from '../components/LockButton';



export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state ={
            slug:this.props.match.params.slug,
            defaultBcg
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        alert("Clicked")
    }
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room){
            return(
           <div className="error">
                <h3>no such search could be found...</h3>
                <Link to="/rooms" className="btn-primary"> back to listings</Link>
            </div>
            );
        }
        const {name,description,capacity,size,price,breakfast,pets,images} = room;
        const [mainImg,...defaultImg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} home`}>
                    <Link to="/rooms" className="btn-primary">
                        back to listings
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index)=>{
                     return <img key={index} src={item} alt={name} />;
                    })}

                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>
                            Garage Parking : {
                                capacity > 1 ?`${capacity} cars`: `${capacity}person`
                            }
                        </h6>
                        <h6>{pets? "open viewings today":"no viewings available today"}</h6>
                        <h6>{breakfast && "open viewing now"}</h6>

                        <Link to="/locks"className="btn-primary">get lock code</Link>
                        <br />
                        <br />
                        <FormButton />

                        {/* <Link to="/locks"className="btn-primary">get lock code</Link> */}
                        {/* <UnlockButton /> */}
                        {/* <LockButton /> */}

                    </article>
                </div>
            </section>
            {/* <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index) =>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section> */}
            </>
        );
    }
}
