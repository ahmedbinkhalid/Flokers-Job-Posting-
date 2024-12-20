// import React from 'react';
// import { motion } from 'framer-motion';

// export const Testimonials: React.FC = () => {
//   const testimonials = [
//     {
//       name: 'John Doe',
//       feedback:
//         'Flokers helped me find my dream job in just two weeks! The process was seamless and efficient.',
//       role: 'Software Engineer'
//     },
//     {
//       name: 'Sarah Lee',
//       feedback:
//         'I loved the precision matching feature. It connected me with employers who valued my skills.',
//       role: 'Marketing Specialist'
//     },
//     {
//       name: 'Michael Brown',
//       feedback:
//         'The career resources section gave me the confidence to ace my interviews. Highly recommend!',
//       role: 'Data Scientist'
//     }
//   ];

//   return (
//     <section className="py-16 bg-gray-100 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
//             What People Say About Us
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300">
//             Real stories from satisfied users
//           </p>
//         </motion.div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="card p-6 shadow-lg"
//             >
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 &quot;{testimonial.feedback}&quot;
//               </p>
//               <h3 className="font-bold text-gray-900 dark:text-white">
//                 {testimonial.name}
//               </h3>
//               <p className="text-gray-500">{testimonial.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback:
        'Flokers revolutionized my job search! Within two weeks, I landed my dream role with a company that values my skills.',
      role: 'Software Engineer',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Sarah Lee',
      feedback:
        'Precision matching on Flokers connected me with employers who were the perfect fit. It felt like a custom experience!',
      role: 'Marketing Specialist',
      avatar: 'https://i.pravatar.cc/150?img=28',
    },
    {
      name: 'Michael Brown',
      feedback:
        'The career resources section was a game-changer. It helped me polish my skills and ace every interview!',
      role: 'Data Scientist',
      avatar: 'https://i.pravatar.cc/150?img=32',
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
            What Our Users Are Saying
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Genuine experiences from people who trust Flokers
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                &quot;{testimonial.feedback}&quot;
              </p>
              <div className="flex justify-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-5 h-5" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
