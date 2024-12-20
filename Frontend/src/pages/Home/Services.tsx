import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, GraduationCap } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-blue-500" />,
      title: 'Job Seekers',
      features: ['Profile Creation', 'Job Alerts', 'Application Tracking']
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-500" />,
      title: 'Employers',
      features: ['Post Jobs', 'Candidate Search', 'Analytics Dashboard']
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
      title: 'Career Resources',
      features: ['Resume Tips', 'Interview Prep', 'Career Guidance']
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive solutions for your career journey
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};