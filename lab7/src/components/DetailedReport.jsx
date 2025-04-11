import React from "react";

const DetailedReport = () => {
  const products = [
    {
      id: 1,
      name: "Elizabeth Lee",
      company: "AvatarSystems",
      value: "$359",
      date: "10/07/2023",
      status: "New",
      img: "/src/img/avt.png",
    },
  ];

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
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-circle me-2"
                  style={{ width: "30px" }}
                />
                {product.name}
              </td>
              <td>{product.company}</td>
              <td>{product.value}</td>
              <td>{product.date}</td>
              <td>
                <span
                  style={{
                    ...(product.status === "New"
                      ? { backgroundColor: "#E8F7FF", color: "#0095FF" }
                      : product.status === "In-progress"
                      ? { backgroundColor: "#FFF6E9", color: "#FF9900" }
                      : { backgroundColor: "#E9FBF0", color: "#05CD99" }),
                  }}
                >
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center">
        <span>1 results</span>
        <nav>
          <ul className="pagination mb-0">
            <li className="page-item">
              <button
                className="page-link border-0"
                style={{ color: "#8E95A9" }}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link border-0"
                style={{
                  backgroundColor: "#FF69B4",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                1
              </button>
            </li>

            <li className="page-item">
              <button
                className="page-link border-0"
                style={{ color: "#8E95A9" }}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DetailedReport;
