import React from 'react';
import Splash from './splash/splash';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import QuestionIndexContainer from './questions/question_index_container';
import PostQuestion from './questions/post_question_form';
import UpdateQuestion from './questions/update_question_form';
import QuestionShowContainer from './questions/question_show_container';

const App = () => (
    <>
        <AuthRoute exact path='/' component={Splash} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
              
    </>
);

export default App;