import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const dummyData = [
  {
    id: 1,
    title: "Headphones",
    subtitle: "Experience pure sound",
    company: "AudioNova",
    imageUrl: "img1.png",
  },
  {
    id: 2,
    title: "Laptop",
    subtitle: "Want to work anywhere",
    company: "Apple",
    imageUrl: "img2.png",
  },
  {
    id: 3,
    title: "Fitness Watch",
    subtitle: "Track your health",
    company: "FitPulse",
    imageUrl: "img3.png",
  },
];

const slideVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
};

function HeroSec() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % dummyData.length);
    }, 4000); // change every 4s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-6 px-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={dummyData[current].id}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="container bg-gradient-to-r from-zinc-300/80 to-zinc-100 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 h-[80vh] md:h-[85vh] container mx-auto px-4">
            {/* Text Section */}
            <motion.div
              className="flex flex-col items-start gap-3 justify-center text-left order-2 sm:order-1 max-w-xl relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {dummyData[current].company}
              </h3>
              <p className="text-2xl md:text-5xl font-bold text-black mb-1">
                {dummyData[current].subtitle}
              </p>
              <h1 className="text-4xl md:text-[100px] lg:text-[150px] font-extrabold tracking-wide bg-gradient-to-r from-primary to-black/30 md:whitespace-nowrap text-transparent bg-clip-text">
                {dummyData[current].title}
              </h1>
              <button className="bg-black/80 text-xs text-white px-5 py-2 rounded-lg hover:bg-zinc-800 transition">
                Click to buy
              </button>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="order-1 sm:order-2 flex justify-center z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img
                src={dummyData[current].imageUrl}
                alt={dummyData[current].title}
                className="w-[300px] sm:w-[400px] md:w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default HeroSec;