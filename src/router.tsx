import { Route, Routes } from "react-router-dom";
import { ConstructionProgress } from "./pages/ConstructionProgress";
import { Home } from "./pages/Home";
import { MonthlyGallery } from "./pages/MonthlyGallery";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/progressodaobra" element={<ConstructionProgress/>}/>
      <Route path="/galeriasmensais" element={<MonthlyGallery/>}/>
    </Routes>
  )
} 