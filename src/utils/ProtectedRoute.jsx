import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails) {
      navigate("/", { replace: true });
    }
  }, [userDetails, navigate]);
  return userDetails ? <Outlet /> : null;
};

export default ProtectedRoute;
