import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialCards = [
  {
    title: "Multo",
    subtitle: "Cup of Joe",
    description:
      "Discover the perfect blend of artistry and flavor. Each cup tells a story, crafted with passion and served with love.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop",
  },
  {
    title: "Dulo",
    subtitle: "Cup of Joe",
    description:
      "Experience the essence of premium coffee culture with our carefully curated selection of the finest beans.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop",
  },
  {
    title: "Tingin",
    subtitle: "Cup of Joe",
    description:
      "Immerse yourself in the rich aroma and bold flavors that define our signature coffee experience.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop",
  },
  {
    title: "Tatlong Buwan",
    subtitle: "Cup of Joe",
    description:
      "Savor the moment with every sip, where tradition meets innovation in perfect harmony.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop",
  },
];

export default function AboutHero() {
  const [cards, setCards] = useState(initialCards);
  const [currentBg, setCurrentBg] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCards((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setCurrentBg((prev) => (prev + 1) % initialCards.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = initialCards[currentBg];

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-end rounded-4xl text-white overflow-hidden">
      {/* Background Carousel with Enhanced Fade */}
      {/* Background Carousel with Enhanced Slide */}
      <div className="absolute inset-0 overflow-hidden rounded-4xl">
        <motion.div
          className="flex h-full"
          style={{
            width: `${initialCards.length * 100}%`,
          }}
          animate={{
            x: `-${currentBg * (100 / initialCards.length)}%`,
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          {initialCards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${card.bgImage}')`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent rounded-4xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-4xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40 rounded-4xl" />

      {/* Content Container */}
      <div className="container mx-auto pb-16 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-12">
          {/* Text Content with Enhanced Fade */}
          <div className="col-span-3 pl-4">
            {/* Animated Title */}
            <AnimatePresence mode="wait">
              <motion.h1 className="text-3xl md:text-6xl font-bold logo mb-4 drop-shadow-lg">
                About Iconiq
              </motion.h1>
            </AnimatePresence>

            {/* Animated Description */}
            <AnimatePresence mode="wait">
              <motion.p className="text-lg font-extralight mt-4 max-w-2xl leading-relaxed text-white/90 drop-shadow-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, porro nemo! Veritatis velit voluptatum ab
                distinctio, odio odit soluta natus.
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
