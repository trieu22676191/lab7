import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Overview = () => {
  return (
    <div className="p-4">
      <h2>Overview</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card
            className="shadow-sm border-0"
            style={{ backgroundColor: "#fff0f6" }}
          >
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>Turnover</Card.Title>
                <div className="bg-white rounded-circle p-2">
                  <img
                    src="/src/img/cart.png"
                    alt="Turnover"
                    style={{ width: "24px" }}
                  />
                </div>
              </div>
              <Card.Text>
                <h3>$92,405</h3>
                <span className="text-success">↑ 5.39% period of change</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="shadow-sm border-0"
            style={{ backgroundColor: "#e7f5ff" }}
          >
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>Profit</Card.Title>
                <div className="bg-white rounded-circle p-2">
                  <img
                    src="/src/img/dollar.png"
                    alt="Profit"
                    style={{ width: "24px" }}
                  />
                </div>
              </div>
              <Card.Text>
                <h3>$32,218</h3>
                <span className="text-success">↑ 5.39% period of change</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="shadow-sm border-0"
            style={{ backgroundColor: "#e7f5ff" }}
          >
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>New customer</Card.Title>
                <div className="bg-white rounded-circle p-2">
                  <img
                    src="/src/img/user.png"
                    alt="New Customer"
                    style={{ width: "24px" }}
                  />
                </div>
              </div>
              <Card.Text>
                <h3>298</h3>
                <span className="text-success">↑ 6.84% period of change</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
