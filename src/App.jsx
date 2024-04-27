import React from "react";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import UserHome from "./pages/UserHome";
import Liked from "./pages/Liked";
import Error from "./components/Error";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import UserLayout from "./layout/userLayout";
import AdminHome from "./pages/AdminHome";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<UserLayout />}>
            <Route path="*" element={<Error />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/adminHome" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
