import React from 'react';
import NavbarContainer from '../navbar/navbar_container';


const Splash = () => (
    <>
    <NavbarContainer/>
    <div className="splash-content">
        <div className="splash-img">
            <img src={window.splashURL}/>
            <div id="splash-text">
                <h1 className="splash-img-header">We &#60;3 people who code</h1>
                <p className="splash-img-text"> 
                We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.
                </p>
            </div>

            <br/>
            <div>
                <h1>For coders, by coders</h1>
                <p>Welcome to Stack Overload, an open community where any code-related questions can be asked. Search through a plethora of questions or ask your own!</p>
            </div>
        </div>
    </div>
    </>
);
        
  
export default Splash;
  