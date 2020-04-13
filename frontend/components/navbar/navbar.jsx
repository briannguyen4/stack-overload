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
        document.getElementById("my-x").classList.toggle("change");
    }
    
    render() {
        if (this.props.currentUser) {
            return (
                <div>
                <button onClick={this.props.logout}>Log Out</button>    
                </div>
            )
        } else {
            return (
                <header className="top-bar">
			        <div className="header-wrapper">
				        <div className="main-nav">
					        <span className="side-bar" onClick={this.dropDown}>
						        <div id="my-x" className="burger">
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
                            <span className="logo" href="#">
						        <img src={window.logoURL} />
					        </span>
				        </div>
                        <div className="searchbar-container">
                            <div className="search-icon">
                                    {/* <FontAwesomeIcon icon={faSearch} /> */}
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
		        </header>
            )
        }
    }
}

export default Navbar;
