import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import UserHome from "./pages/UserHome";
import AdminHome from "./pages/AdminHome";
const Login = React.lazy(() => import("./pages/login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Profile = React.lazy(() => import("./pages/Profile"));
const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const Error = React.lazy(() => import("./components/Error"));
const UserLayout = React.lazy(() => import("./layout/userLayout"));
const AddMovie = React.lazy(() => import("./pages/AddMovie"));
const EditMovie = React.lazy(() => import("./pages/EditMovie"));
import { MovieProvider } from "./Context/MovieContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import ScrollToTop from "./components/Scroll";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <MovieProvider>
          <ScrollToTop />
          <Suspense fallback={<div>...Loading</div>}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                element={<ProtectedRoute allowedRoles={["user", "admin"]} />}
              >
                <Route element={<UserLayout />}>
                  <Route path="/home" element={<UserHome />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/movieDetails/:movieId"
                    element={<MovieDetails />}
                  />
                </Route>
              </Route>
              <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route path="/adminHome" element={<AdminHome />} />
                <Route path="/addMovie" element={<AddMovie />} />
                <Route path="/editMovie/:movieId" element={<EditMovie />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </MovieProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
