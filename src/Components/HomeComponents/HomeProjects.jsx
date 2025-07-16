import React, { useState, useEffect } from "react";
import Cursor from "../HelperComponents/Cursor";
import ProjectCard from "../HelperComponents/ProjectCard";
import { Link } from "react-router-dom";

const projects = [
  {
    image: "/Uploads/hero.jpeg",
    title: "Momiji International Academy",
    subtitle: "Integrating AR to elevate social commerce",
  },
  {
    image: "/Uploads/img1.jpeg",
    title: "Kansai International Language Center",
    subtitle: "Host your child's birthday at Joe",
  },
  {
    image: "/Uploads/img2.jpeg",
    title: "Nisani",
    subtitle: "Immersive product experience",
  },
  {
    image: "/Uploads/img3.jpeg",
    title: "Kings motors Ltd pvt.",
    subtitle: "Design system modernization",
  },
];

export default function HomeProjects() {
  const [cursorState, setCursorState] = useState({
    isVisible: false,
    position: { x: 0, y: 0 },
    text: "View Project",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorState((prev) => ({
        ...prev,
        position: { x: e.clientX, y: e.clientY },
      }));
    };

    if (cursorState.isVisible) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorState.isVisible]);

  const handleMouseEnter = () => {
    setCursorState((prev) => ({ ...prev, isVisible: true }));
    document.body.style.cursor = "none";
  };

  const handleMouseLeave = () => {
    setCursorState((prev) => ({ ...prev, isVisible: false }));
    document.body.style.cursor = "auto";
  };

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-6 pt-20">
        <div className="flex items-center flex-col justify-center mb-12 gap-4">
          <div className="text-4xl text-center ">
            Our{" "}
            <span className="logo bg-gradient-to-b from-[#C848C1] to-[#54A6F9] text-transparent bg-clip-text">
              Projects
            </span>
          </div>
          <div className="text-center text-base md:text-xl font-extralight max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus
            earum magni. Eligendi enim saepe voluptate consequuntur at repellat
            odio!
          </div>
        </div>
        <Cursor
          isVisible={cursorState.isVisible}
          position={cursorState.position}
          text={cursorState.text}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onHover={handleMouseEnter}
              onLeave={handleMouseLeave}
            />
          ))}
        </div>
        <Link to="/project">
          <div className="mt-16 text-center">
            <button className="text-2xl font-medium text-gray-600 border-b border-gray-300 hover:text-black hover:border-black transition-all duration-300">
              View all Projects →
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
