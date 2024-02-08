import { useEffect } from "react";
import { useState } from "react";
import kiss from "../assets/kiss.jpg";
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from 'react-icons/fa6';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/About" },
    { link: "Product", path: "/Products" },
    { link: "Testimonial", path: "/Testimonial" },
    { link: "Contact", path: "/Contact" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 border-b bg-white" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-3xl font-semibold flex items-center space-x-3"
          >
            <img
              src={kiss}
              alt="logo"
              className="w-16 inline-block items-center"
            />
            <span className="text-[#263238]">Fisatex</span>
          </a>
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offsed={-100}
                key={path}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-meduim"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="hidden space-x-12 lg:flex items-center">
            <a
              href=""
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button
              className="bg-brandPrimary text-white py-2 px-4 transition-all 
                                duration-300 rounded hover:bg-neutralGray"
            >
              Sign Up
            </button>
          </div>
          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDGay focus:outline-none focus:text-gray-500">
                {isMenuOpen ? (<FaXmark className='h6 w-6'/>):(<FaBars className='h-6 w-6'/>)}
            </button>
          </div>
          
        </div>
            {/* nav items for mobile devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 md:hidden bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0": "hidden"}`}>
        {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offsed={-100}
                key={path}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-meduim"
              >
                {link}
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
