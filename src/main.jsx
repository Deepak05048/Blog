import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import BlogreadPage from "./Pages/BlogreadPage.jsx";
import JoinusPage from "./Pages/JoinusPage.jsx";
import BottomNavbar from "./components/BottomNavbar.jsx";
import TopNavbar from "./components/TopNavbar.jsx";
import Footer from "./components/Footer.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TopNavbar/>
      <BottomNavbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/blog/:id" element={<BlogreadPage />} />
        <Route path="/join-us" element={<JoinusPage />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  </StrictMode>
);
