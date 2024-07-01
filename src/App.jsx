import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartDetail, Header, Home } from "./components";
import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<CartDetail />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
