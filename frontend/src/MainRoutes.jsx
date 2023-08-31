import { Login } from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}
