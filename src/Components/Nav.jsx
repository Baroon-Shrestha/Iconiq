import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Check if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user has scrolled from top
      setHasScrolled(currentScrollY > 10);

      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true);
      } else {
        // Scrolling down - hide navbar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/project", label: "Work" },
    { path: "/services", label: "Services" },
    { path: "/pricing", label: "Pricing" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        } ${
          hasScrolled
            ? "bg-white backdrop-blur-md shadow-lg border-b border-gray-200/20"
            : ""
        }`}
      >
        <div className="container mx-auto bg-white/80 backdrop-blur-md rounded-4xl">
          <div className="flex items-center justify-between lg:justify-around py-4 px-6 lg:px-0">
            {/* Logo */}
            <Link to="/">
              <div className="logo text-4xl">
                <p className="">IconiQ</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <div
                    className={`relative cursor-pointer transition-colors duration-300 text-lg font-medium group ${
                      isActiveLink(item.path)
                        ? "bg-gradient-to-l from-[#C848C1] to-[#54A6F9] text-transparent bg-clip-text"
                        : "text-gray-700 hover:bg-gradient-to-l hover:from-[#C848C1] to-[#54A6F9] hover:text-transparent bg-clip-text"
                    }`}
                  >
                    {item.label}
                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-l from-[#C848C1] to-[#54A6F9] transition-all duration-300 ease-out ${
                        isActiveLink(item.path)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <Link to="/contact">
              <div
                className={`hidden lg:block px-7 py-3 rounded-3xl logo transition-all duration-300 text-lg font-medium ${
                  isActiveLink("/contact")
                    ? "bg-gradient-to-l from-[#C848C1] to-[#54A6F9] text-white"
                    : "bg-gradient-to-r from-[#C848C1] to-[#54A6F9] text-white "
                }`}
              >
                Contact
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md hover:bg-red-200 transition-colors z-60 relative"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 bg-white transform transition-all duration-500 ease-in-out z-40 lg:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link to="/">
              <div className="logo text-3xl">
                <p className="">IconiQ</p>
              </div>
            </Link>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation - Main Content */}
          <div className="flex-1 flex flex-col justify-center">
            <nav className="flex flex-col space-y-6 px-8">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <div
                    className={`text-center py-6 rounded-lg cursor-pointer transition-all duration-300 text-2xl font-medium border-b border-gray-100 relative group ${
                      isActiveLink(item.path)
                        ? "bg-red-50 bg-gradient-to-l from-[#C848C1] to-[#54A6F9] text-transparent bg-clip-text"
                        : "hover:bg-gradient-to-l hover:from-[#C848C1] hoverto-[#54A6F9] hover:text-white"
                    }`}
                    onClick={closeSidebar}
                  >
                    {item.label}
                    {/* Mobile animated underline */}
                    <span
                      className={`absolute left-1/2 bottom-4 h-0.5 bg-red-100 transition-all duration-300 ease-out transform -translate-x-1/2 ${
                        isActiveLink(item.path)
                          ? "w-16"
                          : "w-0 group-hover:w-16"
                      }`}
                    ></span>
                  </div>
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Button */}
            <div className="px-8 mt-12">
              <Link to="/contact">
                <button
                  onClick={closeSidebar}
                  className={`w-full px-8 py-4 rounded-2xl transition-all duration-300 text-xl font-medium ${
                    isActiveLink("/contact")
                      ? "bg-red-600 text-white"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors text-base"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors text-base"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors text-base"
                >
                  Support
                </a>
              </div>
              <div className="text-sm text-gray-500">
                © 2024 IconiQ. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
