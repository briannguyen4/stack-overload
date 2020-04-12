import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Navbar = ({ currentUser, logout }) => {
    if (currentUser) {
        return (
            <div>
            <button onClick={logout}>Log Out</button>
            </div>
        )
    } else {
        return (
            <div className="navbar">
                <div className="leftbutton">
                    <div className="sidebar">
                        <div className="dropdown-img">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        
                    </div>

                    <div className="logo">
                        <img className="logo-image" src={window.logoURL} />
                    </div>
                </div>
                
                <div className="searchbar-container">
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input className="searchbar" type="text" placeholder="Search..."></input>
                </div>
            
                <div className="rightbutton">
                    <div className="login">
                        <Link to="login" >Log in</Link>
                    </div>
                    <div className="signup">
                        <Link to="signup" >Sign up</Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Navbar;