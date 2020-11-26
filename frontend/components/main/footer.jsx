import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
  <>
  <footer>
      <div className="footer">
          <div className="footer-images">
            <Link to="/">
                <img src={window.iconURL}/>
            </Link>
            <Link to="/" className="footer-title">
                <p>STACK OVERLOAD</p>
            </Link>
          </div>
        <div className="disclaimer">
            <a href="https://briannguyen4.github.io/" target="_blank">
                <p className="link">Portfolio</p>
            </a>
            <a href="https://github.com/briannguyen4/stack-overload/" target="_blank">
                <p className="link">Github</p>
            </a>
            <a href="https://www.linkedin.com/in/brian-nguyen-1293bb148/" target="_blank">
                <p className="link">LinkedIn</p>
            </a>
            <p className="link">site design / logo © 2020 Stack Overload</p>
        </div>
      </div>
  </footer>
  </>
);

export default Footer;

