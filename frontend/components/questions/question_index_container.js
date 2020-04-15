import { connect } from 'react-redux';
import React from 'react';
import QuestionIndex from './question_index';

import {} from '../../actions/session_actions';



const mapStateToProps = (state) => {
    return {
        questions: Object.values(state.entities.questions)
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);