import React from 'react';
// import './EmployerLandingPage.css'; 

const EmployerLandingPage = () => {
  return (
    <>
    <div className="employer-landing-page">
      <header className="header">
      <section className="profile-section">
        <h2>Employer Profile</h2>
        <div className="profile-details">
          {/* Replace with dynamic data */}
          <p>Name: Company ABC</p>
          <p>Email: contact@companyabc.com</p>
          <p>Phone: +123456789</p>
        </div>
      </section>
      <h1>Employer Dashboard</h1>
      <button>Log Out</button>
      </header>

      <div className="classfier-section">
        <div className='one'>
        <section className="classifier-section">
        <h2>Search Job Seekers</h2>
        <select>
          <option value="">Select Occupation</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
          {/* Add more options as needed */}
        </select>
      </section>
      <section className="search-bar-section">
        <h2>Search by Classifier</h2>
        <input type="text" placeholder="Search by name, skills, etc." />
        <div className='results-classifier'>
      <section className="search-bar-section">
        <h2>Job titles list</h2>
        <input type="textarea"  placeholder="Search by name, skills, etc." />
      </section>
      <section className="search-bar-section">
        <h2>Expected Skills list</h2>
        <input type="textarea"   placeholder="Search by name, skills, etc." />
      </section>
      </div>
      </section>
      <button>Search Job Seeker Match</button>
      </div>
      
      <div className='two'>
      {/* </div> */}
      {/* <div className='the-list'> */}
      <section className="job-seekers-list">
        <h2>Job Seekers List</h2>
        <ul>
          <li>John Doe - Developer</li>
          <li>Jane Smith - Designer</li>
          <li>Emily Johnson - Project Manager</li>
          {/* Replace with dynamic job seeker data */}
        </ul>
      </section>

      <section className="post-job-section">
        <button className="post-job-button">Post a Job</button>
      </section>
      </div>
      </div>
    </div>
    </>
  );
};

export default EmployerLandingPage;
