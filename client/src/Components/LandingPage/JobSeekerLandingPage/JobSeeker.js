import React from 'react';
import './JobSeeker.css'; // External stylesheet for styling

const JobSeekerLandingPage = () => {


    return (
        <div className="job-seeker-landing-page">
            {/* Header Section */}
            <header className="header">
                <div className="nav-bar">
                    <h1>Welcome, Job Seeker</h1>
                    <div className="nav-buttons">
                        <button className="profile-button">Profile</button>
                        <button className="logout-button">Logout</button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <section className="hero-section">
                    <h2>Your Gateway to New Opportunities</h2>
                    <p>Find jobs, develop skills, and track your progress all in one place.</p>
                </section>
               <div className="container-seeker">
                <div className="cv-development">
                    {/* CV Management */}
                    <section className="cv-section">
                        <h3>Manage Your CV</h3>
                        <section className="chatbot-section">
                            <h3>Need Help to make a CV?</h3>
                            <button className="chatbot-button">Chat with Us</button>
                            <button className="cv-button">Upload CV</button>
                        </section>
                        <div className="cv-buttons">
                            
                            <button className="cv-button">Download CV</button>
                        </div>
                    </section>

                    {/* Skill Development Section */}
                    <section className="skill-section">
                        <h3>Develop Your Skills</h3>
                        <div className="skill-buttons">
                            <button className="skill-button">Skill Gap Analysis</button>
                            <button className="skill-button">Skill Development Route</button>
                        </div>
                    </section>
                </div>
                
                {/* Job Links */}
                <section className="job-section">
                    <h3>Job Opportunities</h3>
                    <div className="job-buttons">
                        <button className="job-button">Instant Jobs</button>
                        <button className="job-button">Daily Jobs</button>
                        <button className="job-button">Jobs Near Me</button>
                        <button className="job-button">Matching Jobs</button>
                    </div>
                </section>
            
                </div>

            </main>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 JobSeeker Platform. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default JobSeekerLandingPage;
