"use client";

import Hero from "@/components/Sections/Hero";
import Brands from "@/components/Sections/Brands";
import { ReactLenis } from "lenis/dist/lenis-react";
import Features from "@/components/Sections/Features";
import Integrations from "@/components/Sections/Integrations";
import Testimonials from "@/components/Sections/Testimonials";
import Trial from "@/components/Sections/Trial";
import Glow from "@/components/Other/Glow";

const HomePage = () => {
  return (
    <>
      <ReactLenis root>
        <Glow className="-top-80 left-[750px]" />
        <Hero />
        <Brands />
        <Features />
        <Integrations />
        <Testimonials />
        <Trial />
      </ReactLenis>
    </>
  );
};

export default HomePage;
