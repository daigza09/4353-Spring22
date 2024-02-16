import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/Home" />} />
        <Route path="Home" element={<Home />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
