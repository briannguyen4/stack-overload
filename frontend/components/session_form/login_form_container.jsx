import { connect } from 'react-redux';
import React from 'react';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log in',
        link: <Link to='/signup'>Sign up</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);