import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { jobsApi } from '../../services/api';
import { Job } from '../../types/job';
import { JobCard } from './JobCard';
import { JobFilters } from './JobFilters';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';

export const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    type: ''
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await jobsApi.getAllJobs();
        setJobs(data);
      } catch (err) {
        setError('Failed to fetch jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    return (!filters.category || job.jobCategory === filters.category) &&
           (!filters.location || job.jobLocation === filters.location) &&
           (!filters.type || job.jobType === filters.type);
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <JobFilters filters={filters} setFilters={setFilters} jobs={jobs} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={job._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <JobCard job={job} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};