import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import MarvelPage from "../pages/MarvelPage";
import DcPage from "../pages/DcPage";
import Hero from "../pages/Hero";
import SearchPage from "../pages/SearchPage";

const HeroesRoutes = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="hero" element={<Hero />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </div>
  );
};

export default HeroesRoutes;
