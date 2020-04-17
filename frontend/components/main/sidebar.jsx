import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <>
  <div className="sidebar">
    <div className="sidebar-container">
      <div className="home">
        <Link to="/questions">
          <li>Home</li>
        </Link>
      </div>
      <p>PUBLIC</p>
      <div className="public">
        <FontAwesomeIcon icon={faGlobeAmericas} />
        <Link to="/questions">
          <li>Stack Overload</li>
        </Link>
    </div>
  </div>
    </div>
  </>
);

export default Sidebar;