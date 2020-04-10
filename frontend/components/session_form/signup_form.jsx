import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';


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

    demoLogin(e) {
        debugger
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
            <div className="signup-body">
                <div className="signup-left">
                    <h1 className="signup-left-header">Join the Stack Overload community</h1>
                    <div className="signup-left-snippets">
                        <FontAwesomeIcon classname="icon" icon={faQuestionCircle} />
                        <p>Stuck on a coding problem? Ask a question!</p>
                    </div>
                    <div className="signup-left-snippets">
                        <FontAwesomeIcon classname="icon" icon={faCommentDots} />
                        <p>Gain access to commenting and voting</p>
                    </div>
                    <div className="signup-left-snippets">
                        <FontAwesomeIcon classname="icon" icon={faLaptopCode} />
                        <p>Home to a large community of programmers</p>
                    </div>
                    <div className="signup-left-snippets">
                        <FontAwesomeIcon classname="icon" icon={faSearchPlus} />
                        <p>Search through a wide collection of questions</p>
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
                            <button>{this.props.formType}</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignupForm;
