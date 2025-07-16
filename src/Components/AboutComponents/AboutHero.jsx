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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0],
            scale: { duration: 1.2 },
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-4xl"
          style={{
            backgroundImage: `url('${currentCard.bgImage}')`,
          }}
        />
      </AnimatePresence>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent rounded-4xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-4xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40 rounded-4xl" />

      {/* Content Container */}
      <div className="container mx-auto pb-16 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-12">
          {/* Text Content with Enhanced Fade */}
          <div className="col-span-3 pl-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-3 inline-block bg-white/90 backdrop-blur-sm text-black text-xs px-4 py-2 rounded-full font-medium shadow-lg"
            >
              Welcome
            </motion.div>

            {/* Animated Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                // key={currentCard.title}
                // initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                // animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                // exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                // transition={{
                //   duration: 0.6,
                //   ease: [0.25, 0.1, 0.25, 1.0],
                //   filter: { duration: 0.4 },
                // }}
                className="text-6xl font-bold logo mb-4 drop-shadow-lg"
              >
                About Iconiq
              </motion.h1>
            </AnimatePresence>

            {/* Animated Description */}
            <AnimatePresence mode="wait">
              <motion.p
                // key={currentCard.description}
                // initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                // animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                // exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                // transition={{
                //   duration: 0.7,
                //   delay: 0.1,
                //   ease: [0.25, 0.1, 0.25, 1.0],
                //   filter: { duration: 0.3 },
                // }}
                className="text-sm font-light mt-4 max-w-md leading-relaxed text-white/90 drop-shadow-sm"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, porro nemo! Veritatis velit voluptatum ab
                distinctio, odio odit soluta natus.
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Enhanced Card Stack with Smoother Transitions */}
          <div className="relative hidden md:block h-[280px] w-full overflow-hidden">
            <AnimatePresence initial={false}>
              {cards.slice(0, 4).map((card, index) => (
                <motion.div
                  key={card.title + index}
                  initial={{
                    x: 250,
                    opacity: 0,
                    scale: 0.8,
                    rotateY: -20,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    x: index * 35,
                    opacity: 1 - index * 0.12,
                    scale: 1 - index * 0.06,
                    rotateY: index * -4,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    x: -250,
                    opacity: 0,
                    scale: 0.7,
                    rotateY: 20,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.25, 0.1, 0.25, 1.0],
                    delay: index * 0.05,
                    filter: { duration: 0.4 },
                  }}
                  style={{
                    zIndex: cards.length - index,
                    width: "200px",
                  }}
                  className="absolute top-0 left-0"
                >
                  <motion.div
                    className="bg-white/15 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[160px] object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg text-white drop-shadow-sm">
                        {card.title}
                      </h4>
                      <p className="text-sm text-white/80 mt-1">
                        {card.subtitle}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
