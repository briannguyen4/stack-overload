import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.dropDown = this.dropDown.bind(this);
    }

    dropDown(e) {
        e.preventDefault();
        document.getElementById("dropdown").classList.toggle("change");
    }
    
    render() {
        return (
            <header className="main-nav">
                <div className="nav-container">
                    <div className="nav-container__left">
                        <span className="dropdown" onClick={this.dropDown}>
                            <div id="dropdown" className="dropdown__button">
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                            <div id="my-drop" className="drop-down">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </span>
                        <Link to="/">
                            <span className="logo" href="#">
                                <img src={window.logoURL} />
                            </span>
                        </Link>
                    </div>
                    <div className="searchbar-container">
                        <div className="search-icon">
                                {/* <FontAwesomeIcon icon={faSearch} /> */}
                        </div>
                        <input className="searchbar" type="text" placeholder="Search..."></input>
                    </div>
                    <div className="nav-right">
                        <div className="nav-right__loginbtn">
                            <Link to="login" >Log in</Link>
                        </div>
                        <div className="nav-right__signupbtn">
                            <Link to="signup" >Sign up</Link>
                        </div>   
                        </div>
                </div>
            </header>
        )
        
    }
}

export default Navbar;
