import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Admin from "./Admin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}