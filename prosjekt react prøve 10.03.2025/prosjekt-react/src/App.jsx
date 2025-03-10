import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NewCase from "./pages/NewCase";
import { CaseProvider } from "./context/CaseContext";

export default function App() {
  return (
    <CaseProvider>
      <Router>
        <nav>
          <Link to="/">Hjem</Link>
          <Link to="/new">Ny sak</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewCase />} />
        </Routes>
      </Router>
    </CaseProvider>
  );
}
