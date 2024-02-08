// JobCard.js
import React from 'react';
import './JobCard.css'; // Import CSS file for styling

const JobCard = ({ candidate }) => {
  // Check if candidate object exists
  if (!candidate) {
    return null; // Return null if candidate is undefined or null
  }

  // Destructure candidate object properties
  const { name, jobTitle, profilePicture, summary } = candidate;

  return (
    <div className="job-card">
      <div className="job-card-header">
        {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />}
        <div className="job-card-details">
          <h2>{name}</h2>
          <p>{jobTitle}</p>
        </div>
      </div>
      <div className="job-card-summary">
        <p>{summary}</p>
      </div>
      <button className="view-profile-button">View Profile</button>
    </div>
  );
};

export default JobCard;
