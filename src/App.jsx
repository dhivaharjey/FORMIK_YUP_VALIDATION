import React from "react";
import "./components/styles/bootstrap.min.css";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Update from "./components/Update";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Read from "./components/Read";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read/:id" element={<Read />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
