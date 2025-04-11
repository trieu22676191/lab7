import React from "react";
import { Navbar, Form, FormControl, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="w-100 border-bottom"
      style={{ backgroundColor: "#ffffff", height: "70px" }}
    >
      <Container fluid className="h-100">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Trái */}
          <Navbar.Brand className="text-pink fw-bold">Dashboard</Navbar.Brand>

          {/* Phải */}
          <div className="d-flex align-items-center gap-4">
            {/* Ô tìm kiếm */}
            <div className="position-relative" style={{ width: "400px" }}>
              <img
                src="/src/img/search.png"
                alt="Search icon"
                className="position-absolute"
                style={{
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "18px",
                  opacity: 0.6,
                }}
              />
              <FormControl
                type="search"
                placeholder="Search..."
                className="ps-5"
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "0.5rem",
                  border: "none",
                  width: "100%",
                }}
              />
            </div>

            {/* Các icon */}
            <div className="d-flex align-items-center gap-3">
              <img
                src="/src/img/question.png"
                alt="Help icon"
                style={{ width: "20px", cursor: "pointer" }}
              />
              <img
                src="/src/img/Bell.png"
                alt="Notification icon"
                style={{ width: "20px", cursor: "pointer" }}
              />
              <div
                className="rounded-circle overflow-hidden"
                style={{ width: "36px", height: "36px" }}
              >
                <img
                  src="/src/img/avt.png"
                  alt="User avatar"
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
