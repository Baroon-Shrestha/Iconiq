import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
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

  return (
    <>
      {/* Backdrop overlay with blur effect */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Desktop Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        } ${
          hasScrolled
            ? "bg-white backdro-blur-md shadow-lg border-b border-gray-200/20"
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
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/">
                <div className="hover:text-red-600 cursor-pointer transition-colors">
                  Home
                </div>
              </Link>
              <Link to="/about">
                <div className="hover:text-red-600 cursor-pointer transition-colors">
                  About Us
                </div>
              </Link>
              <Link to="/project">
                <div className="hover:text-red-600 cursor-pointer transition-colors">
                  Work
                </div>
              </Link>
              <Link to="/services">
                <div className="hover:text-red-600 cursor-pointer transition-colors">
                  Services
                </div>
              </Link>
            </div>

            {/* Desktop Contact Button */}
            <Link to="/contact">
              <div className="hidden lg:block px-6 py-2 bg-black text-white rounded-3xl logo hover:bg-gray-800 cursor-pointer transition-colors">
                Contact
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md hover:bg-red-200 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
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

          {/* Sidebar Navigation */}
          <div className="flex-1 flex flex-col py-8">
            <nav className="flex flex-col space-y-1 px-6">
              <Link to="/">
                <div
                  className="px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors text-lg font-medium"
                  onClick={closeSidebar}
                >
                  Home
                </div>
              </Link>
              <Link to="/about">
                <div
                  className="px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors text-lg font-medium"
                  onClick={closeSidebar}
                >
                  About Us
                </div>
              </Link>
              <Link to="/project">
                <div
                  className="px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors text-lg font-medium"
                  onClick={closeSidebar}
                >
                  Work
                </div>
              </Link>
              <Link to="/services">
                <div
                  className="px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors text-lg font-medium"
                  onClick={closeSidebar}
                >
                  Services
                </div>
              </Link>
            </nav>

            {/* Mobile Contact Button */}
            <div className="px-6 mt-8">
              <Link to="/contact">
                <button
                  onClick={closeSidebar}
                  className="w-full px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors text-lg font-medium"
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
