import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const initialCards = [
  {
    title: "Fashion E-Commerce Platform",
    subtitle: "Design • Development • SEO",
    description:
      "We crafted a high-conversion fashion e-commerce site with a custom user experience, seamless checkout, and integrated SEO strategies.",
    image: "/uploads/fashion-ecom-thumb.jpg",
    bgImage: "/uploads/fashion-ecom-bg.jpg",
    color: "from-indigo-600 to-purple-600",
  },
  {
    title: "Social Media Growth Campaign",
    subtitle: "Instagram • Reels • Ads",
    description:
      "Our reels and motion graphics content helped a local brand triple its engagement, gaining over 15K organic followers in 3 months.",
    image: "/uploads/social-growth-thumb.jpg",
    bgImage: "/uploads/social-growth-bg.jpg",
    color: "from-green-600 to-teal-600",
  },
  {
    title: "Brand Identity for Tech Startup",
    subtitle: "Logo • Visuals • Brand Kit",
    description:
      "We delivered a complete branding kit including logo, color palette, and social assets—helping the startup stand out in a crowded market.",
    image: "/uploads/tech-brand-thumb.jpg",
    bgImage: "/uploads/tech-brand-bg.jpg",
    color: "from-orange-600 to-red-600",
  },
  {
    title: "Corporate Motion Graphics",
    subtitle: "Explainer Videos • Voiceover",
    description:
      "We produced polished explainer videos and product animations for enterprise clients, simplifying complex processes through motion design.",
    image: "/uploads/motion-graphics-thumb.jpg",
    bgImage: "/uploads/motion-graphics-bg.jpg",
    color: "from-pink-600 to-rose-600",
  },
];

export default function ProjectsHero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    let progressInterval;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % initialCards.length);
        setProgress(0);
      }, 5000);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 0.5;
        });
      }, 25);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying]);

  const currentCard = initialCards[currentBg];

  const nextSlide = () => {
    setCurrentBg((prev) => (prev + 1) % initialCards.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentBg(
      (prev) => (prev - 1 + initialCards.length) % initialCards.length
    );
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentBg(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-end rounded-3xl text-white overflow-hidden group">
      {/* Background Carousel */}
      {/* Background Carousel with Slide Animation */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: `${initialCards.length * 100}%`,
            transform: `translateX(-${
              currentBg * (100 / initialCards.length)
            }%)`,
          }}
        >
          {initialCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full relative"
              style={{
                backgroundImage: `url('${card.bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-40 rounded-3xl`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl" />
      <div className="container mx-auto relative z-10 px-6 md:px-12 pb-16">
        <div className="max-w-4xl">
          <div
            key={`subtitle-${currentBg}`}
            className="text-xs md:text-sm uppercase tracking-widest mb-3 text-gray-300 animate-fadeInUp"
          >
            {currentCard.subtitle}
          </div>

          <h1
            key={`title-${currentBg}`}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-2xl mb-4 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            {currentCard.title}
          </h1>

          <p
            key={`description-${currentBg}`}
            className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-light animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            {currentCard.description}
          </p>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
