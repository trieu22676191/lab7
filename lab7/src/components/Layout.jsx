import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Layout = () => {
  return (
    <Container fluid className="p-2 min-vh-100">
      <Row className="g-2">
        {/* Header */}
        <Col xs={12} className="bg-white p-3 text-center shadow-sm">
          <h2 className="m-0">My Header</h2>
        </Col>

        {/* Main Content */}
        <Row className="g-2 flex-grow-1">
          {/* Menu */}
          <Col xs={12} md={3} className="bg-white p-3 shadow-sm">
            <div className="d-flex flex-column">
              <a href="#" className="mb-2 text-decoration-none">
                Link 1
              </a>
              <a href="#" className="mb-2 text-decoration-none">
                Link 2
              </a>
              <a href="#" className="mb-2 text-decoration-none">
                Link 3
              </a>
            </div>
          </Col>

          {/* Content */}
          <Col xs={12} md={9} className="bg-white p-3 shadow-sm">
            <h3 className="text-primary">Lorem Ipsum</h3>
          </Col>
        </Row>

        {/* Footer */}
        <Col xs={12} className="bg-white p-3 text-center shadow-sm">
          <h4 className="m-0">Footer</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
