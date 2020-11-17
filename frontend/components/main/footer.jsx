import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
  <>
  <footer>
      <div className="footer">
        <Link to="/">
            <img src={window.iconURL}/>
        </Link>
        <Link to="/">
            <p className="footer-title">STACK OVERLOAD</p>
        </Link>
        <div className="disclaimer">
            <a href="https://github.com/briannguyen4/stack-overload/">
                <p id="github">Github</p>
                
            </a>
            <a href="https://www.linkedin.com/in/brian-nguyen-1293bb148/">
                <p id="linkedin">LinkedIn</p>
            </a>
            <p>site design / logo © 2020 Stack Overload</p>
        </div>
      </div>
  </footer>
  </>
);

export default Footer;