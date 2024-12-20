import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, TrendingUp } from 'lucide-react';

export const WhyAreWeHere: React.FC = () => {
  const reasons = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Global Opportunities',
      description:
        'Connecting job seekers with opportunities worldwide, breaking geographical barriers.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: 'Innovation in Hiring',
      description:
        'Redefining traditional recruitment with cutting-edge technology and insights.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: 'Empowering Growth',
      description:
        'Helping individuals and businesses thrive with tailored career solutions.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Are We Here
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our mission is to revolutionize the way people connect with jobs and talent.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
