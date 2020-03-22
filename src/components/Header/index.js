import React from "react";
import { Link } from "react-router-dom";


function Header () {
    return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg bg-dark">
        <a className="navbar-brand" ><h1>Sergio Perez</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">About me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="./contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Header;