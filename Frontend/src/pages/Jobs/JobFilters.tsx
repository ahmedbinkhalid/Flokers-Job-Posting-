import React from 'react';
import { Job } from '../../types/job';

interface JobFiltersProps {
  filters: {
    category: string;
    location: string;
    type: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    location: string;
    type: string;
  }>>;
  jobs: Job[];
}

export const JobFilters: React.FC<JobFiltersProps> = ({ filters, setFilters, jobs }) => {
  const categories = [...new Set(jobs.map(job => job.jobCategory))];
  const locations = [...new Set(jobs.map(job => job.jobLocation))];
  const types = [...new Set(jobs.map(job => job.jobType))];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <select
        value={filters.category}
        onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
        className="input-field"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select
        value={filters.location}
        onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
        className="input-field"
      >
        <option value="">All Locations</option>
        {locations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>

      <select
        value={filters.type}
        onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
        className="input-field"
      >
        <option value="">All Types</option>
        {types.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};