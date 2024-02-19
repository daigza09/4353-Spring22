import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/LogIn";
import Signup from "./pages/Signup";
import FQform from "./pages/FQform";
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="FQform" element ={<FQform/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;