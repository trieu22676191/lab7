import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";

const Layout = () => {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100vw" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "280px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: "280px",
          width: "calc(100vw - 280px)",
          height: "100vh",
        }}
      >
        <Header />
        <div style={{ height: "calc(100vh - 70px)", overflowY: "auto" }}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Layout;
