import { Navigate, Route, Routes } from "react-router-dom";
import MarvelPage from "../heroes/pages/MarvelPage";
import LoginPage from "../auth/pages/LoginPage";
import DcPage from "../heroes/pages/DCPage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </div>
  );
};

export default AppRouter;