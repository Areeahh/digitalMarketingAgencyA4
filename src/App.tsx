import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/page";
import ServicesPage from "./pages/Services/page";
import ContactPage from "./pages/Contact/page";
import LoginPage from "./pages/Login/page";
import SignupPage from "./pages/Signup/page";
import DashboardPage from "./pages/Dashboard/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;