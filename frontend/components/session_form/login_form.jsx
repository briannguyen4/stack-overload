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
        this.props.processForm({email: "demouser", password: "password"});
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
            <div className="login-body">
                <div>
                    <img className="icon" src={window.iconURL}/>
                </div>
                
                <div className="login-buttons">
                    <button className="demo-button" onClick={this.demoLogin}>Log in with Demo User</button>
                    <a href="https://github.com/briannguyen4/stack-overload/">
                        <button className="github-button">Visit the Github Page</button>
                    </a>

                </div>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <label>Email 
                            <br/>
                            <input className="login-input" type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                        </label>
                        <div></div>
                        {this.renderErrors()}
                        <label className="password-label">Password
                            <br/>
                            <input className="login-input" type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                        </label>
                        <input className="form-button" type="submit" value={this.props.formType}/>
                    </form>
                </div>
                    <div className="signup-link">
                        <p>Don't have an account? {this.props.link}</p>
                    </div>
            </div>
            </>
        );
    }

}

export default LoginForm;
