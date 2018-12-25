import React, { useState } from "react";
import ToolBar from "./components/ToolBar.js";
import WorkPane from "./components/WorkPane.js";
import Preview from "./components/Preview.js";

import "./App.css";

function App() {
  const [pane, setPane] = useState("newInvoice");
  const [invoiceData, setInvoiceData] = useState({});

  const setData = data => data !== invoiceData && setInvoiceData(data);

  return (
    <div className="App">
      <ToolBar setPane={setPane} />
      <WorkPane pane={pane} setInvoiceData={setData} />
      <Preview data={invoiceData} />
    </div>
  );
}

export default React.memo(App);
