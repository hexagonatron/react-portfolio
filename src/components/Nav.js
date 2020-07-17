import React from 'react';

import {Link} from 'react-router-dom';

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
                        <Link className="nav-item nav-link active" to="/">About Me <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
                        <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
        </nav>
    );
};

export default Nav;