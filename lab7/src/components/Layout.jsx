import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Teams from "../pages/Teams";
import Analytics from "../pages/Analytics";
import Messages from "../pages/Messages";
import Integrations from "../pages/Integrations";

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
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
