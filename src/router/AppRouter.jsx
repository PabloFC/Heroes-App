import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRouter from "../heroes/routes/PrivateRouter";
import PublicRouter from "../heroes/routes/PublicRouter";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
