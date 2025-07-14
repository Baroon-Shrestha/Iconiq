import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AboutHero from "./AboutHero";
import {
  FaUsers,
  FaHeadset,
  FaHandshake,
  FaDollarSign,
} from "react-icons/fa";

export default function AboutMediaContent() {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.0001,
  });

  const scale = useTransform(smoothScroll, [0, 0.5, 1], [0.8, 0.95, 1.1]);
  const width = useTransform(smoothScroll, [0, 0.5, 1], ["80%", "90%", "100%"]); 

  const team = [
    { name: "Roshan", role: "Founder", img: "/Uploads/Roshan.png" },
    { name: "Rajendra", role: "Project Manager", img: "/Uploads/Rajendra.png" },
    { name: "Sara", role: "Web Designer", img: "/Uploads/sara.png" },
    { name: "Barun", role: "Web Designer", img: "/Uploads/Barun.png" },
    { name: "Abiral", role: "Graphics Designer", img: "/Uploads/Abiral.png" },
    { name: "Abhya", role: "Graphics Designer", img: "/Uploads/Abhya.png" },
  ];

  const features = [
    { title: "Experienced Team", description: "Years of industry experience delivering innovative solutions.", icon: <FaUsers />, color: "from-pink-400 to-pink-600" },
    { title: "24/7 Support", description: "Fast and reliable customer support at all times.", icon: <FaHeadset />, color: "from-blue-400 to-blue-600" },
    { title: "Trusted by Clients", description: "We’ve built strong, lasting relationships globally.", icon: <FaHandshake />, color: "from-green-400 to-green-600" },
    { title: "Affordable Pricing", description: "Premium services at prices that fit your budget.", icon: <FaDollarSign />, color: "from-yellow-400 to-yellow-600" },
  ];

  return (
    <>
      {/* Hero & Media */}
      <div className="relative">
        <AboutHero />
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full min-h-screen flex justify-center items-center"
        >
          <motion.div
            ref={ref}
            style={{ scale, width }}
            className="max-w-[100vw] overflow-hidden rounded-3xl shadow-2xl will-change-transform transform-gpu"
          >
            {isMobile ? (
              <img
                src="/Uploads/fallback.jpg"
                alt="Fallback"
                loading="lazy"
                className="w-full h-auto object-cover rounded-3xl"
              />
            ) : (
              <video
                src="/Uploads/video2.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                disablePictureInPicture
                controlsList="nodownload noremoteplayback"
                loading="lazy"
                className="w-full h-auto object-cover rounded-3xl"
              />
            )}
          </motion.div>
        </motion.section>
      </div>

      {/* Mission Section */}
      <motion.section
        className="py-20 bg-white shadow-xl mx-6 md:mx-12 mt-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 px-6">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-pink-500">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              At Iconiq, we empower businesses with cutting-edge technology and creative solutions to drive growth and success.
            </p>
            <ul className="list-disc text-gray-700 ml-6 space-y-2">
              <li><strong>Innovation:</strong> Constantly evolving with trends</li>
              <li><strong>Quality:</strong> Delivering top-notch services</li>
              <li><strong>Growth:</strong> Helping businesses scale</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <motion.img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
              alt="Mission"
              className="shadow-lg object-cover w-full max-w-md rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="py-20 bg-white shadow-xl mx-6 md:mx-12 mt-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 px-6">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-yellow-500">Vision</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              To be a global leader in delivering innovative digital experiences that create lasting impact for businesses worldwide.
            </p>
            <ul className="list-disc text-gray-700 ml-6 space-y-2">
              <li><strong>Sustainability:</strong> Long-term positive impact</li>
              <li><strong>Leadership:</strong> Setting new industry standards</li>
              <li><strong>Excellence:</strong> Striving for perfection in every project</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <motion.img
              src="/Uploads/hero2.jpeg"
              alt="Vision"
              className="shadow-lg object-cover w-full max-w-md rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.section>

      {/* Meet Our Team */}
      <motion.section
        className="py-16 bg-gray-50 rounded-3xl shadow-xl mx-6 md:mx-12 mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Meet Our <span className="text-pink-500">Team</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            A team of passionate innovators, developers, and marketers dedicated to your success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow hover:shadow-2xl transition transform hover:-translate-y-1 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 italic">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-3xl shadow-xl mx-6 md:mx-12 mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why <span className="text-pink-400">Choose Us?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            At Iconiq, we focus on delivering high-quality solutions that empower businesses globally.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg bg-gradient-to-br ${feature.color} hover:scale-105 transform transition`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}