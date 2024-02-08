// JobCardList.js
import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import data from './data.json'; // Import JSON data
import './JobCardList.css'; // Import CSS file for styling

const JobCardList = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      // Set loading state to false and update jobData with fetched data
      setJobData(data);
      setLoading(false);
    }, 1000); // Simulate 1 second delay
  }, []);

  return (
    <div className="job-card-grid">
      {loading ? (
        <p>Loading...</p> // Display loading indicator while data is being fetched
      ) : jobData.length === 0 ? (
        <p>No job data available.</p> // Display message if jobData is empty
      ) : (
        jobData.map((candidate) => (
          <JobCard key={candidate.id} candidate={candidate} />
        ))
      )}
    </div>
  );
};

export default JobCardList;
