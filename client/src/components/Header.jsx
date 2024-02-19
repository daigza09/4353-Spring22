import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between p-4 text-white text-2xl font-sans md:px-6">
      <div>
        Group 6 
      </div>

      <div className="flex items-center md:space-x-10">
        <Link to="/Home" className="flex items-center text-white">
          Home
        </Link>
        <Link to="/LogIn" className="flex items-center text-white">
          Log In
        </Link>
        <Link to="/Signup" className="flex items-center text-white">
          Sign Up
        </Link>
        <Link to="/FormFQ" className="flex items-center text-white">
          Fuel Quote Form
        </Link>
      </div>
    </header>
  );
}

export default Header;
