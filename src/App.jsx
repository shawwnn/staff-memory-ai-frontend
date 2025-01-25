import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./layouts/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background">
        {/* Sidebar (1/4 of the screen) */}
        <Sidebar />
        
        {/* Main Content (3/4 of the screen) */}
        <div className="flex-1 p-6 bg-white text-secondary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
