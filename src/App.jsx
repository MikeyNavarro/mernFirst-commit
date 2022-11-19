import React from "react";
import { Route, Routes } from "react-router-dom";
import AllRecords from "./pages/AllRecords";
import Create from "./pages/Create";
import ViewRecord from "./pages/Edit";
import "./Theme.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/records" element={<AllRecords />} />
        <Route path="/record/edit/:record_id" element={<ViewRecord />} />
      </Routes>
    </div>
  );
};

export default App;
