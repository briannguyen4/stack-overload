import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        <header>
            <h1>Stack Overload</h1>
            <GreetingContainer/>
        </header>
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
    </div>
);

export default App;