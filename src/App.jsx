// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Admin from './pages/Admin';
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Groceries from "./pages/Groceries";
import ShoppingCart from "./pages/ShoppingCart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Employees from "./pages/Employees";
import Users from "./pages/Users";
import "./App.css";

// importing modal so i can preview it
import Modal from "./components/Modal";

export default function App() {
  // Global state for search bar functionality
  const [searchValue, setSearchValue] = useState("");
  const [modalData, setModalData] = useState({});

  return (
    <>
      <Router>
        <Navbar setSearchValue={setSearchValue} />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home setModalData={setModalData} />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route
              path="/groceries"
              element={
                <Groceries
                  searchValue={searchValue}
                  setModalData={setModalData}
                />
              }
            />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/admin/employees" element={<Employees />} />
            <Route path="/admin/users" element={<Users />} />
          </Routes>

          <Modal data={modalData} setModalData={setModalData} />
        </div>
        <Footer />
      </Router>
    </>
  );
}
