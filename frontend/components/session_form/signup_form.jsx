import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import NavbarContainer from '../navbar/navbar_container';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display_name: "",
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
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.login({email: "demouser", password: "password"});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul> 
        )
    }
    
    render() {
        return (
            <>
            <NavbarContainer />
            <div className="signup-body">
                <div className="signup-left">
                    <h1 className="signup-left-header">Join the Stack Overload community</h1>
                    <div className="signup-left-snippets">
                        <div className="icon"><FontAwesomeIcon icon={faQuestionCircle} /></div>
                        <p className="icon-snippet">Ask a question</p>
                    </div>
                    <div className="signup-left-snippets">
                        <div className="icon"><FontAwesomeIcon icon={faCommentDots} /></div>
                        <p className="icon-snippet">Gain access to commenting and voting</p>
                    </div>
                    <div className="signup-left-snippets">
                        <div className="icon"><FontAwesomeIcon icon={faLaptopCode} /></div>
                        <p className="icon-snippet">Home to a large community of programmers</p>
                    </div>
                    <div className="signup-left-snippets">
                        <div className="icon"><FontAwesomeIcon icon={faSearchPlus} /></div>
                        <p className="icon-snippet">Search through an extensive collection of questions</p>
                    </div>
                </div>
                <div className="signup-right">
                    <button className="demo-button" onClick={this.demoLogin}>Log in with Demo User</button>
                    <a href="https://github.com/briannguyen4/stack-overload/">
                        <button className="github-button">Visit the Github Page</button>
                    </a>
                    <div className="signup-form-container">
                        {this.renderErrors()}
                        <form className="signup-form" onSubmit={this.handleSubmit}>
                            <label>Display name
                                <br/>
                                <input className="login-input" type="text"
                                value={this.state.display_name}
                                onChange={this.handleInput('display_name')}
                                />
                            </label>
                            <br/>
                            <label>Email
                                <br/>
                                <input className="login-input" type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                />
                            </label>
                            <br/>
                            <label>Password
                                <br/>
                                <input className="login-input" type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                />
                            </label>
                            <br/>
                            <p className="signup-text">Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                            <button className="form-button sb">{this.props.formType}</button>
                        </form>
                            <p className="signup-text">By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</p>
                    </div>
                </div>
            </div>
            </>
        );
    }

}

export default SignupForm;
