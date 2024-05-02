import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import UserHome from "./pages/UserHome";
import Profile from "./pages/Profile";
import MovieDetails from "./pages/MovieDetails";
import Error from "./components/Error";
import UserLayout from "./layout/userLayout";
import AdminHome from "./pages/AdminHome";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import { MovieProvider } from "./Context/MovieContext";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <MovieProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<UserLayout />}>
                <Route path="/home" element={<UserHome />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/movieDetails/:movieId"
                  element={<MovieDetails />}
                />
              </Route>
              <Route path="/adminHome" element={<AdminHome />} />
              <Route path="/addMovie" element={<AddMovie />} />
              <Route path="/editMovie/:movieId" element={<EditMovie />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </MovieProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
