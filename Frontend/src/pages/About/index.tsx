// import React from 'react';
// import { motion } from 'framer-motion';
// import { Target, Users, Shield, Award } from 'lucide-react';
// import { Footer } from '../../components/Footer';

// export const About: React.FC = () => {
//   return (
//     <div className="animate-fade-in">
//       <div className="bg-gray-50 dark:bg-gray-800 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-12"
//           >
//             <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               About Flokers
//             </h1>
//             <p className="text-xl text-gray-600 dark:text-gray-300">
//               Revolutionizing the way people find their dream careers
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//                 Our Mission
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 At Flokers, we're committed to connecting talented professionals with 
//                 opportunities that match their skills and aspirations. We believe in 
//                 creating meaningful connections that benefit both job seekers and employers.
//               </p>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Our innovative platform uses advanced matching algorithms to ensure 
//                 the perfect fit between candidates and companies, making the job 
//                 search process more efficient and effective.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//               className="grid grid-cols-2 gap-4"
//             >
//               <div className="card text-center">
//                 <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
//                 <h3 className="font-semibold text-gray-900 dark:text-white">
//                   Precision
//                 </h3>
//               </div>
//               <div className="card text-center">
//                 <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
//                 <h3 className="font-semibold text-gray-900 dark:text-white">
//                   Community
//                 </h3>
//               </div>
//               <div className="card text-center">
//                 <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
//                 <h3 className="font-semibold text-gray-900 dark:text-white">
//                   Security
//                 </h3>
//               </div>
//               <div className="card text-center">
//                 <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
//                 <h3 className="font-semibold text-gray-900 dark:text-white">
//                   Excellence
//                 </h3>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Shield, Award } from 'lucide-react';
import { Footer } from '../../components/Footer';

export const About: React.FC = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { ease: 'easeOut', duration: 1, delay: 0.2 },
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-gray-900 min-h-screen">
      {/* Hero Section */}
      {/* Section: Our Mission */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Flokers</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Revolutionizing the way people find their dream careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At Flokers, we're committed to connecting talented professionals with opportunities that match their skills and aspirations. We believe in creating meaningful connections that benefit both job seekers and employers.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our innovative platform uses advanced matching algorithms to ensure the perfect fit between candidates and companies, making the job search process more efficient and effective.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="card text-center">
                <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Precision</h3>
              </div>
              <div className="card text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Community</h3>
              </div>
              <div className="card text-center">
                <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Security</h3>
              </div>
              <div className="card text-center">
                <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Excellence</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Section: Our Teams */}
      <div className="py-16 bg-white dark:bg-gray-900 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Teams</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Meet the talented individuals who are committed to driving the vision of Flokers forward.
            </p>
          </motion.div>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 dark:bg-gray-700 mb-4"></div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">John Doe</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">CEO & Founder</p>
              <p className="text-gray-600 dark:text-gray-300">
                John is the visionary leader behind Flokers, driving the company's mission to help professionals connect with their ideal careers.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 dark:bg-gray-700 mb-4"></div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Jane Smith</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">CTO & Co-Founder</p>
              <p className="text-gray-600 dark:text-gray-300">
                Jane brings a wealth of technical expertise to Flokers, ensuring the platform is innovative, secure, and scalable.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 dark:bg-gray-700 mb-4"></div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Sam Lee</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">Head of Marketing</p>
              <p className="text-gray-600 dark:text-gray-300">
                Sam leads the marketing team, ensuring Flokers reaches its target audience and engages users effectively across multiple channels.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 sm:px-12 lg:px-16 bg-gradient-to-r from-teal-400 to-blue-500 text-white">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Flokers is here to revolutionize how businesses and professionals connect. We empower individuals to find their perfect opportunity, while enabling companies to tap into a dynamic and engaged workforce.
          </p>
        </motion.div>

        {/* New Animation: Animated Text Reveal */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-64 h-64 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full absolute opacity-60 blur-3xl"></div>
          <motion.div
            className="relative z-10 p-6 bg-white text-gray-900 rounded-xl shadow-xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-lg font-semibold">
              "Revolutionizing professional connections, one opportunity at a time."
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};
