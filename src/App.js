import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"

import Home from "./pages/Home";
import Food from "./pages/Food";
import Restaurant from "./pages/Restaurant";
import Tech from "./pages/Tech";
import Kids from "./pages/Kids";


import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid g-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App