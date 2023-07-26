import React from "react";
import RepairVolumeChart from "./RepairVolumeChart";
import EmployeeProductivityChart from "./EmployeeProductivityChart";
import CustomerSatisfactionChart from "./CustomerSatisfactionChart";
import ExportToPDFButton from "./ExportToPDFButton";
import html2pdf from "html2pdf.js";
import "./Style.css"

const Charts_render = () => {
  return (
    <div className="App1">
      <h1>Charts</h1>
      <div id="charts-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "55%" }}>
          <RepairVolumeChart />
          <EmployeeProductivityChart />
        </div>
        <div style={{ marginTop: "20px" }}>
          <CustomerSatisfactionChart />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <ExportToPDFButton containerId="charts-container" />
      </div>
    </div>
  );
};

export default Charts_render;
