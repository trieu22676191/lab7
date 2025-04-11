import React, { useState, useEffect } from "react";
import EditCustomerModal from "./EditModal";

const DetailedReport = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:3000/customers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Đảm bảo dữ liệu có đúng định dạng theo data.json
        const formattedData = data.map((customer) => ({
          id: customer.id,
          customerName: customer.customerName || "Unknown",
          company: customer.company || "Unknown",
          orderValue: customer.orderValue || "$0",
          orderDate: customer.orderDate || new Date().toLocaleDateString(),
          status: customer.status?.toLowerCase() || "new",
          avatar: customer.avatar || "/src/img/avt.png",
        }));
        setCustomers(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setError("Failed to load customers data");
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedCustomer(null);
  };

  const handleUpdate = (updatedCustomer) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
  };

  // Tính toán dữ liệu cho trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-4">
        <img
          src="/src/img/Dashboard.png"
          alt="Report Icon"
          className="me-2"
          style={{ width: "24px" }}
        />
        <h2 className="mb-0">Detailed Report</h2>
      </div>
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn me-2"
          style={{ border: "1px solid #FF69B4", color: "#FF69B4" }}
        >
          <img
            src="/src/img/Move up.png"
            alt="Import"
            className="me-1"
            style={{ width: "16px", height: "16px" }}
          />
          Import
        </button>
        <button
          className="btn"
          style={{ border: "1px solid #FF69B4", color: "#FF69B4" }}
        >
          <img
            src="/src/img/Download.png"
            alt="Export"
            className="me-1"
            style={{ width: "16px", height: "16px" }}
          />
          Export
        </button>
      </div>
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Customer Name</th>
            <th scope="col">Company</th>
            <th scope="col">Order Value</th>
            <th scope="col">Order Date</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((customer) => (
            <tr key={customer.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img
                  src={customer.avatar}
                  alt={customer.customerName}
                  className="rounded-circle me-2"
                  style={{ width: "30px" }}
                />
                {customer.customerName}
              </td>
              <td>{customer.company}</td>
              <td>{customer.orderValue}</td>
              <td>{customer.orderDate}</td>
              <td>
                <span
                  className="badge"
                  style={{
                    ...(customer.status === "new"
                      ? { backgroundColor: "#E8F7FF", color: "#0095FF" }
                      : customer.status === "in-progress"
                      ? { backgroundColor: "#FFF6E9", color: "#FF9900" }
                      : { backgroundColor: "#E9FBF0", color: "#05CD99" }),
                    padding: "5px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {customer.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm"
                  onClick={() => handleEdit(customer)}
                  style={{ color: "#FF69B4" }}
                >
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center">
        <span>{customers.length} results</span>
        <nav>
          <ul className="pagination mb-0">
            <li className="page-item">
              <button
                className="page-link border-0"
                style={{ color: "#8E95A9" }}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <li key={pageNumber} className="page-item">
                  <button
                    className="page-link border-0"
                    style={{
                      backgroundColor:
                        currentPage === pageNumber ? "#FF69B4" : "transparent",
                      color: currentPage === pageNumber ? "white" : "#8E95A9",
                      borderRadius: "8px",
                      margin: "0 2px",
                    }}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              )
            )}
            <li className="page-item">
              <button
                className="page-link border-0"
                style={{ color: "#8E95A9" }}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <EditCustomerModal
        show={showEditModal}
        handleClose={handleCloseModal}
        customer={selectedCustomer}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default DetailedReport;
