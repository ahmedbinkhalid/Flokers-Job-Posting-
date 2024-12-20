// import React from 'react';
// import { motion } from 'framer-motion';

// export const CareerTips: React.FC = () => {
//   const tips = [
//     {
//       title: 'Build a Strong Resume',
//       description: 'Highlight your achievements and tailor your resume for each application.'
//     },
//     {
//       title: 'Ace Your Interviews',
//       description: 'Practice common questions and showcase your unique strengths.'
//     },
//     {
//       title: 'Network Effectively',
//       description: 'Connect with professionals in your field to discover hidden opportunities.'
//     }
//   ];

//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
//             Career Tips
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300">
//             Insights to help you succeed in your career journey
//           </p>
//         </motion.div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {tips.map((tip, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="card p-4 hover:shadow-lg transition-shadow"
//             >
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                 {tip.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, UserCheck, Network, Target } from 'lucide-react';

export const CareerTips: React.FC = () => {
  const tips = [
    {
      title: 'Craft a Resume That Stands Out',
      description:
        'Focus on measurable achievements, use action verbs, and customize your resume for each job to make it truly impactful.',
      icon: <Briefcase className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Master the Art of Interviews',
      description:
        'Prepare for behavioral and technical questions. Share real-life examples that demonstrate your skills and achievements.',
      icon: <UserCheck className="w-10 h-10 text-green-500" />,
    },
    {
      title: 'Leverage Networking Smartly',
      description:
        'Build genuine connections through LinkedIn and industry events. Don’t hesitate to ask for referrals or mentorship.',
      icon: <Network className="w-10 h-10 text-purple-500" />,
    },
    {
      title: 'Set Career Goals',
      description:
        'Define both short-term and long-term goals. Create a roadmap to track progress and stay motivated.',
      icon: <Target className="w-10 h-10 text-red-500" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Career Tips for Success
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Actionable advice to accelerate your professional growth
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                {tip.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
