import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export const MainRoutes = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoutes = ({ redirectTo }) => {

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  }
  return (

    <Routes>
      <Route path="/" element={<Login
        setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>

  )
}
