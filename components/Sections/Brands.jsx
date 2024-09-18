import { BASIC_DATA, BRANDS_IMGS } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeInOnScroll } from "@/motion/motionVariants";

const Brands = () => {
  return (
    <section className="w-full h-[24vh] pt-24 flex justify-center items-center">
      <motion.div
        variants={fadeInOnScroll(1, 3)}
        initial="hidden"
        whileInView="visible"
        className="container mx-auto overflow-x-hidden"
      >
        <p className="lead text-center mb-6">{BASIC_DATA.brandsJoin}</p>

        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {BRANDS_IMGS.map((item, index) => {
              return (
                <div className="relative w-52 h-20 mr-12" key={index}>
                  <Image
                    src={item.src}
                    fill
                    alt={item.src}
                    className="object-contain opacity-[75%]"
                  />
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {BRANDS_IMGS.map((item, index) => {
              return (
                <div className="relative w-52 h-20 mr-12" key={index}>
                  <Image
                    src={item.src}
                    fill
                    alt={item.src}
                    className="object-contain  opacity-[75%]"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
