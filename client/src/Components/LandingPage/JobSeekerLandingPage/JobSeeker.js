import React, { useState } from 'react';
import './JobSeeker.css';

const JobMatching = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [occupations, setOccupations] = useState('');
    const [skills, setSkills] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Upload CV handler
    const handleUploadCV = async () => {
        if (!file) {
            alert('Please select a CV file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:5001/upload_cv', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            if (data.error) {
                alert(data.error);
            } else {
                setJobDescription(data.extracted_text);
                alert('CV successfully uploaded and analyzed!');
            }
        } catch (error) {
            alert('Error uploading CV.');
        } finally {
            setLoading(false);
        }
    };

    // Analyze job description handler
    const handleAnalyzeJob = async () => {
        if (!jobDescription) {
            alert('Please enter a job description.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:5001/match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ job_descr: jobDescription }),
            });

            const data = await response.json();
            let occup_html = '';
            let skills_html = '';
            let qualif_html = '';

            data.forEach((item) => {
                const { type, tokens, retrieved } = item;
                if (type === 'Occupation') {
                    occup_html += `<p class='par'><div class='tokens'>${tokens}</div>: ${occupListToStr(retrieved)}</p>`;
                } else if (type === 'Skill') {
                    skills_html += `<p class='par'><div class='tokens'>${tokens}</div>: ${skillListToStr(retrieved)}</p>`;
                } else if (type === 'Qualification') {
                    qualif_html += `<p class='par'><div class='tokens'>${tokens}</div>: ${qualificationListToStr(retrieved)}</p>`;
                }
            });

            setOccupations(occup_html);
            setSkills(skills_html);
            setQualifications(qualif_html);
        } catch (error) {
            alert('Error analyzing job description.');
        } finally {
            setLoading(false);
        }
    };

    const occupListToStr = (arr) => {
        if (!arr.length) return '';
        return arr.map((item) => `<div class='retrieved'>${item.label || item}</div>`).join(' -- ');
    };

    const skillListToStr = (arr) => {
        if (!arr.length) return '';
        return arr.map((item) => `<div class='retrieved'>${item}</div>`).join(' -- ');
    };

    const qualificationListToStr = (arr) => {
        if (!arr.length) return '';
        return arr.map((item) => `<div class='retrieved'>${item}</div>`).join(' -- ');
    };

    return (
        <div>
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
                
                    <section className="hero-section">
                        <h2>Your Gateway to New Opportunities</h2>
                        <p>Find jobs, develop skills, and track your progress all in one place.</p>
                    </section>
                    <main>
                    <div className="container-seeker">
                        <div className="cv-development">
                            {/* CV Management */}
                            <h3>Manage Your CV</h3>
                            <section className="cv-section">
                                <section className="cv-chatbot">
                                <section className="chatbot-section">
                                    <h3>Let's make a CV Together by :</h3>
                                    <button className="chatbot-button">Chat with Us</button>
                                </section>
                                </section>
                                <section className='cvgeneration'>
                                <div className="cv-buttons">
                                    <h2>Upload Your CV (PDF or Word)</h2>
                                    <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
                                    <button className='btns' onClick={handleUploadCV} disabled={loading}>Upload CV</button>
                                </div>
                                {/* Job Description Analysis */}
                                <h2>Job Description</h2>
                                <textarea
                                    placeholder="Paste job description here"
                                    cols="80"
                                    rows="10"
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                />
                                <div style={{ clear: 'both', height: '0px' }}>&nbsp;</div>
                                <button className='btns' onClick={handleAnalyzeJob} disabled={loading}>Analyze Job</button>
                                {loading && <img src="/static/spinner.gif" alt="Loading" />}

                                {/* Display Results */}
                                <section className="results-section">
                                    <div className="result">
                                        <h2>Predicted Occupations:</h2>
                                        <div dangerouslySetInnerHTML={{ __html: occupations }} className="response box"></div>
                                    </div>
                                    <div className="result">
                                        <h2>Predicted Skills:</h2>
                                        <div dangerouslySetInnerHTML={{ __html: skills }} className="response box"></div>
                                    </div>
                                    <div className="result">
                                        <h2>Predicted Qualifications:</h2>
                                        <div dangerouslySetInnerHTML={{ __html: qualifications }} className="response box"></div>
                                    </div>
                                    </section>
                                </section>
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

                                <button className="job-button" >Instant Jobs</button>
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

        </div>
    );
};

export default JobMatching;
