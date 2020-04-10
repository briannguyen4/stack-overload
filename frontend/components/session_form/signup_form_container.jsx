import React from 'react';
import SignupForm from './signup_form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
        link: <Link to='/login'>Log in</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        login: user => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);