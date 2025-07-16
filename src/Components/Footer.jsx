import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#C848C1] to-[#54A6F9] text-white mt-16 rounded-4xl">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div className="space-y-4 lg:col-span-1">
          <h2 className="text-3xl font-extrabold text-white">Let's Talk</h2>
          <a
            href="mailto:info@iconiq.com"
            className="block text-lg  hover:text-yellow-400 transition-colors duration-300"
          >
            info@iconiq.com
          </a>
          <p className="text-lg ">+977 981-2345678</p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6 lg:col-span-2">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-1">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href={`/${link.toLowerCase()}`}
                      className="hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
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
        <div className="space-y-4 lg:col-span-1">
          <h3 className="text-lg font-semibold text-white">Our Office</h3>
          <div className="text-sm">
            <p className="font-semibold">Sankhamul, Naya Baneshwor</p>
            <p>Kathmandu, Nepal</p>
            <p>Phone: +977 980-1122334</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-30 py-5 text-center text-sm">
        <p>© {new Date().getFullYear()} Iconiq. All rights reserved.</p>
        <div className="flex justify-center space-x-5 mt-3">
          {["facebook-f", "instagram", "linkedin-in", "twitter", "behance"].map(
            (icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
                aria-label={`Follow us on ${icon}`}
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
