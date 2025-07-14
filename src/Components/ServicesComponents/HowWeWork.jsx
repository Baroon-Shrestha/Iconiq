import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Discovery & Planning",
    description:
      "We start by understanding your goals, target audience, and project requirements through detailed consultation sessions.",
    icon: "🔍",
  },
  {
    title: "Strategy & Design",
    description:
      "Our team creates a comprehensive strategy and develops initial designs that align with your brand vision.",
    icon: "🎨",
  },
  {
    title: "Development & Build",
    description:
      "We bring your project to life with clean code, responsive design, and optimized performance.",
    icon: "⚡",
  },
  {
    title: "Testing & Refinement",
    description:
      "Rigorous testing ensures everything works perfectly across all devices and platforms.",
    icon: "🔧",
  },
  {
    title: "Launch & Support",
    description:
      "We launch your project and provide ongoing support to ensure continued success and growth.",
    icon: "🚀",
  },
];

export default function HowWeWork() {
  const stepRefs = useRef([]);
  const timelineRef = useRef(null);
  const wrapperRef = useRef(null);

  const [progresses, setProgresses] = useState(new Array(steps.length).fill(0));
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  // Update timeline height dynamically
  useEffect(() => {
    const updateHeight = () => {
      if (!wrapperRef.current) return;
      const totalHeight = wrapperRef.current.scrollHeight;
      setLineHeight(totalHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const newProgresses = stepRefs.current.map((el) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight * 0.3;
        const end = rect.height + start;

        if (rect.top > end) return 0;
        if (rect.bottom < start) return 1;

        const rawProgress = 1 - (rect.top - start) / (end - start);
        return Math.min(Math.max(rawProgress, 0), 1);
      });

      setProgresses(newProgresses);

      const averageProgress =
        newProgresses.reduce((acc, val) => acc + val, 0) / newProgresses.length;
      setTimelineProgress(averageProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-20 bg-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          How We <span className="text-blue-600">Work</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-lg">
          Our streamlined process ensures quality results every time
        </p>
      </div>

      <div ref={wrapperRef} className="relative container mx-auto px-6">
        {/* Timeline with animated progress fill */}
        <div
          ref={timelineRef}
          className="absolute w-1 bg-gray-300 z-0 overflow-hidden left-8 md:left-1/2 md:-translate-x-1/2"
          style={{ height: `${lineHeight}px` }}
        >
          <div
            className="bg-gradient-to-b from-blue-500 to-purple-600 w-full transition-all duration-500 ease-in-out"
            style={{ height: `${timelineProgress * 100}%` }}
          />
        </div>

        {/* Steps */}
        <div className="relative z-10 flex flex-col gap-20">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const progress = progresses[i];
            const isActive = progress >= 0.7;

            return (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className="relative flex w-full items-center"
              >
                {/* Timeline Marker */}
                <div className="absolute top-4 z-10 left-8 md:left-1/2 md:-translate-x-1/2">
                  <div
                    className={`w-12 h-12 rounded-full border-4 bg-white shadow-lg transition-all duration-500 ease-in-out flex items-center justify-center text-2xl ${
                      isActive
                        ? "border-blue-600 scale-110"
                        : progress > 0.3
                        ? "border-purple-400"
                        : "border-gray-300"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <div
                  className={`w-full md:w-5/12 px-4 ${
                    isLeft
                      ? "md:text-right md:pr-16 pl-16 md:pl-4"
                      : "md:text-left md:pl-16 pl-16 md:ml-auto"
                  }`}
                >
                  <div
                    className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-all duration-700 ease-out transform ${
                      progress > 0.3
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-60 translate-y-8 scale-95"
                    } ${isActive ? "shadow-xl border-blue-200" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm ${
                          isLeft ? "md:order-2" : ""
                        }`}
                      >
                        {i + 1}
                      </div>
                      <h3
                        className={`text-xl font-bold transition-colors duration-500 ${
                          isActive ? "text-blue-600" : "text-gray-800"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
          <span>Ready to get started?</span>
          <span>🚀</span>
        </div>
      </div>
    </section>
  );
}
