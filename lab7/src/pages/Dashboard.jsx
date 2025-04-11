import React from "react";
import Overview from "../components/Overview";
import DetailedReport from "../components/DetailedReport";

const Dashboard = () => {
  return (
    <div>
      <Overview />
      <DetailedReport />
      {/* Các nội dung khác của Dashboard */}
    </div>
  );
};

export default Dashboard;
