import React, { useState, useEffect } from 'react';

// Resume component to display CV data
const Resume = ({ data }) => {
  // Function to format a single experience section
  const formatExperience = (experience, index) => (
    <div key={index} className="experience">
      <h3>{experience.role} at {experience.company}</h3>
      <p><strong>Location:</strong> {experience.location}</p>
      <p><strong>Period:</strong> {experience.start} - {experience.end}</p>
      <p><strong>Responsibilities:</strong> {experience.responsibilities.join(', ')}</p>
      <p><strong>Skills Used:</strong> {experience.skills.join(', ')}</p>
    </div>
  );

  return (
    <div className="resume">
      <h1>{data.name}'s Resume</h1>
      <h2>Contact Information</h2>
      <p>Email: {data.contact.email}</p>
      <p>Phone: {data.contact.phone}</p>

      <h2>Summary</h2>
      <p>{data.summary}</p>

      <h2>Work Experience</h2>
      {data.experiences.map((exp, index) => formatExperience(exp, index))}

      <h2>Skills</h2>
      <ul>
        {data.skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </div>
  );
};

// Main component that fetches and formats data from the JSON file
const App = () => {
  const [resumeData, setResumeData] = useState(null);

  // Fetch and parse the JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/path-to-your-json-file/test_compass.json');
        const data = await response.json();

        // Transform data to match the structure expected by Resume component
        const transformedData = {
          name: 'John Doe',
          contact: {
            email: 'johndoe@example.com',
            phone: '+123456789',
          },
          summary: 'Experienced full-stack developer with expertise in Python, Django, React, and Solidity for Ethereum.',
          experiences: data.all_history.turns
            .filter(turn => turn.output && turn.input)
            .map(turn => ({
              role: turn.input.message || 'Unknown Role',
              company: turn.output.message_for_user || 'Unknown Company',
              location: 'Kenya', // Replace with actual data
              start: '2023', // Replace with actual data
              end: 'Present', // Replace with actual data
              responsibilities: ['Developed web apps', 'Integrated APIs'], // Replace with actual data
              skills: ['Python', 'React', 'Solidity'], // Replace with actual data
            })),
          skills: ['Python', 'Django', 'React', 'Solidity'],
        };

        setResumeData(transformedData);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };

    fetchData();
  }, []);

  if (!resumeData) return <div>Loading...</div>;

  return <Resume data={resumeData} />;
};

export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const JobSeekerCV = ({ jobSeekerId }) => {
//   const [jobSeekerData, setJobSeekerData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobSeeker = async () => {
//       try {
//         const response = await axios.get(`/jobseekers/670a8d3af974cc1d79158e7f`);
//         setJobSeekerData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching job seeker data", error);
//         setLoading(false);
//       }
//     };

//     fetchJobSeeker();
//   }, [jobSeekerId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!jobSeekerData) {
//     return <div>No data available for this job seeker.</div>;
//   }

//   const { name, contact, experience, education, skills } = jobSeekerData;

//   return (
//     <div className="cv-container">
//       <header className="cv-header">
//         <h1>{name}</h1>
//         <p>{contact.email} | {contact.phone}</p>
//         <p>{contact.location}</p>
//       </header>

//       <section className="cv-section">
//         <h2>Professional Experience</h2>
//         {experience.map((job, index) => (
//           <div key={index} className="cv-experience-item">
//             <h3>{job.title} at {job.company}</h3>
//             <p>{job.location} | {job.startDate} - {job.endDate}</p>
//             <ul>
//               {job.responsibilities.map((task, idx) => (
//                 <li key={idx}>{task}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </section>

//       <section className="cv-section">
//         <h2>Education</h2>
//         {education.map((edu, index) => (
//           <div key={index} className="cv-education-item">
//             <h3>{edu.degree}, {edu.institution}</h3>
//             <p>{edu.startDate} - {edu.endDate}</p>
//           </div>
//         ))}
//       </section>

//       <section className="cv-section">
//         <h2>Skills</h2>
//         <ul className="cv-skills">
//           {skills.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default JobSeekerCV;
