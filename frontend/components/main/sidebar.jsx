import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <>
  <div className="sidebar">
    <div className="sidebar__content">
      <div className="sidebar__content__home">
        <Link to="/questions">
          <li>Home</li>
        </Link>
      </div>
      <div className="sidebar__content__public">
        <p className="sidebar__content__public__text">PUBLIC</p>
        <div className="sidebar__content__public__container">
          <FontAwesomeIcon icon={faGlobeAmericas} />
          <Link to="/questions">
            <li>Stack Overload</li>
          </Link>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default Sidebar;