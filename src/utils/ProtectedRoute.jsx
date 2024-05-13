import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails) {
      navigate("/", { replace: true });
      //  { replace: true } replaces the current entry in the history stack instead of adding a new one.
      // This prevents users from being able to go back to the protected page they were just redirected from using the browser's back button.
    } else if (allowedRoles && !allowedRoles.includes(userDetails.role)) {
      navigate("/", { replace: true }); 
    }
  }, [userDetails, navigate, allowedRoles]);
  return userDetails ? <Outlet /> : null;
};

export default ProtectedRoute;
