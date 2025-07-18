import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock avatar data - replace with actual images
const avatarData = [
  {
    id: 1,
    src: "Uploads/branding.jpg",
  },
  {
    id: 2,
    src: "Uploads/digi.png",
  },
  {
    id: 3,
    src: "Uploads/illustrator.png",
  },
  {
    id: 4,
    src: "Uploads/pr.png",
  },
  {
    id: 5,
    src: "Uploads/ps.png",
  },
  {
    id: 6,
    src: "Uploads/react.png",
  },
  {
    id: 7,
    src: "Uploads/web.png",
  },
];

// Carousel images
const carouselImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
];

export default function HeroSection3() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Carousel auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const circleRadius = 200; // Increased from 130
  const totalAvatars = avatarData.length;

  return (
    <div className="min-h-[60vh] md:min-h-[80vh] relative overflow-hidden rounded-4xl">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{
            width: `${carouselImages.length * 100}%`,
          }}
          animate={{
            x: `-${currentImageIndex * (100 / carouselImages.length)}%`,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {carouselImages.map((src, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 h-full relative"
              style={{ width: `${100 / carouselImages.length}%` }}
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70"></div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 pt-[14rem] relative z-10 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left Content */}
          <div className="flex items-start gap-y-2 flex-col max-w-2xl">
            <motion.p
              className="text-xl max-w-xl leading-relaxed text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Iconiq ideas. Real Results
            </motion.p>
            <motion.h1
              className="text-4xl md:text-7xl font-bold leading-tight capitalize text-white logo"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Iconiq
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"></span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl max-w-xl leading-relaxed text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quis expedita minus beatae accusantium quia tenetur illo fugit nam
              natus.
            </motion.p>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-6 py-3 bg-white text-purple-600 font-extrabold rounded-lg transition-all hover:scale-105 duration-300">
                Get Started
              </button>
            </motion.div>
          </div>

          {/* Right Content - Orbital Avatars */}
          <div className="flex-1 relative h-full hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Central Logo */}
              <motion.div
                className="w-20 h-20 border-2 border-white rounded-full overflow-hidden relative z-20 bg-white flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${
                    mousePosition.y * 10
                  }px)`,
                }}
              >
                <div className="text-2xl font-bold text-purple-600">
                  <img src="Uploads/logo_iconiq_final.png" alt="" />
                </div>
              </motion.div>

              {/* Orbital Container */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: circleRadius * 2,
                  height: circleRadius * 2,
                }}
              >
                {/* Orbital Path Visualization */}
                <div
                  className="absolute border border-white/20 rounded-full"
                  style={{
                    width: circleRadius * 2,
                    height: circleRadius * 2,
                    top: 0,
                    left: 0,
                  }}
                />

                {/* Orbiting Avatars */}
                <AnimatePresence>
                  {avatarData.map((avatar, index) => {
                    const angle = (index * 360) / totalAvatars;
                    const radian = (angle * Math.PI) / 180;
                    const x = Math.cos(radian) * circleRadius;
                    const y = Math.sin(radian) * circleRadius;

                    return (
                      <motion.div
                        key={avatar.id}
                        className="absolute rounded-full overflow-hidden cursor-pointer border-2 border-white/20 hover:border-purple-400 transition-all duration-300"
                        style={{
                          width: "90px",
                          height: "90px",
                          left: x + circleRadius - 45,
                          top: y + circleRadius - 45,
                          transform: `translate(${
                            mousePosition.x * (index + 1) * 2
                          }px, ${mousePosition.y * (index + 1) * 2}px)`,
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 1 + index * 0.1,
                        }}
                        whileHover={{
                          scale: 1.2,
                          zIndex: 30,
                          boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                        }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                      >
                        {/* Counter-rotate the image to keep it upright */}
                        <motion.div
                          className="w-full h-full"
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <img
                            src={avatar.src}
                            alt={`Avatar ${avatar.id}`}
                            className="w-full h-full object-cover bg-white"
                          />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>

              {/* Orbital Path Circle */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  width: "460px",
                  height: "460px",
                  left: "-230px",
                  top: "-230px",
                }}
              >
                <motion.circle
                  cx="230"
                  cy="230"
                  r={circleRadius}
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  strokeDasharray="2,4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
