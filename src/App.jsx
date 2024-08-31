import { useState } from "react";
import Header from "./Header";
import "./App.css";
import Login from "./Login";
import ChooseTask from "./ChooseTask";
import Spreadsheet from "./Spreadsheet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/choosetask" element={<ChooseTask />} />
          <Route path="/spreadsheet" element={<Spreadsheet />} />
          {/* Add your other routes here, like the register page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
