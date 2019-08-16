import React, { Component } from 'react'
// import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'



export default class Navbar extends Component {
    state = {
        isOPEN: false
    }
    handleToggle = () => {
        this.setState({ isOPEN: !this.state.isOPEN })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img  alt="My Realitor.com" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOPEN?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Listings</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
