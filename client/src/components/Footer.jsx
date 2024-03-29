import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white text-2xl font-sans flex justify-between items-center p-4 py-5 w-full">
      <div className="text-[#02353C]">
        Live Demo Change
      </div>
      
      <div className="text-[#02353C]">
        <Link to="/Contact" className="flex items-center">
          Contact Us
        </Link>
      </div>
    </footer>
  );
}

export default Footer;