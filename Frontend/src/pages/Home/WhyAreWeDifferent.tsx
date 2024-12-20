import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, Users } from 'lucide-react';

const WhyAreWeDifferent: React.FC = () => {
  const differences = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
      title: 'Secure and Reliable',
      description:
        'We prioritize your data security and ensure our platform is reliable for all your needs.',
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
      title: 'Fast and Innovative',
      description:
        'Experience unmatched speed and innovative features tailored for modern users.',
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: 'Community-Focused',
      description:
        'We actively involve our users in shaping the future of the platform with feedback and engagement.',
    },
  ];

  return (
    <main className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why We Are Different
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover what sets us apart from the rest and why users trust our platform.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {differences.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WhyAreWeDifferent;
