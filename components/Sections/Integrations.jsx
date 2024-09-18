"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Global/Button";
import { BASIC_DATA, ICONS } from "@/constants";
import { fadeInOnScroll } from "@/motion/motionVariants";
import { fadeInUpSpring } from "@/motion/motionVariants";

const iconAnimation = {
  initial: {
    opacity: 0,
    y: 60,
  },

  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * index,
    },
  }),
};

const Integrations = () => {
  return (
    <section className="py-24 xl:py-32 min-h-[720px] xl:mt-32">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 xl:gap-16">
        {/* TXT */}
        <motion.div
          variants={fadeInOnScroll(0.2, 0.6)}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h2 className="h2 mb-3">{BASIC_DATA.IntegrationTitle}</h2>
          <p className="lead">{BASIC_DATA.IntegrationDesc}</p>
        </motion.div>
        {/* ICON LIST */}
        <div className="flex flex-wrap gap-8 w-full max-w-[1024px] mx-auto place-content-center mb-8">
          {ICONS.map((icon, index) => {
            return (
              <motion.div
                className="relative w-[80px] h-[80px]"
                key={index}
                custom={index}
                variants={iconAnimation}
                initial="initial"
                whileInView="animate"
              >
                <Image
                  src={icon.src}
                  fill
                  alt=""
                  className="p-3 bg-accent_secondary/20 backdrop-blur-3xl rounded-full shadow-inner shadow-accent "
                />
              </motion.div>
            );
          })}
        </div>
        {/* BTN */}
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
            type: "spring",
            stiffness: 100,
          }}
        >
          <Button btnText="مشاهدة المزيد" />
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
