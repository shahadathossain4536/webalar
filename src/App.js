import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="px-5">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
