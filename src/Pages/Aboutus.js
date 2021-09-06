import React from 'react';
import AboutSection from '../Components/AboutSection';
import ServiceSection from '../Components/ServiceSection';
import FaqSection from '../Components/FaqSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../Components/ScrollTop';

const Aboutus = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
};

export default Aboutus;
