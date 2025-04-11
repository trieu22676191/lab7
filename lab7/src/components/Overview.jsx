import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";

const Overview = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:3000/customers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCustomers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // Tính toán các giá trị
  const calculateTurnover = () => {
    return customers.reduce((total, customer) => {
      const value = parseFloat(customer.orderValue.replace("$", "")) || 0;
      return total + value;
    }, 0);
  };

  const calculateProfit = () => {
    const turnover = calculateTurnover();
    return turnover - turnover * 0.1; // Trừ đi 10% của turnover
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (loading) {
    return (
      <div className="p-4">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

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
              <Card.Text
                className="mt-2"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                {formatCurrency(calculateTurnover())}
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
              <Card.Text
                className="mt-2"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                {formatCurrency(calculateProfit())}
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
              <Card.Text
                className="mt-2"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                {customers.length}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
