import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import Loading from "../component/Loading";
import Login from "../component/Login";
import Register from "../component/Register";
import Notfound from "../component/Notfound";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Notfound />} />
    
      </Routes>
    
    </div>
  );
};

export default Routers;
