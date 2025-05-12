import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Login from "../components/login/Login";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/recipe" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
