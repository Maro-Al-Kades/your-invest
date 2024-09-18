"use client";

import { motion } from "framer-motion";
import { fadeInOnScroll } from "@/motion/motionVariants";
import { BASIC_DATA, TESTIMONIALS } from "@/constants";
import { BiSolidQuoteLeft } from "react-icons/bi";

const Testimonials = () => {
  return (
    <section className="w-full xl:py-24 mb-24 xl:mb-32 flex justify-center items-center">
      <div className="overflow-hidden">
        {/* TXT */}
        <motion.div
          variants={fadeInOnScroll(0.2, 0.4)}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="h2 mb-6 text-center">
            {BASIC_DATA.TestimonialsTitle}
          </h2>
          <p className="lead text-center mb-24">
            {BASIC_DATA.TestimonialsDesc}
          </p>
        </motion.div>

        {/* CARD LIST */}
        <motion.div
          variants={fadeInOnScroll(2, 6)}
          initial="hidden"
          whileInView="visible"
          className="flex"
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {TESTIMONIALS.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative w-[460px] h-[300px] bg-[#0e11354e] backdrop-blur-3xl mr-12
                    rounded-2xl flex flex-col justify-center px-14 drop-shadow-2xl"
                >
                  <BiSolidQuoteLeft className="text-accent mb-3 text-3xl drop-shadow-xl" />
                  <p className="mb-4 text-lg text-white/80">{item.msg}</p>
                  <p className="text-xl font-semibold ">{item.name}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {TESTIMONIALS.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12
                    rounded-2xl flex flex-col justify-center px-14 shadow-[0px_0px_30px_1px] shadow-accent/50 "
                >
                  <BiSolidQuoteLeft className="text-accent mb-3 text-3xl drop-shadow-xl" />
                  <p className="mb-4 text-lg text-white/80">{item.msg}</p>
                  <p className="text-xl font-semibold ">{item.name}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {TESTIMONIALS.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12
                    rounded-2xl flex flex-col justify-center px-14 shadow-[0px_0px_30px_1px] shadow-accent/50 "
                >
                  <BiSolidQuoteLeft className="text-accent mb-3 text-3xl drop-shadow-xl" />
                  <p className="mb-4 text-lg text-white/80">{item.msg}</p>
                  <p className="text-xl font-semibold">{item.name}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
