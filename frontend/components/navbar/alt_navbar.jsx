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
        return (
            <header className="nav-container">
            <div className="nav">
                <div className="nav__left">
                    <Link to="/" className="nav__left__icon">
                        <img src={window.iconURL} />
                    </Link>
                    <Link to="/">
                        <span className="nav__left__logo" href="#">
                            <img src={window.logoURL} />
                        </span>
                    </Link>
                </div>

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

                <div className="nav__right">
                    <div className="alt-nav__logout">
                        <button onClick={this.logout}>Log Out</button>    
                    </div>
                </div>
            </div>
        </header>
        )
    }
        
}

export default withRouter(AltNavbar); 

