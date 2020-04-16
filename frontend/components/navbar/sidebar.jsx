import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <>
  <div id='sidebar'>
    <Link to="/questions">
      <li>Home</li>
    </Link>
    <li>Public</li>
    <div id='public'>
      <Link to="/questions">
        <li>Stack Overload</li>
        </Link>
    </div>
  </div>
  </>
);

export default Sidebar;