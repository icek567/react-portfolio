import React from "react";
import { Link } from "react-router-dom";
import "./style.css";




function Header() {
  return (

    <div className="wrapper">
      <div id="sidebar">
        <div className="sidebar-header">
          <h3>Menu</h3>
        </div>

        <div className="content">

          <ul className="list-unstyled components">
            <li>
              <Link id="link"  className="nav-link" to="/"><i class="fas fa-user"></i>  About me</Link>
            </li>
            <li>
              <Link id="link"  className="nav-link" to="/portfolio"><i class="fas fa-briefcase"></i>  Portfolio</Link>
            </li>
            <li>
              <Link id="link"  className="nav-link" to="/contact"> <i class="fas fa-camera-retro"></i>  My Gallery</Link>
            </li>
            <li>
              <a id="link" href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                className="dropdown-toggle">Pages</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a id="link"  href="https://github.com/icek567"><i class="fab fa-github"></i>  GitHub</a>
                </li>
                <li>
                  <a id="link"  href="https://www.linkedin.com/in/sergio-perez-a67305194/"> <i class="fab fa-linkedin"></i>  LinkedIn</a>
                </li>
                <li>
                  <a id="link"  href="https://docs.google.com/document/d/1pRxAe_KU3PCrV6bcpq55rM-EHnEYn2RL5KyEhYaYu-w/edit?usp=sharing"> <i class="far fa-file-alt"></i>  Resume</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
