import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between p-4 text-white text-2xl font-sans md:px-6">
      <div>
        Left Text Test
      </div>

      <div className="flex items-center md:space-x-10">
        <Link to="/Home" className="flex items-center text-white">
          Home
        </Link>
        <Link to="/Contact" className="flex items-center text-white">
          Contact Us
        </Link>
        <Link to="/Contact" className="flex items-center text-white">
          Log In
        </Link>
        <Link to="/Contact" className="flex items-center text-white">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
