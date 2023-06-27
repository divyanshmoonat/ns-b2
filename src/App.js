import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";

function App() {
  return (
    <div className="">
      {/* LAYOUT OF THE APP */}
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
