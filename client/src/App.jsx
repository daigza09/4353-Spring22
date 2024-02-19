import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import FuelForm from "./pages/FuelForm";
import Login from "./pages/Login-Temp";
import ProfileManagement from "./pages/ProfileManagement";
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="FuelForm" element={<FuelForm/>}/>
        <Route path="ProfileManagement" element={<ProfileManagement />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;