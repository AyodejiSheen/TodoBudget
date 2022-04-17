import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-dark navbar-expand bg-dark  text-white">
                <span className="navrbar-brand">MARKET APP</span>
                <ul className="navbar-nav ml-auto text-white">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>


                    <li className="nav-item">
                        <Link to="/create" className="nav-link"> Add Items </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/create" className="nav-link"> Items List </Link>
                    </li>

                </ul>
            </nav>
        </>
    );
}