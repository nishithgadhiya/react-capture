import React from "react";
//Page components
import AboutSection from "../compoents/AboutSection";
import ServicesSection from "../compoents/ServicesSection";
import FaqSection from "../compoents/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ABoutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default ABoutUs;
