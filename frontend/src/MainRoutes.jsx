import { Login } from "./pages/Login";
import { Routes, Route } from "react-router-dom";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
