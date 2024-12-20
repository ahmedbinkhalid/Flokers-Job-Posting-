// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { MapPin, Calendar, Mail, Briefcase } from 'lucide-react';
// import { jobsApi } from '../../services/api';
// import { Job } from '../../types/job';
// import { Loader } from '../../components/Loader';
// import { ErrorMessage } from '../../components/ErrorMessage';
// import { formatDate } from '../../utils/dateUtils';

// export const JobDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [job, setJob] = useState<Job | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         if (!id) throw new Error('Job ID is required');
//         const data = await jobsApi.getJobById(id);
//         setJob(data);
//       } catch (err) {
//         setError('Failed to fetch job details. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   if (loading) return <Loader />;
//   if (error) return <ErrorMessage message={error} />;
//   if (!job) return <ErrorMessage message="Job not found" />;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
//     >
//       <div className="card">
//         <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//           {job.jobTitle}
//         </h1>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           <div className="flex items-center text-gray-600 dark:text-gray-300">
//             <Briefcase className="w-5 h-5 mr-2" />
//             {job.jobCategory}
//           </div>
//           <div className="flex items-center text-gray-600 dark:text-gray-300">
//             <MapPin className="w-5 h-5 mr-2" />
//             {job.jobLocation}
//           </div>
//           <div className="flex items-center text-gray-600 dark:text-gray-300">
//             <Calendar className="w-5 h-5 mr-2" />
//             {formatDate(job.dateAdded)}
//           </div>
//           <div className="flex items-center text-gray-600 dark:text-gray-300">
//             <Mail className="w-5 h-5 mr-2" />
//             {job.jobEmail}
//           </div>
//         </div>

//         <div className="prose dark:prose-invert max-w-none">
//           <h2 className="text-xl font-semibold mb-4">Description</h2>
//           <p className="mb-6">{job.jobDescription}</p>

//           <h2 className="text-xl font-semibold mb-4">Requirements</h2>
//           <ul className="list-disc pl-5 space-y-2">
//             {job.jobRequirements.map((requirement, index) => (
//               <li key={index}>{requirement}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="mt-8">
//           <a
//             href={`mailto:${job.jobEmail}`}
//             className="btn-primary inline-block"
//           >
//             Apply Now
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Briefcase } from 'lucide-react';
import { jobsApi } from '../../services/api';
import { Job } from '../../types/job';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';
import { formatDate } from '../../utils/dateUtils';

export const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();  // Initialize the navigate function
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        if (!id) throw new Error('Job ID is required');
        const data = await jobsApi.getJobById(id);
        setJob(data);
      } catch (err) {
        setError('Failed to fetch job details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!job) return <ErrorMessage message="Job not found" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="card bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="text-blue-600 dark:text-blue-400 mb-4 inline-flex items-center"
        >
          &#8592; Back
        </button>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {job.jobTitle}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Briefcase className="w-6 h-6 mr-2" />
            {job.jobCategory}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-6 h-6 mr-2" />
            {job.jobLocation}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="w-6 h-6 mr-2" />
            {formatDate(job.dateAdded)}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Mail className="w-6 h-6 mr-2" />
            <span className="whitespace-normal break-all">{job.jobEmail}</span>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="mb-6">{job.jobDescription}</p>

          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc pl-5 space-y-2">
            {job.jobRequirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <a
            href={`mailto:${job.jobEmail}`}
            className="btn-primary inline-block"
          >
            Apply Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};
