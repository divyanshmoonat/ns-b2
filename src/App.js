import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import HotelDetails from "./containers/HotelDetails";

function App() {
  return (
    <div className="">
      {/* LAYOUT OF THE APP */}
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="hotel-details/:slug" element={<HotelDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
