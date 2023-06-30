import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import HotelDetails from "./containers/HotelDetails";
import Login from "./containers/Login";
import Layout from "./containers/Layout";

function App() {
  return (
    <div className="">
      {/* LAYOUT OF THE APP */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="hotel-details/:slug"
            element={
              <Layout>
                <HotelDetails />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
