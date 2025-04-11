import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ show, handleClose, customer, handleUpdate }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    if (customer) {
      setFormData({
        customerName: customer.customerName,
        company: customer.company,
        orderValue: customer.orderValue.replace("$", ""),
        orderDate: customer.orderDate,
        status: customer.status,
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = formatDate(formData.orderDate);
      const response = await fetch(
        `http://localhost:3000/customers/${customer.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...customer,
            ...formData,
            orderValue: `$${formData.orderValue}`,
            orderDate: formattedDate,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update customer");
      }

      const updatedCustomer = await response.json();
      handleUpdate(updatedCustomer);
      handleClose();
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Customer</Modal.Title>
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
            <Form.Control
              type="number"
              name="orderValue"
              value={formData.orderValue}
              onChange={handleChange}
              required
            />
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

export default EditModal;
