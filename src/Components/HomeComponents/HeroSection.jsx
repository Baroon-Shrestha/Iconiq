import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const resetAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 overflow-hidden rounded-4xl">
      {/* Background elements that spread out */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main service cards/elements */}
        <div
          className={`absolute transition-all duration-2000 ease-out ${
            isAnimating
              ? "transform translate-x-[-250px] md:translate-x-[-400px] translate-y-[-150px] md:translate-y-[-250px] scale-100 opacity-100"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-24 h-32 md:w-32 md:h-48 bg-gradient-to-b from-purple-500 to-purple-700 rounded-2xl shadow-2xl transform rotate-12">
            <div className="p-2 md:p-4 text-white font-bold text-center">
              <div className="text-xs">BRANDING</div>
              <div className="text-lg">🎨</div>
            </div>
          </div>
        </div>

        <div
          className={`absolute transition-all duration-2000 ease-out ${
            isAnimating
              ? "transform translate-x-[280px] md:translate-x-[450px] translate-y-[-100px] md:translate-y-[-150px] scale-100 opacity-100"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-24 h-32 md:w-32 md:h-48 bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl shadow-2xl transform -rotate-12">
            <div className="p-2 md:p-4 text-white font-bold text-center">
              <div className="text-xs">WEB DEV</div>
              <div className="text-lg">💻</div>
            </div>
          </div>
        </div>

        <div
          className={`absolute transition-all duration-2000 ease-out ${
            isAnimating
              ? "transform translate-x-[-220px] md:translate-x-[-350px] translate-y-[180px] md:translate-y-[280px] scale-100 opacity-100"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-20 h-28 md:w-28 md:h-44 bg-gradient-to-b from-teal-500 to-teal-700 rounded-2xl shadow-2xl transform rotate-6">
            <div className="p-2 md:p-3 text-white font-bold text-center">
              <div className="text-xs">GRAPHICS</div>
              <div className="text-lg">🎯</div>
            </div>
          </div>
        </div>

        <div
          className={`absolute transition-all duration-2000 ease-out ${
            isAnimating
              ? "transform translate-x-[240px] md:translate-x-[380px] translate-y-[160px] md:translate-y-[250px] scale-100 opacity-100"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-20 h-20 md:w-30 md:h-30 bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-full shadow-2xl transform -rotate-8">
            <div className="p-2 md:p-3 text-white font-bold text-center flex flex-col items-center justify-center h-full">
              <div className="text-xs">MOTION</div>
              <div className="text-lg">🎬</div>
            </div>
          </div>
        </div>

        <div
          className={`absolute transition-all duration-2000 ease-out ${
            isAnimating
              ? "transform translate-x-[0px] translate-y-[-200px] md:translate-y-[-275px] scale-100 opacity-100"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-20 h-28 md:w-28 md:h-40 bg-gradient-to-b from-pink-500 to-pink-700 rounded-2xl shadow-2xl transform rotate-3">
            <div className="p-2 md:p-3 text-white font-bold text-center">
              <div className="text-xs">MARKETING</div>
              <div className="text-lg">📈</div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div
          className={`absolute transition-all duration-2500 ease-out ${
            isAnimating
              ? "transform translate-x-[-300px] md:translate-x-[-500px] translate-y-[-220px] md:translate-y-[-350px] scale-100 opacity-80"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-300 rounded-full blur-sm"></div>
        </div>

        <div
          className={`absolute transition-all duration-2500 ease-out ${
            isAnimating
              ? "transform translate-x-[320px] md:translate-x-[520px] translate-y-[-200px] md:translate-y-[-320px] scale-100 opacity-60"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full blur-sm"></div>
        </div>

        <div
          className={`absolute transition-all duration-2500 ease-out ${
            isAnimating
              ? "transform translate-x-[-290px] md:translate-x-[-480px] translate-y-[240px] md:translate-y-[380px] scale-100 opacity-70"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-300 rounded-full blur-sm"></div>
        </div>

        <div
          className={`absolute transition-all duration-2500 ease-out ${
            isAnimating
              ? "transform translate-x-[310px] md:translate-x-[500px] translate-y-[230px] md:translate-y-[360px] scale-100 opacity-50"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-300 rounded-full blur-sm"></div>
        </div>

        {/* Additional spread elements */}
        <div
          className={`absolute transition-all duration-2300 ease-out ${
            isAnimating
              ? "transform translate-x-[0px] translate-y-[-250px] md:translate-y-[-400px] scale-100 opacity-60"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-14 h-14 md:w-18 md:h-18 bg-yellow-300 rounded-full blur-sm"></div>
        </div>

        <div
          className={`absolute transition-all duration-2400 ease-out ${
            isAnimating
              ? "transform translate-x-[0px] translate-y-[250px] md:translate-y-[400px] scale-100 opacity-65"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-green-300 rounded-full blur-sm"></div>
        </div>

        <div
          className={`absolute transition-all duration-2600 ease-out ${
            isAnimating
              ? "transform translate-x-[-380px] md:translate-x-[-600px] translate-y-[0px] scale-100 opacity-55"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-16 h-16 md:w-22 md:h-22 bg-red-300 rounded-full blur-sm"></div>
        </div>

        <div
          className={`absolute transition-all duration-2700 ease-out ${
            isAnimating
              ? "transform translate-x-[380px] md:translate-x-[600px] translate-y-[0px] scale-100 opacity-45"
              : "transform translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-300 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Central logo/brand */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-center z-10 transition-all duration-1000 ease-out ${
            isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-150"
          }`}
        >
          <div className="text-4xl md:text-6xl font-bold text-indigo-900 mb-2 logo">
            Iconiq
          </div>
        </div>
      </div> */}

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <div
          className={`transition-all duration-1500 ease-out delay-500 ${
            isAnimating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-indigo-900 mb-4 md:mb-6 leading-tight">
            CREATIVE DIGITAL
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-indigo-900 mb-6 md:mb-8 leading-tight">
            SOLUTIONS
          </h2>
          <div className="bg-indigo-600 text-white px-4 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-2xl font-bold mb-6 md:mb-8 inline-block">
            BRANDING • WEB • GRAPHICS • MOTION
          </div>
          <p className="text-lg md:text-xl text-indigo-800 mb-6 md:mb-8 max-w-2xl">
            Iconiq ideas, real designs. We transform your vision into stunning
            digital experiences that captivate and convert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
