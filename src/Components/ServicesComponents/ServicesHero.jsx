import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const initialCards = [
  {
    title: "Web Design",
    subtitle: "1000+ Global Clients",
    description:
      "Creating stunning websites for businesses worldwide. Responsive, SEO-optimized, and built to impress.",
    image:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1920&q=80",
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "Digital Marketing",
    subtitle: "Grow Your Business",
    description:
      "Our team crafts digital campaigns that convert visitors into loyal customers across all platforms.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=80",
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "App Development",
    subtitle: "Mobile-First Solutions",
    description:
      "From concept to launch, we deliver high-performance apps tailored to your unique business needs.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1920&q=80",
    color: "from-orange-600 to-red-600",
  },
  {
    title: "Branding & Identity",
    subtitle: "Stand Out Online",
    description:
      "We help brands create memorable identities with logos, color palettes, and complete branding kits.",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1920&q=80",
    color: "from-pink-600 to-rose-600",
  },
];

export default function ServicesHero() {
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
      <div className="absolute inset-0">
        {initialCards.map((card, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentBg
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
              style={{
                backgroundImage: `url('${card.bgImage}')`,
              }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-40 rounded-3xl`}
            />
          </div>
        ))}
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl" />

      {/* Navigation Controls */}
      {/* <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
        >
          <ChevronRight size={16} />
        </button>
      </div> */}

      {/* Progress Indicators */}
      {/* <div className="absolute top-6 left-6 z-20 flex gap-2">
        {initialCards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-1 rounded-full transition-all duration-300 ${
              index === currentBg
                ? "w-12 bg-white"
                : "w-6 bg-white/40 hover:bg-white/60"
            }`}
          >
            {index === currentBg && isPlaying && (
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div> */}

      {/* Card Preview Thumbnails */}
      <div className="absolute bottom-20 right-6 z-20 hidden lg:flex flex-col gap-2">
        {initialCards.map((card, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentBg
                ? "ring-2 ring-white scale-110"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </button>
        ))}
      </div>

      {/* Hero Content */}
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
