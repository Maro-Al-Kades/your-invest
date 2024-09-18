"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { FEATURES_DATA } from "@/constants";

const Features = () => {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(index);
  }, [index]);

  return (
    <section className="text-white pt-32 relative">
      <div className="container mx-auto">
        <div className="flex gap-16">
          <motion.div
            key={FEATURES_DATA[index].imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2,
            }}
            className={`hidden xl:flex justify-center flex-1 w-full h-[480px] sticky top-[calc(50%-240px)]`}
          >
            <div className="relative w-full h-full ">
              <Image
                src={FEATURES_DATA[imgIndex].imgSrc}
                fill
                alt="img"
                className="drop-shadow-2xl  h-full object-contain "
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="flex-1 flex flex-col gap-24">
            {FEATURES_DATA.map((item, itemIndex) => {
              return (
                <motion.div
                  onViewportEnter={() => setIndex(itemIndex)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all" }}
                  key={itemIndex}
                  className={`w-full h-auto xl:h-[480px] flex items-center`}
                >
                  <div className="w-[80vw] xl:w-auto mx-auto xl:mx-0 ">
                    <h2 className="h2 mb-4">{item.title}</h2>
                    <p className="lead mb-8">{item.description}</p>
                    {/* Highlights */}
                    <div className="flex flex-col gap-5">
                      {item.heighLights.map((highlight, index) => {
                        return (
                          <div key={index} className="flex items-center gap-4">
                            <FaRegCheckCircle className="text-accent_secondary text-2xl shadow-lg rounded-full shadow-accent" />
                            <p>{highlight}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
