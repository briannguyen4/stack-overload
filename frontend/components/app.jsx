import React from 'react';
import Splash from './splash/splash';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import QuestionIndexContainer from './questions/question_index_container';
import QuestionFormContainer from './questions/question_form_container';
import QuestionShowContainer from './questions/question_show_container';
import Sidebar from './navbar/sidebar';
import AnswerFormContainer from './answers/answer_form_container';


const App = () => (
    <div> 
        <AuthRoute exact path='/' component={Splash} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <Switch>
            <ProtectedRoute exact path='/questions/new' component={QuestionFormContainer} />
            <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
            <Route exact path='/questions' component={QuestionIndexContainer} />
            <ProtectedRoute exact path='/' component={QuestionIndexContainer}/>
        </Switch>
        <Route exact path="/sidebar" component={Sidebar} />
        <Route exact path="/answer" component={AnswerFormContainer} />

        

            
    </div>
);

export default App;