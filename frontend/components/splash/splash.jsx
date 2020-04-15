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
                <div className="splash-img-sentence">
                    <p className="splash-img-text">We build products that empower developers</p>
                    <p className="splash-img-text">and connect them to solutions that enable</p>
                    <p className="splash-img-text">productivity, growth, and discovery.</p>
                </div>
            </div>

            <br/>
            <div className="splash-bottom">
                <h1 className="splash-head">For developers, by developers</h1>
                <div className="orange-bar"></div>
                <div className="splash-text">
                    <p>Welcome to Stack Overload, an open community for all coders.</p> 
                    <p>coders. Get answers immediately from a community of</p>
                    <p>knowledgeable programmers. Search through a collection of</p>
                    <p>questions or create an account to ask your own!</p>
                </div>    
            </div>
        </div>
    </div>
    </>
);
        
  
export default Splash;
  