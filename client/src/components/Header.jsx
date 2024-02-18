import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between p-4 text-white text-2xl font-sans md:px-6">
      <div>
        Left Text Test
      </div>

      <div className="ml-auto">
        <Link to="/Home" className="flex items-center text-white">
          Home
        </Link>
        <Link to="/Contact" className="flex items-center text-white">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
