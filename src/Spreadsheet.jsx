import React, { useState, useRef } from "react";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.css";
import "./Spreadsheet.css"; // Assume this is where we handle custom styling
import "@fortawesome/fontawesome-free/css/all.min.css";

function Spreadsheet() {
  const hotTableComponent = useRef(null);
  const [sheets, setSheets] = useState([
    {
      id: 1,
      data: Array(50)
        .fill()
        .map(() => Array(15).fill("")),
    },
  ]);
  const [activeSheet, setActiveSheet] = useState(1);

  const hotTableSettings = {
    data: sheets.find((sheet) => sheet.id === activeSheet)?.data || [],
    colHeaders: true,
    rowHeaders: true,
    width: "100%",
    height: "100vh", // Set height to full viewport height
    licenseKey: "non-commercial-and-evaluation",
    filters: true,
    sortIndicator: true,
    manualColumnResize: true,
    manualRowResize: true,
    comments: true,
    stretchH: "all", // Stretch columns to fit the full width
    autoWrapRow: true, // Allow rows to wrap automatically
    maxRows: 1000, // Set a large number of rows to allow scrolling
  };

  const handleSave = () => {
    alert("Save function not implemented");
  };

  const handleLoad = () => {
    alert("Load function not implemented");
  };

  const addSheet = () => {
    const newId = sheets.length
      ? Math.max(sheets.map((sheet) => sheet.id)) + 1
      : 1;
    setSheets([
      ...sheets,
      {
        id: newId,
        data: Array(50)
          .fill()
          .map(() => Array(15).fill("")),
      },
    ]);
    setActiveSheet(newId);
  };

  return (
    <div className="spreadsheet-container">
      {/* Toolbar */}
      <div className="toolbar-container">
        <div className="toolbar-section">
          <button className="toolbar-button">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-cut"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-copy"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-paste"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-trash-alt"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-table"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-font"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-align-left"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-align-center"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-align-right"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-align-justify"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-th"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-lock"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-object-group"></i>
          </button>
          <button className="toolbar-button">
            <i className="fas fa-square-root-alt"></i>
          </button>
        </div>
        <div className="toolbar-tabs">
          <button onClick={handleLoad}>Load</button>
          <button onClick={handleSave}>Save</button>
          <button>Edit</button>
          <button>Format</button>
          <button>Insert</button>
          <button>Export</button>
          <button>LoadTickerData</button>
          <button>Run</button>
          <button>EditableCells</button>
        </div>
      </div>

      {/* Spreadsheet */}
      <div className="hot-table-container">
        <HotTable ref={hotTableComponent} settings={hotTableSettings} />
      </div>

      {/* Sheet navigation */}
      <div className="sheet-navigation">
        {sheets.map((sheet) => (
          <button
            key={sheet.id}
            className={`sheet-button ${
              activeSheet === sheet.id ? "active" : ""
            }`}
            onClick={() => setActiveSheet(sheet.id)}
          >
            {`Sheet ${sheet.id}`}
          </button>
        ))}
        <button className="add-sheet-button" onClick={addSheet}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Spreadsheet;
