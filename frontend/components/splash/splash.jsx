import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../main/footer';

const Splash = () => (
    <>
    <NavbarContainer/>
    <div className="splash">
        <div className="splash-img">
            <img src={window.splashURL}/>
            <div className="splash-img__text">
                <h1 className="splash-img__text__header">We &#60;3 people who code</h1>
                <p className="splash-img__text__sentence">We build products that empower developers</p>
                <p className="splash-img__text__sentence">and connect them to solutions that enable</p>
                <p className="splash-img__text__sentence">productivity, growth, and discovery.</p>
            </div>
        </div>
        <div className="splash-message">
            <h1 className="splash-message__header">For developers, by developers</h1>
            <div className="splash-message__bar"></div>
            <div className="splash-message__text">
                <p>Welcome to Stack Overload, an open community for all coders.</p> 
                <p>coders. Get answers immediately from a community of</p>
                <p>knowledgeable programmers. Search through a collection of</p>
                <p>questions or create an account to ask your own!</p>
            </div>    
        </div>
    </div>
    <div className="splash-footer"><Footer/></div>

    </>
);
        
  
export default Splash;
  