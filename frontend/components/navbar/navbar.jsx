import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
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
        this.props.history.push(`/search/q=${this.state.searchQuery}`);
        this.setState({ searchQuery: '' });
    }

    logout() {
        this.props.logout();
        this.props.history.push(``);
    }

    login() {
        this.props.history.push(`/login`);
    }

    signup() {
        this.props.history.push(`/signup`);
    }
 
    render() {
        let navleft;
        if (this.props.session.id === null) {
            navleft = <div className="nav__left">
            <Link to="/" className="nav__left__icon">
                <img src={window.iconURL} />
            </Link>
            <div id="dropdown-button" className="dropdown" onClick={this.dropDown}>
                <div className="dropdown__button">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div id="dropdown-menu" className="dropdown__menu">
                    <div className="dropdown__menu__home">
                        <Link to="/">Home</Link>
                    </div>
                    <p className="dropdown__menu__public">PUBLIC</p>
                    <div className="dropdown__menu__globe">
                        <FontAwesomeIcon icon={faGlobeAmericas} />
                        <Link to="/questions">Stack Overload</Link>
                    </div>
                </div>
            </div>
            <Link to="/">
                <span className="nav__left__logo" href="#">
                    <img src={window.logoURL} />
                </span>
            </Link>
        </div>
        } else {
            navleft = <div className="nav__left">
            <Link to="/" className="nav__left__icon">
                <img src={window.iconURL} />
            </Link>
            <Link to="/">
                <span className="nav__left__logo" href="#">
                    <img src={window.logoURL} />
                </span>
            </Link>
        </div>
        }
        let navright;
        if (this.props.session.id === null) {
            navright = <div className="nav__right">
            <div className="nav__right__loginbtn">
                <div onClick={this.login}>Log In</div> 
            </div>
            <div className="nav__right__signupbtn">
                <div onClick={this.signup}>Sign Up</div>
            </div>   
        </div>
            
        } else {
            navright = <div className="nav__right">
            <div className="alt-nav__logout">
                <button onClick={this.logout}>Log Out</button>    
            </div>
        </div>
        }


        return (
            <header className="nav-container">
                <div className="nav">
                    
                    {navleft}
                    <div className="nav__middle">
                        <div className="nav__searchbar__container">
                            <form className="nav__searchbar__container__form" onSubmit={this.handleSubmit}>
                                <input className="nav__searchbar__container__form__input" 
                                type="text" 
                                placeholder="Search..."
                                value={this.state.search} 
                                onChange={this.updateSearch}>
                                </input>
                            </form>
                            <div className="nav__searchbar__container__icon">
                                <FontAwesomeIcon icon={faSearch} />
                            </div> 
                        </div>
                    </div>

                    {navright}
                </div>
            </header>
        )
        
    }
        
}

export default withRouter(Navbar); 


