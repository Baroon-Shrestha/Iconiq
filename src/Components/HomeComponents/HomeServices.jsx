import React from "react";
import { Monitor, Palette, Share2, TrendingUp } from "lucide-react"; // or your icon library

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Boost your brand visibility with targeted campaigns and audience engagement.",
    icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Social Media Branding",
    description:
      "Craft a consistent and powerful identity across all digital platforms.",
    icon: <Share2 className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Web Development",
    description:
      "Develop stunning, responsive websites tailored for performance and UX.",
    icon: <Monitor className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Graphic Designing",
    description:
      "Visually communicate your message with impactful and creative graphics.",
    icon: <Palette className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "Web Development",
    description:
      "Develop stunning, responsive websites tailored for performance and UX.",
    icon: <Monitor className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Graphic Designing",
    description:
      "Visually communicate your message with impactful and creative graphics.",
    icon: <Palette className="w-10 h-10 text-pink-500" />,
  },
];

export default function HomeServices() {
  //
  // #54A6F9
  return (
    <section className="w-full h-scren rounded-4xl bg-gradient-to-t from-[#4b0082] to-[#54A6F9] py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-white md:text-5xl font-extrabold mb-12 tracking-tight">
          One Stop Solution for You.
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 hover:-translate-y-1 ease-in-out duration-500">
          <button className="px-6 py-2 text-xl md:text-3xl font-bold bg-white text-[#4b0082] rounded-2xl">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
