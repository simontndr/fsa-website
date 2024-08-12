/*this component will be the navigation bar*/
/*data-toggle specifies certain behaviour, collapse means the button toggles visibility of navigation*/
/*data-target specifies what will be affected by the behaviour, in this case what is being collapsed*/
/*!!!! data-bs-target data-bs-toggle*/

import React from 'react';

const Navbar: React.FC = () => {
    
  return (
    <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
      <a className="navbar-brand" href="#home-main"><img src='./assets/images/UGFSA-logo.png' width='60' alt="UGFSA LOGO"/></a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-options"
        aria-controls="navbar-options"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbar-options">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about-section">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#team-section">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#why-join-section">Join</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-info">Connect</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;