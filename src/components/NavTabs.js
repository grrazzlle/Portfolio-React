import React from "react";
import {NavLink} from 'react-router-dom';

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/Portfolio-React/AboutPage"
          onClick={() => props.handlePageChange("AboutPage")}
          className={"nav-link"}
        >
          <h2>Christopher Lee</h2>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Portfolio-React/AboutPage"
          onClick={() => props.handlePageChange("AboutPage")}
          activeClassName="nav-link active"
          className={"nav-link"}
        >
          <h2>About</h2>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Portfolio-React/PortfolioPage"
          onClick={() => props.handlePageChange("PortfolioPage")}
          activeClassName="nav-link active"
          className={"nav-link"}
        >
          <h2>Portfolio</h2>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Portfolio-React/ContactPage"
          onClick={() => props.handlePageChange("ContactPage")}
          activeClassName="nav-link active"
          className={"nav-link"}
        >
          <h2>Contact</h2>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
