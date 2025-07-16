import React from "react";
import { motion } from "framer-motion";

export default function MissionVisionSections() {
  return (
    <div className="space-y-20">
      {/* Mission Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-white to-gray-50 shadow-2xl my-12 mx-6 md:mx-12 rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-8">
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Mission"
                className="relative shadow-2xl object-cover w-full max-w-md rounded-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our{" "}
              <span className="text-pink-500 relative">
                Mission
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Iconiq, we empower businesses with cutting-edge technology and
              creative solutions to drive growth and success.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Innovation",
                  desc: "Constantly evolving with trends",
                },
                { title: "Quality", desc: "Delivering top-notch services" },
                { title: "Growth", desc: "Helping businesses scale" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm"
                >
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-800">
                      {item.title}:
                    </span>
                    <span className="text-gray-600 ml-2">{item.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-gray-50 to-white shadow-2xl mx-6 md:mx-12 rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 px-8">
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-teal-200 rounded-3xl blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                alt="Vision"
                className="relative shadow-2xl object-cover w-full max-w-md rounded-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our{" "}
              <span className="text-blue-500 relative">
                Vision
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              To become the global leader in digital transformation, creating
              innovative solutions that shape the future of business.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Global Impact",
                  desc: "Transforming industries worldwide",
                },
                {
                  title: "Future-Ready",
                  desc: "Building tomorrow's solutions today",
                },
                {
                  title: "Excellence",
                  desc: "Setting new standards in technology",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-800">
                      {item.title}:
                    </span>
                    <span className="text-gray-600 ml-2">{item.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
