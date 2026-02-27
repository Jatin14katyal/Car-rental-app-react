import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewCars from "./pages/ViewCars";
import CarDetails from "./pages/CarDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cars" element={<ViewCars />} />
          <Route path="cars/:id" element={<CarDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
