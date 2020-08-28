import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        // .then(this.props.clearErrors)
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.processForm({email: "demouser@email.com", password: "password"});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="error" key={`error-${i}`}>{error}</li>
                ))}
            </ul> 
        )
    }
    
    render() {
        return (
            <>
            <NavbarContainer />
            <div className="login">
                <div>
                    <img className="login-icon" src={window.iconURL}/>
                </div>
                
                <div className="login__buttons">
                    <button className="login__buttons__demo" onClick={this.demoLogin}>Log in with Demo User</button>
                    <a href="https://github.com/briannguyen4/stack-overload/">
                        <button className="login__buttons__git">Visit the Github Page</button>
                    </a>

                </div>
                <div className="login__form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Email 
                            <br/>
                            <input type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                        </label>
                        <div></div>
                        {this.renderErrors()}
                        <label>Password
                            <br/>
                            <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                        </label>
                        <input className="login__form__btn" type="submit" value={this.props.formType}/>
                    </form>
                </div>
                <div className="login__signup-link">
                    <p>Don't have an account? {this.props.link}</p>
                </div>
            </div>
            </>
        );
    }

}

export default LoginForm;
