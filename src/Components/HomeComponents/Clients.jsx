import React from "react";

const clientsData = [
  { id: 1, title: "Momiji" },
  { id: 2, title: "Kansai" },
  { id: 3, title: "Nisani" },
  { id: 4, title: "Kings Motors" },
  { id: 5, title: "NS Motors" },
  { id: 6, title: "Iconiq" },
  { id: 7, title: "Omni" },
  { id: 8, title: "Vision Nepal" },
];

export default function Clients() {
  return (
    <section className="bg-white pb-20">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Our <span className="text-gray-600 logo">Clients</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center text-gray-400">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="text-lg md:text-3xl logo font-medium"
            >
              {client.title}
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16">
          <button className="text-2xl font-medium text-gray-600 border-b border-gray-300 hover:text-black hover:border-black transition-all duration-300">
            View all clients →
          </button>
        </div>
      </div>
    </section>
  );
}
