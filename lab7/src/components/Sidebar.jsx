import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-light h-100"
      style={{ width: "280px", padding: "20px" }}
    >
      <img
        src="/src/img/logo.png"
        alt="Logo"
        className="mb-4"
        style={{ width: "100px" }}
      />
      <Nav className="flex-column">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `text-dark mb-2 d-flex align-items-center text-decoration-none ${
              isActive ? "fw-bold" : ""
            }`
          }
        >
          <img
            src="/src/img/dashboard.png"
            alt="Dashboard"
            className="me-2"
            style={{ width: "20px" }}
          />
          Dashboard
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `text-dark mb-2 d-flex align-items-center text-decoration-none ${
              isActive ? "fw-bold" : ""
            }`
          }
        >
          <img
            src="/src/img/project.png"
            alt="Projects"
            className="me-2"
            style={{ width: "20px" }}
          />
          Projects
        </NavLink>
        <NavLink
          to="/teams"
          className={({ isActive }) =>
            `text-dark mb-2 d-flex align-items-center text-decoration-none ${
              isActive ? "fw-bold" : ""
            }`
          }
        >
          <img
            src="/src/img/team.png"
            alt="Teams"
            className="me-2"
            style={{ width: "20px" }}
          />
          Teams
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `text-dark mb-2 d-flex align-items-center text-decoration-none ${
              isActive ? "fw-bold" : ""
            }`
          }
        >
          <img
            src="/src/img/analytics.png"
            alt="Analytics"
            className="me-2"
            style={{ width: "20px" }}
          />
          Analytics
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `text-dark mb-2 d-flex align-items-center text-decoration-none ${
              isActive ? "fw-bold" : ""
            }`
          }
        >
          <img
            src="/src/img/chat.png"
            alt="Messages"
            className="me-2"
            style={{ width: "20px" }}
          />
          Messages
        </NavLink>
        <NavLink
          to="/integrations"
          className={({ isActive }) =>
            `text-dark mb-2 d-flex align-items-center text-decoration-none ${
              isActive ? "fw-bold" : ""
            }`
          }
        >
          <img
            src="/src/img/integrations.png"
            alt="Integrations"
            className="me-2"
            style={{ width: "20px" }}
          />
          Integrations
        </NavLink>
      </Nav>
      <div className="mt-auto p-3 bg-white rounded shadow-sm">
        <img src="/src/img/Group.png" alt="Update" className="img-fluid mb-2" />
        <h6 className="text-dark text-center">V2.0 is available</h6>
        <button className="btn btn-outline-primary w-100">Try now</button>
      </div>
    </div>
  );
};

export default Sidebar;
