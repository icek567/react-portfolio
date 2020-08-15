import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';






function Header() {
  return (

    <div className="wrapper">
      <Navbar id="smallNav" variant="dark" expand="lg" className="w3-hide-large w3-hide-medium">
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/carousel">My Gallery</Nav.Link>
            <NavDropdown classname="navDrop" title="Pages" id="nav-dropdown">
              <NavDropdown.Item href="https://github.com/icek567">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/sergio-perez-a67305194/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://drive.google.com/file/d/1JjgbeOfvgFkX5WIFTRtENxIv43OIbCvb/view?usp=sharing">Resume</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="sidebar" className="w3-hide-small">
        <div className="sidebar-header">
          <h3>Menu</h3>
        </div>

        <div className="content">

          <ul className="list-unstyled components">
            <li>
              <Link id="link" className="nav-link" to="/"><i class="fas fa-home"></i>  Home</Link>
            </li>
            <li>
              <Link id="link" className="nav-link" to="/portfolio"><i class="fas fa-briefcase"></i>  Portfolio</Link>
            </li>
            <li>
              <Link id="link" className="nav-link" to="/carousel"> <i class="fas fa-camera-retro"></i>  My Gallery</Link>
            </li>
            <li>
              <a id="link" href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                className="dropdown-toggle">Pages</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a id="link" href="https://github.com/icek567"><i class="fab fa-github"></i>  GitHub</a>
                </li>
                <li>
                  <a id="link" href="https://www.linkedin.com/in/sergio-perez-a67305194/"> <i class="fab fa-linkedin"></i>  LinkedIn</a>
                </li>
                <li>
                  <a id="link" href="https://drive.google.com/file/d/1JjgbeOfvgFkX5WIFTRtENxIv43OIbCvb/view?usp=sharing"> <i class="far fa-file-alt"></i>  Resume</a>
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
