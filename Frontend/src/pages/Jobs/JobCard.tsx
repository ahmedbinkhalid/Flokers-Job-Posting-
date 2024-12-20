import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { Job } from '../../types/job';
import { formatDate } from '../../utils/dateUtils';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link to={`/jobs/${job._id}`} className="block">
      <div className="card hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {job.jobTitle}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            {job.jobLocation}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Briefcase className="w-4 h-4 mr-2" />
            {job.jobType}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            {formatDate(job.dateAdded)}
          </div>
        </div>
        <div className="text-sm text-blue-600 dark:text-blue-400">
          View Details →
        </div>
      </div>
    </Link>
  );
};