import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CoreServicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    subtitle: "We strategize content that converts.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas maxime, in sequi fuga labore eaque, rerum maiores ipsa enim iure nulla esse earum officiis aperiam vel doloremque neque. Corrupti quis animi totam tempora commodi at earum laboriosam quam quidem fugiat incidunt reiciendis consectetur pariatur sequi facere libero, ipsum dicta.",
    title2: "What we provide",
    points: ["ads and posts", "reels and videos", "digital contents"],
    image: "Uploads/img1.jpeg",
  },
  {
    id: 2,
    title: "Digital Branding",
    subtitle: "Crafting your visual identity.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas maxime, in sequi fuga labore eaque, rerum maiores ipsa enim iure nulla esse earum officiis aperiam vel doloremque neque. Corrupti quis animi totam tempora commodi at earum laboriosam quam quidem fugiat incidunt reiciendis consectetur pariatur sequi facere libero, ipsum dicta.",
    title2: "What we provide",
    points: ["logo & identity", "brand guidelines", "color systems"],
    image: "Uploads/img1.jpeg",
  },
  {
    id: 3,
    title: "Web Development",
    subtitle: "Building scalable websites.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas maxime, in sequi fuga labore eaque, rerum maiores ipsa enim iure nulla esse earum officiis aperiam vel doloremque neque. Corrupti quis animi totam tempora commodi at earum laboriosam quam quidem fugiat incidunt reiciendis consectetur pariatur sequi facere libero, ipsum dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas maxime, in sequi fuga labore eaque, rerum maiores ipsa enim iure nulla esse earum officiis aperiam vel doloremque neque. Corrupti quis animi totam tempora commodi at earum laboriosam quam quidem fugiat incidunt reiciendis consectetur pariatur sequi facere libero, ipsum dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas maxime, in sequi fuga labore eaque, rerum maiores ipsa enim iure nulla esse earum officiis aperiam vel doloremque neque. Corrupti quis animi totam tempora commodi at earum laboriosam quam quidem fugiat incidunt reiciendis consectetur pariatur sequi facere libero, ipsum dicta.",
    title2: "What we provide",
    points: ["responsive websites", "eCommerce platforms", "CMS integrations"],
    image: "Uploads/img1.jpeg",
  },
  {
    id: 4,
    title: "Video Production",
    subtitle: "Short-form video that sells.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas maxime, in sequi fuga labore eaque, rerum maiores ipsa enim iure nulla esse earum officiis aperiam vel doloremque neque. Corrupti quis animi totam tempora commodi at earum laboriosam quam quidem fugiat incidunt reiciendis consectetur pariatur sequi facere libero, ipsum dicta.",
    title2: "What we provide",
    points: ["reels editing", "motion graphics", "sound design"],
    image: "Uploads/img1.jpeg",
  },
];

export default function CoreServices() {
  const wrapperRefs = useRef([]);

  useEffect(() => {
    wrapperRefs.current.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        pin: el.querySelector(".left-side"),
        pinSpacing: false,
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <div className="container mx-auto py-12 ">
        <div className="text-2xl md:text-4xl text-center">
          Our <span className="logo">Core </span>Services{" "}
        </div>
        <section className=" px-4 py-16 space-y-[20vh]">
          {CoreServicesData.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
              ref={(el) => (wrapperRefs.current[index] = el)}
            >
              {/* Left (pinned per section) */}
              <div className="left-side relative">
                <div className="sticky top-[15%] space-y-4 flex flex-col items-center">
                  <h2 className="text-3xl md:text-5xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-xl text-left text-gray-500 font-extralight">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Right (scrollable content) */}
              <div className="space-y-6 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-xl object-cover"
                />
                <p className="text-gray-700 text-lg">{item.description}</p>
                <div>
                  <h4 className="text-xl font-semibold underline mb-2">
                    <b>{item.title2}</b>
                  </h4>
                  <ul className="list-disc pl-5 text-lg space-y-1 text-gray-800">
                    {item.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
