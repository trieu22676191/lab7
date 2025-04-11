import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddModal = ({ show, handleClose, handleAdd }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "new",
    avatar: "/src/img/avt.png",
  });
  const [nextId, setNextId] = useState(1);

  // Lấy danh sách khách hàng để xác định ID tiếp theo
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:3000/customers");
        if (response.ok) {
          const customers = await response.json();
          // Tìm ID lớn nhất và cộng thêm 1
          const maxId = Math.max(...customers.map((c) => parseInt(c.id) || 0));
          setNextId(maxId + 1);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    if (show) {
      fetchCustomers();
    }
  }, [show]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "orderValue") {
      // Loại bỏ dấu $ và khoảng trắng, chỉ giữ lại số
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = formatDate(formData.orderDate);
      const response = await fetch("http://localhost:3000/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: nextId,
          ...formData,
          orderValue: `$${formData.orderValue}`,
          orderDate: formattedDate,
          avatar: "/src/img/avt.png",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add customer");
      }

      const newCustomer = await response.json();
      handleAdd(newCustomer);
      handleClose();
      setFormData({
        customerName: "",
        company: "",
        orderValue: "",
        orderDate: "",
        status: "new",
        avatar: "/src/img/avt.png",
      });
      // Tăng nextId lên 1 cho lần thêm tiếp theo
      setNextId((prev) => prev + 1);
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Order Value</Form.Label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <Form.Control
                type="text"
                name="orderValue"
                value={formData.orderValue}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Order Date</Form.Label>
            <Form.Control
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="new">new</option>
              <option value="in-progress">in progress</option>
              <option value="completed">completed</option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: "#FF69B4", borderColor: "#FF69B4" }}
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
