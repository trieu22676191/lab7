import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) => {
    return `text-${
      isActive ? "white" : "dark"
    } mb-2 d-flex align-items-center text-decoration-none p-2 rounded-pill ${
      isActive ? "bg-pink" : "hover-bg-light"
    }`;
  };

  return (
    <div
      className="d-flex flex-column bg-light h-100"
      style={{ width: "280px", padding: "20px" }}
    >
      <style>
        {`
          .bg-pink {
            background-color: #FF69B4 !important;
          }
          .hover-bg-light:hover {
            background-color: #f8f9fa;
          }
        `}
      </style>
      <img
        src="/src/img/logo.png"
        alt="Logo"
        className="mb-4"
        style={{ width: "100px" }}
      />
      <Nav className="flex-column">
        <NavLink to="/dashboard" className={linkStyle}>
          <img
            src="/src/img/dashboard.png"
            alt="Dashboard"
            className="me-2"
            style={{ width: "20px" }}
          />
          Dashboard
        </NavLink>
        <NavLink to="/projects" className={linkStyle}>
          <img
            src="/src/img/project.png"
            alt="Projects"
            className="me-2"
            style={{ width: "20px" }}
          />
          Projects
        </NavLink>
        <NavLink to="/teams" className={linkStyle}>
          <img
            src="/src/img/team.png"
            alt="Teams"
            className="me-2"
            style={{ width: "20px" }}
          />
          Teams
        </NavLink>
        <NavLink to="/analytics" className={linkStyle}>
          <img
            src="/src/img/analytics.png"
            alt="Analytics"
            className="me-2"
            style={{ width: "20px" }}
          />
          Analytics
        </NavLink>
        <NavLink to="/messages" className={linkStyle}>
          <img
            src="/src/img/chat.png"
            alt="Messages"
            className="me-2"
            style={{ width: "20px" }}
          />
          Messages
        </NavLink>
        <NavLink to="/integrations" className={linkStyle}>
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
