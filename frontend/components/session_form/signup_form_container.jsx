import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
        link: <Link to='/login'>Sign up</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);