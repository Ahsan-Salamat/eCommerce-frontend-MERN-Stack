import React from "react";
import { motion } from "framer-motion";

const FirstBanner = () => {
  return (
    <div className="md:container mx-auto px-4">
      <motion.div
        className="w-full bg-primary rounded-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 p-6">
          {/* Left Text */}
          <motion.div
            className="text-white space-y-2 text-center md:text-left"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
          >
            <p className="text-sm">30% OFF</p>
            <h1 className="text-4xl md:text-[80px] font-bold leading-tight">FINE SMILE</h1>
            <p className="text-sm">10 Jan to 28 Jan</p>
          </motion.div>

          {/* Image Center */}
          <motion.div
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.7 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
            }}
          >
            <img
              src="/img1.png"
              alt="Air Solo Bass"
              className="w-56 sm:w-64 md:w-72 h-auto md:scale-180 object-contain fill-white drop-shadow-xl/50"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="text-white space-y-2 text-center md:text-left"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
          >
            <h2 className="text-xl md:text-2xl font-semibold">Air Solo Bass</h2>
            <h3 className="text-2xl md:text-5xl tracking-wider font-bold">Winter Sale</h3>
            <p className="text-sm md:text-base">
              Experience pure sound like never before with our premium noise-cancelling headphones
            </p>
            <button className="mt-3 px-5 py-2 bg-white text-primary rounded-full font-medium hover:scale-105 transition">
              Shop Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FirstBanner;