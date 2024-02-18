import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white text-2xl font-sans flex justify-between p-4 p-4 py-10 fixed bottom-0">
      <div className="text-[#02353C]">
        <Link to="/Contact" className="flex items-center">
          Contact Us
        </Link>
      </div>
    </footer>
  )
}

export default Footer;
