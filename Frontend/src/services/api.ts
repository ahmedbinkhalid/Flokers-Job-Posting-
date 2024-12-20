import axios from 'axios';
import { Job } from '../types/job';

const API_BASE_URL = 'http://localhost:5000/api';

export const jobsApi = {
  getAllJobs: async (): Promise<Job[]> => {
    const response = await axios.get(`${API_BASE_URL}/allJobs`);
    return response.data;
  },

  getJobById: async (id: string): Promise<Job> => {
    const response = await axios.get(`${API_BASE_URL}/jobDetail/${id}`);
    return response.data;
  },

  addJob: async (jobData: Omit<Job, '_id' | 'dateAdded'>): Promise<{ message: string; jobId: string }> => {
    const response = await axios.post(`${API_BASE_URL}/addJob`, jobData);
    return response.data;
  }
};