import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col animate-gradient bg-gradient-to-br from-green-700 via-emerald-500 to-lime-600">
      {/* Gradient animation */}
      <style>
        {`
          .animate-gradient {
            background-size: 300% 300%;
            animation: gradientMove 12s ease infinite;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
