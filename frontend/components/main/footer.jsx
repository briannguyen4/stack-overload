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
                <p>STACK OVERLOAD</p>
            </Link>
        <div className="disclaimer">
            <a href="https://github.com/briannguyen4/stack-overload/">
                <p id="github">Github</p>
            </a>
            <p>site design / logo © 2020 Stack Overload</p>
        </div>
      </div>
  </footer>
  </>
);

export default Footer;