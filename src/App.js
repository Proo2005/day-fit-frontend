import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/ui/layout";
import DayFitLandingPage from "./pages/start";
import Login from "./pages/login";
import Register from "./pages/Register";
import "./App.css";
import MyHomePage from "./pages/Home";
import ExercisePage from "./pages/ExercisePage";
import AssistantPage from "./pages/Ai";
import SupplimentPage from "./pages/supplimenet";
import CartPage from "./pages/cart";
import PremiumPage from "./pages/premimium";
import PaymentPage from "./pages/payment";
import Privacy from "./pages/Privacy";
import Community from "./pages/Community";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DayFitLandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>


          <Route path="/home" element={<MyHomePage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/Ai" element={<AssistantPage />} />
          <Route path="/suppliment" element={<SupplimentPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/premimium" element={<PremiumPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
