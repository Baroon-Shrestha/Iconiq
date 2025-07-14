import React from "react";

export default function AboutHero() {
  return (
    <div className="h-[80vh] bg-gradient-to-r from-[#5a0f0f] to-[#1f0000] rounded-3xl shadow-2xl mx-6 md:mx-12 flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-wide">
            About <span className="text-pink-500">Iconiq</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
            At Iconiq, we build cutting-edge solutions for digital marketing,
            software development, and innovative IT services that empower your
            business to grow faster.
          </p>
          <button className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-full text-lg font-medium shadow-lg hover:bg-pink-600 hover:scale-105 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Team working on a digital marketing project"
            className="rounded-3xl shadow-xl w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
