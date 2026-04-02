import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./common/component/Sidebar";
import Navbar from "./common/component/Navbar";
import DashboardRoute from "./common/component/DashboardRoute";

import "./App.css";

import LoginPage from "./features/login/pages/LoginPage";

function Layout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <Sidebar isMobileOpen={isMobileOpen} toggleMobileMenu={toggleMobileMenu}>
      <Navbar onToggleMenu={toggleMobileMenu} />
      <div className="main-content">
        <DashboardRoute />
      </div>
    </Sidebar>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
