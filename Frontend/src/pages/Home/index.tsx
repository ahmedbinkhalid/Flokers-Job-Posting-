// import React from 'react';
// import { Hero } from './Hero';
// import { CoreValues } from './CoreValues';
// import { Services } from './Services';
// import { Testimonials } from './Testimonials';
// import { CareerTips } from './CareerTips';
// import { Footer } from '../../components/Footer';

// import { WhyAreWeHere } from './WhyAreWeHere';
// import WhyAreWeDifferent from './WhyAreWeDifferent';
// import { JobCategories } from './JobCategories';

// export const Home: React.FC = () => {
//   return (
//     <div className="animate-fade-in">
//       <Hero />
//       <WhyAreWeHere />
//       <WhyAreWeDifferent />
//       <CoreValues />
//       <Services />
//       <CareerTips />
//       <JobCategories />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// };
import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './Hero';
import { CoreValues } from './CoreValues';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { CareerTips } from './CareerTips';
import { Footer } from '../../components/Footer';

import { WhyAreWeHere } from './WhyAreWeHere';
import WhyAreWeDifferent from './WhyAreWeDifferent';
import { JobCategories } from './JobCategories';

// Smooth entrance animation definitions
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeOut', duration: 0.7 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { ease: 'easeOut', duration: 0.7 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { ease: 'easeOut', duration: 0.7 },
};

const zoomIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { ease: 'easeOut', duration: 0.7 },
};

const rotateIn = {
  initial: { opacity: 0, rotate: 90 },
  animate: { opacity: 1, rotate: 0 },
  transition: { ease: 'easeOut', duration: 0.7 },
};

export const Home: React.FC = () => {
  return (
    <div>
      <motion.div
        variants={zoomIn}
        initial="initial"
        animate="animate"
        whileInView="animate"
        className="animate-fade-in"
      >
        <Hero />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        whileInView="animate"
        transition={{ delay: 0.2 }}
      >
        <WhyAreWeHere />
      </motion.div>

      <motion.div
        variants={fadeInLeft}
        initial="initial"
        animate="animate"
        whileInView="animate"
        transition={{ delay: 0.4 }}
      >
        <WhyAreWeDifferent />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        whileInView="animate"
        transition={{ delay: 0.6 }}
      >
        <CoreValues />
      </motion.div>

      <motion.div
        variants={rotateIn}
        initial="initial"
        animate="animate"
        whileInView="animate"
        transition={{ delay: 0.8 }}
      >
        <Services />
      </motion.div>

      <motion.div
        variants={fadeInRight}
        initial="initial"
        animate="animate"
        whileInView="animate"
        transition={{ delay: 1 }}
      >
        <CareerTips />
      </motion.div>

      <motion.div
        variants={fadeInLeft}
        initial="initial"
        animate="animate"
        whileInView="animate"
        transition={{ delay: 1.2 }}
      >
        <JobCategories />
      </motion.div>

      <motion.div
        variants={zoomIn}
        initial="initial"
        animate="animate"
        whileInView="animate"
        transition={{ delay: 1.4 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        variants={rotateIn}
        initial="initial"
        animate="animate"
        whileInView="animate"
        transition={{ delay: 1.6 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};
