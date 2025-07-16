import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projectsData = [
  {
    image: "Uploads/snap.jpeg",
    title: "Snapchat",
    subtitle: "Integrating AR to elevate social commerce",
    description:
      "A revolutionary approach to social commerce that leverages augmented reality to create immersive shopping experiences. This project explores how AR filters and interactive elements can transform the way users discover and purchase products through social media platforms.",
    tags: ["AR/VR", "Social Commerce", "Mobile App", "React Native"],
    year: "2024",
    client: "Snapchat Inc.",
  },
  {
    image: "Uploads/cover1.jpeg",
    title: "Joe & The Juice",
    subtitle: "Host your child's birthday at Joe",
    description:
      "A comprehensive digital experience designed to make birthday party planning effortless for parents. The platform integrates booking systems, customizable party packages, and real-time coordination tools to create memorable celebrations.",
    tags: ["UX/UI Design", "Booking System", "Family App", "React"],
    year: "2024",
    client: "Joe & The Juice",
  },
  {
    image: "Uploads/cover2.jpeg",
    title: "Brand X",
    subtitle: "Immersive product experience",
    description:
      "An innovative e-commerce platform that reimagines online shopping through immersive 3D product visualization, virtual try-on features, and AI-powered recommendations to create a premium digital retail experience.",
    tags: ["3D Visualization", "E-commerce", "AI/ML", "Three.js"],
    year: "2023",
    client: "Brand X Corp",
  },
  {
    image: "Uploads/cover1.jpeg",
    title: "Momiji International Academy",
    subtitle: "Japanese Educational Consultancy",
    description:
      "An innovative e-commerce platform that reimagines online shopping through immersive 3D product visualization, virtual try-on features, and AI-powered recommendations to create a premium digital retail experience.",
    tags: ["Educational", "Digital Platform"],
    year: "2025",
    client: "Momiji",
  },
  {
    image: "Uploads/cover3.jpeg",
    title: "Airbnb",
    subtitle: "Design system modernization",
    description:
      "A comprehensive overhaul of Airbnb's design system, focusing on accessibility, scalability, and consistency across all platforms. The project involved creating new component libraries, design tokens, and documentation.",
    tags: ["Design Systems", "Accessibility", "Component Library", "Figma"],
    year: "2023",
    client: "Airbnb",
  },
];

function Cursor({ isVisible, position, text }) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-40 bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      {text}
    </motion.div>
  );
}

function ProjectCard({ project, index, onHover, onLeave, onClick }) {
  const isRight = index % 2 !== 0;

  return (
    <motion.div
      className={`group relative flex flex-col ${isRight ? "md:mt-[20%]" : ""}`}
      layoutId={`card-container-${index}`}
    >
      <motion.div
        className="relative overflow-hidden shadow-md cursor-none rounded-lg"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
        layoutId={`card-image-${index}`}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          layoutId={`image-${index}`}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
      </motion.div>
      <div className="mt-4">
        <motion.h3
          className="text-xl font-semibold text-gray-900"
          layoutId={`title-${index}`}
        >
          {project.title}
        </motion.h3>
        <motion.p className="text-gray-500 mt-1" layoutId={`subtitle-${index}`}>
          {project.subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function AllProjects() {
  const [cursorState, setCursorState] = useState({
    isVisible: false,
    position: { x: 0, y: 0 },
    text: "View Project",
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    setSelectedIndex(index);
    document.body.style.cursor = "auto";
    setCursorState((prev) => ({ ...prev, isVisible: false }));
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setSelectedIndex(null);
  };

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen relative">
      <div className="text-4xl text-center mb-16 text-gray-900">
        Our{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
          Projects
        </span>
      </div>

      <Cursor
        isVisible={cursorState.isVisible}
        position={cursorState.position}
        text={cursorState.text}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            onHover={handleMouseEnter}
            onLeave={handleMouseLeave}
            onClick={() => handleProjectClick(project, index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <motion.button
              className="fixed top-8 right-8 z-60 text-white hover:text-gray-300 transition-colors"
              onClick={handleCloseModal}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
            >
              <X size={32} />
            </motion.button>

            <div className="min-h-screen flex flex-col">
              {/* Hero Section */}
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-6xl w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                      className="relative overflow-hidden rounded-2xl"
                      layoutId={`card-image-${selectedIndex}`}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <motion.img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-[400px] lg:h-[500px] object-cover"
                        layoutId={`image-${selectedIndex}`}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="text-white space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <span>{selectedProject.year}</span>
                          <span>•</span>
                          <span>{selectedProject.client}</span>
                        </div>

                        <motion.h1
                          className="text-4xl lg:text-5xl font-bold mb-4"
                          layoutId={`title-${selectedIndex}`}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          {selectedProject.title}
                        </motion.h1>

                        <motion.p
                          className="text-xl text-gray-300 mb-6"
                          layoutId={`subtitle-${selectedIndex}`}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          {selectedProject.subtitle}
                        </motion.p>
                      </motion.div>

                      <motion.p
                        className="text-lg text-gray-200 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        {selectedProject.description}
                      </motion.p>

                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                      >
                        {selectedProject.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      <motion.div
                        className="pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                      >
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                          View Case Study
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details Section */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                      <p className="text-gray-300">
                        Creating an innovative solution that pushes the
                        boundaries of user experience while maintaining
                        accessibility and performance standards.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Solution</h3>
                      <p className="text-gray-300">
                        Implemented cutting-edge technologies and design
                        principles to deliver a seamless, intuitive experience
                        that exceeds user expectations.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Result</h3>
                      <p className="text-gray-300">
                        Achieved significant improvements in user engagement,
                        conversion rates, and overall satisfaction while setting
                        new industry standards.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
