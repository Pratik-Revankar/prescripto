import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[8%] 2xl:mx-auto max-w-[1240px]">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/appointment/:doctorId" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
