import React, { Component } from 'react'
import Logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from "react-router-dom";
import '../App.css';

export default class NavBar extends Component {
    state = {
        isOpen: false
    }

    handletoggle = () => {
        this.setState((prevState) => {
            return {isOpen: !prevState.isOpen}
        })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={Logo} alt="Beach Resort" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handletoggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
