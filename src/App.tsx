import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Counters from "./pages/Counters";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <NavTabs />
      <Routes>
        <Route path="/" element={<></>} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}