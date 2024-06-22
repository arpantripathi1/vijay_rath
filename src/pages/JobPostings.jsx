import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';
import PageHeader from '../components/PageHeader';

const JobPostings = ({ setIsHomePage }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setIsHomePage(true);
        return () => setIsHomePage(false); // Reset when component unmounts
    }, [setIsHomePage]);

    useEffect(() => {
        axios.get('http://localhost:5000/jobs')
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
            });
    }, []);
    return (
        jobs === undefined ?
            <div className="">
                <PageHeader text="Oops..No Jobs Available today" />
            </div> :
            <div className="">
                <PageHeader text="Latest Jobs" />
                {jobs.map(job => (
                    <JobCard key={job.job_id} job={job} />
                ))}
            </div>
    )
}

export default JobPostings