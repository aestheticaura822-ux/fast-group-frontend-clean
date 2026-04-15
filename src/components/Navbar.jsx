import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", path: "/services" },
    { name: "Sectors", path: "/sectors" },
    { name: "Contact", path: "/contact" },
    { name: "Opportunities", path: "/opportunities" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-visible ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center min-h-[70px] md:min-h-[80px]">
            
            {/* Logo Section - Navbar se bahar nikalne ke liye */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer group relative z-10"
                style={{ marginTop: "-150px", marginBottom: "-150px" }}  // ← Sirf ye line add karo

            >
              <div className="relative">
                <img
  src={logo}
  alt="Fast Group Logo"
  style={{
    height: "120px",        // ← Ye value badhao
    width: "auto",
    objectFit: "contain",
    transition: "transform 0.3s"
  }}
/>
              </div>
              <div className="hidden sm:block">
                <span className="text-base md:text-lg font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent whitespace-nowrap">
                  Fast Group
                </span>
                <p className="text-[8px] md:text-[9px] text-gray-500 -mt-1 whitespace-nowrap">
                  Innovation & Excellence
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-6 xl:gap-8 items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full ${
                      location.pathname === item.path
                        ? "text-red-600 after:w-full"
                        : "text-gray-700 hover:text-red-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button */}
            <Link to="/contact">
              <button className="hidden lg:block bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 rounded-full font-semibold text-sm hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                Get In Touch
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <div
              className="lg:hidden text-2xl cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes className="text-red-600" /> : <FaBars />}
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 mt-3 pb-3" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block font-semibold py-2 px-3 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-red-50 text-red-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={handleNavClick}>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer - Navbar ki height ke according adjust */}
      <div className="h-[50px] md:h-[80px]"></div>
    </>
  );
}

export default Navbar;