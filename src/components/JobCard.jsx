import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Job ID:</strong> {job.job_id}</p>
      <p><strong>Posted Date:</strong> {job.posted_date}</p>
      <a href={job.link} target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  );
};

export default JobCard;
