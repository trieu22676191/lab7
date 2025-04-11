import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";

const Layout = () => {
  return (
    <Container fluid className="p-0 min-vh-100 w-100">
      <Row className="g-0 w-100">
        {/* Sidebar */}
        <Col md={3} className="bg-light p-0">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col md={9} className="d-flex flex-column p-0">
          <Header />
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
