import React from 'react';
import { Link } from 'react-router';

const NavigationBar = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Red Dice</Link>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/signup" className="nav navbar-nav navbar-right">Sign up</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavigationBar;