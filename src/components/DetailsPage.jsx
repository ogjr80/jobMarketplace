// DetailsPage.js
import React from 'react';
import './DetailsPage.css'; // Import CSS file for styling

const DetailsPage = ({ candidate }) => {
  return (
    <div className="details-page">
      <div className="details-header">
        {candidate.profilePicture && <img src={candidate.profilePicture} alt="Profile" className="profile-picture" />}
        <div className="details-header-info">
          <h1>{candidate.name}</h1>
          <h2>{candidate.jobTitle}</h2>
        </div>
      </div>
      <div className="details-biography">
        <h3>Biography</h3>
        <p>{candidate.biography}</p>
      </div>
      <div className="details-education">
        <h3>Education</h3>
        {candidate.education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree}</p>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
      {/* Additional sections for experience, projects, timeline, etc. */}
      <button className="contact-button">Contact Candidate</button>
      <button className="save-button">Save Profile</button>
    </div>
  );
};

export default DetailsPage;
