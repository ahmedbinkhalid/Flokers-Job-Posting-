export interface Job {
  _id: string;
  jobCategory: string;
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  jobType: string;
  jobRequirements: string[];
  jobEmail: string;
  dateAdded: string;
}