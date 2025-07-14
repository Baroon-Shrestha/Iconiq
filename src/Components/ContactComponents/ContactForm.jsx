import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5a0f0f] to-[#1f0000] flex items-center justify-center p-8 rounded-[40px] shadow-2xl">
      <motion.div
        className="max-w-6xl w-full bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "backOut" }}
      >
        {/* Left Section */}
        <motion.div
          className="bg-gradient-to-br from-[#5a0f0f] to-[#1f0000] text-white p-10 md:p-12 flex flex-col justify-between"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "anticipate" }}
        >
          <div className="space-y-6">
            <motion.h2
              className="text-4xl font-bold tracking-tight leading-snug"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "circOut" }}
            >
              Let’s Work Together
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            >
              Fill out the form and our team will reach out to you within 24
              hours.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-pink-400 text-xl"></span>
                <span className="text-base">
                  Sankhamul, Kathmandu, Naya Baneshwor (Iconiq)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-pink-400 text-xl">📧</span>
                <span className="text-base">info@iconiq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-pink-400 text-xl">📞</span>
                <span className="text-base">+977-1-1234567</span>
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-200">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-200">Sat: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-200">Sun: Closed</p>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.7, ease: "backOut" }}
          >
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              {[
                {
                  href: "https://facebook.com",
                  bg: "bg-blue-600",
                  icon: <FaFacebookF />,
                },
                {
                  href: "https://instagram.com",
                  bg: "bg-pink-500",
                  icon: <FaInstagram />,
                },
                {
                  href: "https://linkedin.com",
                  bg: "bg-blue-700",
                  icon: <FaLinkedinIn />,
                },
                {
                  href: "https://twitter.com",
                  bg: "bg-blue-400",
                  icon: <FaTwitter />,
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.bg} text-white p-3 rounded-full transition-transform`}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="p-10 md:p-12 bg-gray-50"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
        >
          {/* Get On Touch Section */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "circOut" }}
          >
            <h2 className="text-4xl font-bold text-[#5a0f0f] mb-4">
              Get On Touch
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We’re always ready to discuss your project and help you achieve
              your business goals. Let’s make something amazing together.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 1, ease: "anticipate" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              className="w-full py-3 rounded-md bg-black text-white text-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Submit
            </motion.button>
          </motion.form>

          {/* Google Map */}
          <motion.div
            className="mt-8 rounded-lg overflow-hidden shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.070157023264!2d85.33520141506262!3d27.700769982795407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190da659c7a9%3A0x7e5a8f2b8c26c0b7!2sSankhamul%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1687181234567!5m2!1sen!2snp"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
