import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
    if (currentUser) {
        return (
            <div>
            <button onClick={logout}>Log Out</button>
            </div>
        )
    } else {
        return (
            <>
            <div>
            <Link to="login">Log in</Link>
            </div>
            <div>
            <Link to="signup">Sign Up</Link>
            </div>
            </>
        )
    }
}

export default Navbar;