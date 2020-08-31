import React from 'react';
import { Link } from 'react-router-dom';

class AltNavbar extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        if (this.props.currentUser) {
            return (
                <header className="alt-nav-container">
                    <div className="alt-nav">
                        <div className="alt-nav-container__left">
                            <Link to="/signup">
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
                        <div className="rightbutton">
                            <button className="alt_login">
                                Profile
                            </button>
                            <div>
                                <button className="logout" onClick={this.props.logout}>Log Out</button>    
                            </div>
                        </div>
                    </div>
                </header>
                )
        } else {
            return (
                <header className="top-bar altbar">
                    <div className="header-wrapper">
                        <div className="main-nav">
                            <span className="logo" href="#">
                                <img src={window.logoURL} />
                            </span>
                        </div>
                        <div className="searchbar-container">
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

export default AltNavbar;
