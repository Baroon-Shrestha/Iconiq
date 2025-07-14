import React, { useState, useEffect } from "react";
import Cursor from "../HelperComponents/Cursor";
import ProjectCard from "../HelperComponents/ProjectCard";

const projects = [
  {
    image: "/Uploads/hero.jpeg",
    title: "Snapchat",
    subtitle: "Integrating AR to elevate social commerce",
  },
  {
    image: "/Uploads/img1.jpeg",
    title: "Joe & The Juice",
    subtitle: "Host your child's birthday at Joe",
  },
  {
    image: "/Uploads/img2.jpeg",
    title: "Brand X",
    subtitle: "Immersive product experience",
  },
  {
    image: "/Uploads/img3.jpeg",
    title: "Airbnb",
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
      <div className="container mx-auto px-6 py-20">
        <div className="text-4xl text-center mb-16">
          Our <span className="logo">Projects</span>
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
      </div>
    </div>
  );
}
