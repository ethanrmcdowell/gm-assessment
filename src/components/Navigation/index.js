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
                Home
              </a>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
