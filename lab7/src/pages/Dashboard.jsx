import React from "react";
import Overview from "../components/Overview";
import DetailedReport from "../components/DetailedReport";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="overview-section">
        <Overview />
      </div>
      <div className="detailed-report-section">
        <DetailedReport />
      </div>
    </div>
  );
};

export default Dashboard;
