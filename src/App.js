// required imports
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import EventState from "./context/events/EventState";
import AuthState from "./context/auth/AuthState";
import LikedEvents from "./components/LikedEvents";
import AddEvent from "./components/AddEvent";
function App() {
  return (
    <AuthState>
      <Router>
        <Navbar />
        <EventState>
          <Routes>
            {/* path to home */}
            <Route exact path="/" element={<Home />} /> 
            {/* path to login */}
            <Route exact path="/login" element={<Login />} />
            {/* path to register */}
            <Route exact path="/register" element={<Register />} />
            {/* path to liked events screen */}
            <Route exact path="/likedEvents" element={<LikedEvents />} />
            {/* path to adding events screen */}
            <Route exact path="/addEvent" element={<AddEvent />} />
          </Routes>
        </EventState>
      </Router>
    </AuthState>
  );
}

export default App;
