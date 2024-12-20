import React from 'react';
import { motion } from 'framer-motion';

export const JobCategories: React.FC = () => {
  const categories = [
    {
      title: 'IT & Software',
      icon: '🖥️',
      description:
        'Find roles in software development, web development, mobile apps, cybersecurity, IT infrastructure, and more.',
    },
    {
      title: 'Marketing',
      icon: '📈',
      description:
        'Explore jobs in digital marketing, SEO, content strategy, brand management, and influencer marketing.',
    },
    {
      title: 'Finance & Accounting',
      icon: '💼',
      description:
        'Browse roles in financial analysis, accounting, auditing, investment banking, and corporate finance.',
    },
    {
      title: 'Design & Creative',
      icon: '🎨',
      description:
        'Creative jobs in graphic design, web design, UI/UX, animation, photography, and more.',
    },
    {
      title: 'Sales & Customer Support',
      icon: '📞',
      description:
        'Sales roles in business development, account management, lead generation, and customer support positions.',
    },
    {
      title: 'Healthcare',
      icon: '🏥',
      description:
        'Explore healthcare roles across nursing, medical research, therapy, mental health support, and administrative roles.',
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
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Explore Job Categories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Browse through a wide variety of roles across different fields
          </p>
        </motion.div>

        {/* List Style Layout */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{category.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
