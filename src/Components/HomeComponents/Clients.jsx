import React, { useState } from "react";

const clientsData = [
  {
    id: 1,
    title: "Momiji",
    description: "Japanese language training center",
    image: "Uploads/img1.jpeg",
  },
  {
    id: 2,
    title: "Kansai",
    description: "Leading automotive manufacturing solutions",
  },
  {
    id: 3,
    title: "Nisani",
    description: "Innovative automotive technology company",
  },
  {
    id: 4,
    title: "Kings Motors",
    description: "Luxury vehicle dealership and services",
  },
  {
    id: 5,
    title: "NS Motors",
    description: "Multi-brand automotive dealership",
  },
  {
    id: 6,
    title: "Iconiq",
    description: "Creative automotive design specialists",
  },
  {
    id: 7,
    title: "Omni",
    description: "Comprehensive automotive logistics solutions",
  },
  {
    id: 8,
    title: "Vision Nepal",
    description: "Automotive industry consulting services",
  },
];

export default function Clients() {
  const [hoveredClient, setHoveredClient] = useState(null);

  return (
    <section className=" py-20 my-2 min-h-[60vh] ">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Our{" "}
          <span className="bg-gradient-to-b from-[#C848C1] to-[#54A6F9] text-transparent bg-clip-text logo">
            Clients
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center text-gray-400">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className={`text-lg md:text-3xl  font-medium relative cursor-pointer transition-all duration-300 ${
                hoveredClient === null
                  ? "opacity-100"
                  : hoveredClient === client.id
                  ? "opacity-100 bg-gradient-to-b from-[#C848C1] to-[#54A6F9] text-transparent bg-clip-text"
                  : "opacity-30"
              }`}
              onMouseEnter={() => setHoveredClient(client.id)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              <div className="logo">{client.title}</div>

              {/* TOOLTIP - TILTED TO RIGHT */}
              {hoveredClient === client.id && (
                <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/4 mb-3 w-64 bg-gray-900 text-white text-sm rounded-lg p-4 shadow-xl animate-fadeIn">
                  <div className="text-center font-normal">
                    <div className="rounded-lg">
                      <img src={client.image} alt="" className="rounded-lg" />
                    </div>
                    <div>{client.description}</div>
                  </div>

                  {/* TOOLTIP ARROW - POSITIONED TO ALIGN WITH TILTED TOOLTIP */}
                  <div className="absolute top-full left-1/4 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
