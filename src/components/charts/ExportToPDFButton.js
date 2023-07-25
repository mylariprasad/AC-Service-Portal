import React from "react";
import html2pdf from "html2pdf.js";

const ExportToPDFButton = ({ containerId }) => {
  const handleExportPDF = () => {
    const element = document.getElementById(containerId);

    
    const pageWidth = 10 * 92; 
    const pageHeight = 14 * 72; 

    html2pdf()
      .set({
        html2canvas: { scale: 4 }, 
        jsPDF: { unit: "pt", format: [pageWidth, pageHeight], orientation: "landscape" },
      })
      .from(element)
      .save("charts.pdf");
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#0000FF",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={buttonContainerStyle}>
      <button onClick={handleExportPDF} style={buttonStyle}>
        Export Charts to PDF
      </button>
    </div>
  );
};

export default ExportToPDFButton;
