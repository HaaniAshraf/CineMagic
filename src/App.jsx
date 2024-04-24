import React from "react";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import UserHome from "./pages/UserHome";
import Liked from './pages/Liked'
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
