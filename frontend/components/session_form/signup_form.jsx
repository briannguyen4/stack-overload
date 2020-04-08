import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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
            <div>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
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
        );
    }

}

export default SignupForm;
