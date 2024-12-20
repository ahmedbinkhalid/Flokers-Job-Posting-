import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Shield } from 'lucide-react';
import { ValueCard } from './ValueCard';

export const CoreValues: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Precision Matching',
      description: 'Our advanced algorithms ensure perfect job-candidate matches.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Community First',
      description: 'Building strong connections between employers and job seekers.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Trust & Security',
      description: 'Verified employers and secure application process.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            What makes Flokers different from other job platforms
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};