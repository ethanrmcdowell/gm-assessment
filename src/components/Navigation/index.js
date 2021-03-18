import React from "react";
import './style.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <form className="d-flex">
          <ul className="nav navbar-nav navbar-expand-lg">
          <li className="nav-item pad">
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item pad">
              <a className="nav-link" href="https://github.com/ethanrmcdowell/gm-assessment">
                GITHUB REPOSITORY
              </a>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
