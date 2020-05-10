import React from "react";
import { Link } from "react-router-dom";
import "./style.css";




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
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="./contact">Contact</Link>
                    </li>
                    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
          My pages
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
          <a class="dropdown-item text-white" href="https://github.com/icek567">Github</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-white" href="https://www.linkedin.com/in/sergio-perez-a67305194/">LinkedIn</a>
        </div>
      </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Header;