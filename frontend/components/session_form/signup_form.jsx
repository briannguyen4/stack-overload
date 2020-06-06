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
            <div className="signup">
                <div className="signup-left">
                    <h1 className="signup-left__header">Join the Stack Overload community</h1>
                    <div className="signup-left__snippet">
                        <div className="signup-left__icon"><FontAwesomeIcon icon={faQuestionCircle} /></div>
                        <p className="signup-left__text">Ask a question</p>
                    </div>
                    <div className="signup-left__snippet">
                        <div className="signup-left__icon"><FontAwesomeIcon icon={faCommentDots} /></div>
                        <p className="signup-left__text">Gain access to commenting and voting</p>
                    </div>
                    <div className="signup-left__snippet">
                        <div className="signup-left__icon"><FontAwesomeIcon icon={faLaptopCode} /></div>
                        <p className="signup-left__text">Home to a large community of programmers</p>
                    </div>
                    <div className="signup-left__snippet">
                        <div className="signup-left__icon"><FontAwesomeIcon icon={faSearchPlus} /></div>
                        <p className="signup-left__text">Search through an extensive collection of questions</p>
                    </div>
                </div>
                <div className="signup-right">
                    <button className="signup-right__demo" onClick={this.demoLogin}>Log in with Demo User</button>
                    <a href="https://github.com/briannguyen4/stack-overload/">
                        <button className="signup-right__git">Visit the Github Page</button>
                    </a>
                    <div className="signup-right__form">
                        {this.renderErrors()}
                        <form onSubmit={this.handleSubmit}>
                            <label>Display name
                                <br/>
                                <input type="text"
                                value={this.state.display_name}
                                onChange={this.handleInput('display_name')}
                                />
                            </label>
                            <br/>
                            <label>Email
                                <br/>
                                <input type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                />
                            </label>
                            <br/>
                            <label>Password
                                <br/>
                                <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                />
                            </label>
                            <br/>
                            <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                            <button className="form-button sb">{this.props.formType}</button>
                        </form>
                            <p>By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</p>
                    </div>
                    <div className="signup-right__login">
                        <p>Already have an account? {this.props.link}</p>
                    </div>
                </div>
            </div>
            </>
        );
    }

}

export default SignupForm;
