import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.dropDown = this.dropDown.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchQuery: ''
        }
    }

    dropDown(e) {
        e.preventDefault();
        document.getElementById("dropdown-button").classList.toggle("change");
        document.getElementById("dropdown-menu").classList.toggle("change");
    }

    updateSearch(e) {
        this.setState({ searchQuery: e.target.value.substr(0, 100) });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search/q=${this.state.searchQuery}`)
        this.setState({ searchQuery: '' });
    }
    
    render() {
        return (
            <header className="main-nav-container">
                <div className="main-nav">
                    <div className="main-nav__left">
                        <div id="dropdown-button" className="dropdown" onClick={this.dropDown}>
                            <div className="dropdown__button">
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                            <div id="dropdown-menu" className="dropdown-menu">
                                <div className="dropdown-menu__home">
                                    <Link to="/">Home</Link>
                                </div>
                                <p className="dropdown-menu__public">PUBLIC</p>
                                <div className="dropdown-menu__globe">
                                    <FontAwesomeIcon icon={faGlobeAmericas} />
                                    <Link to="/questions">Stack Overload</Link>
                                </div>
                            </div>
                        </div>
                        <Link to="/">
                            <span className="logo" href="#">
                                <img src={window.logoURL} />
                            </span>
                        </Link>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    <div className="searchbar-container">
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div> 
                        <input className="searchbar" 
                        type="text" 
                        placeholder="Search..."
                        value={this.state.search} 
                        onChange={this.updateSearch}>
                        </input>
                    </div>
                    </form>
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

export default withRouter(Navbar);