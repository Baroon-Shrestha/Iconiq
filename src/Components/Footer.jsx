import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold text-white">Let's Talk</h2>
          <a
            href="mailto:info@iconiq.com"
            className="block text-lg text-gray-300 hover:text-yellow-400 transition-colors duration-300"
          >
            info@iconiq.com
          </a>
          <p className="text-lg text-gray-300">+977 981-2345678</p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-1">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link, idx) => (
                  <li key={idx}>
                    <li
                      href={`/${link.toLowerCase()}`}
                      className="hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link}
                    </li>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-1">
              {["Careers", "Blog", "Support"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Our Office</h3>
          <div className="text-sm text-gray-400">
            <p className="font-semibold text-gray-200">
              Sankhamul, Naya Baneshwor
            </p>
            <p>Kathmandu, Nepal</p>
            <p>Phone: +977 980-1122334</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-5 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Iconiq. All rights reserved.</p>
        <div className="flex justify-center space-x-5 mt-3">
          {["facebook-f", "instagram", "linkedin-in", "twitter", "behance"].map(
            (icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                <i className={`fab fa-${icon} text-xl`}></i>
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
