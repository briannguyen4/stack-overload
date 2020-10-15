import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class AltNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this);
    }

    updateSearch(e) {
        this.setState({ searchQuery: e.target.value.substr(0, 100) });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search/q=${this.state.searchQuery}`);
        this.setState({ searchQuery: '' });
    }

    logout() {
        this.props.logout();
        this.props.history.push(``);
    }
 
    render() {
        if (this.props.currentUser) {
            return (
                <header className="alt-nav-container">
                    <div className="alt-nav">
                        <div className="alt-nav-container__left">
                            <Link to="/">
                                <span className="logo altlogo" href="#">
                                    <img src={window.logoURL} />
                                </span>
                            </Link>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="searchbar-container">
                                <div className="search-icon">
                                    <FontAwesomeIcon icon={faSearch} />
                                </div> 
                                <input 
                                    className="searchbar" 
                                    type="text" 
                                    placeholder="Search..."
                                    value={this.state.searchQuery} 
                                    onChange={this.updateSearch}
                                    >
                                </input>
                            </div>
                        </form>
                        <div className="alt-nav-logout">
                            <button onClick={this.logout}>Log Out</button>    
                        </div>
                    </div>
                </header>
                )
        } else {
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
                        <form onSubmit={this.handleSubmit}>
                            <div className="searchbar-container">
                                <div className="search-icon">
                                    <FontAwesomeIcon icon={faSearch} />
                                </div> 
                                <input 
                                    className="searchbar" 
                                    type="text" 
                                    placeholder="Search..."
                                    value={this.state.searchQuery} 
                                    onChange={this.updateSearch}
                                    >
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
}

export default withRouter(AltNavbar); 
