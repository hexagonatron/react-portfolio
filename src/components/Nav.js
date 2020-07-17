import React from 'react';

import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-dark fixed-top navbar-expand-sm">
            <Link to="/" className="navbar-brand">
                Ben Fawcett
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" 
                    exact activeClassName="active" to="/">
                        About Me
                    </NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/portfolio">
                        Portfolio
                    </NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Nav;