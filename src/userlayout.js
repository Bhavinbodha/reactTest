import React from "react";
import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Jokes from "./jokes";

function Userlayout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/jokes" element={<Jokes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Userlayout;
