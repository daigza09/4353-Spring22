import { Link } from "react-router-dom";
import './header.css'

function Header() {
  return (
    <header className="flex justify-between p-4 text-white text-2xl font-sans md:px-6 bg-[#345d62] rounded-2xl">
      <div>
        Group 6 
      </div>

      <div className="flex items-center md:space-x-10">
        <Link to="/Home" className="linkUnderline">
          Home
        </Link>
        <Link to="/Login" className="linkUnderline">
          Log In
        </Link>
        <Link to="/Signup" className="linkUnderline">
          Sign Up
        </Link>
        <Link to="/FuelForm" className="linkUnderline">
          Fuel Quote Form
        </Link>
        <Link to="/ProfileManagement" className="linkUnderline">
          Profile Management
        </Link>
        <Link to="/History" className="linkUnderline">
          History
        </Link>
      </div>
    </header>
  );
}

export default Header;
