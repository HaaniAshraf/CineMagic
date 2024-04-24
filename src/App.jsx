import React from "react";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import UserHome from "./pages/UserHome";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import UserLayout from "./layout/userLayout";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<UserLayout />}>
            <Route index element={<UserHome />} />
            <Route path="liked" element={<Liked />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
