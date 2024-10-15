import React, { useState } from 'react';

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
      <h1>Job Matching</h1>

      {/* CV Upload */}
      <h2>Upload Your CV (PDF or Word)</h2>
      <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
      <button onClick={handleUploadCV} disabled={loading}>Upload CV</button>

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
      <button onClick={handleAnalyzeJob} disabled={loading}>Analyze Job</button>
      {loading && <img src="/static/spinner.gif" alt="Loading" />}

      {/* Display Results */}
      <section className="results-section">
        <div className="result">
          <h2>Predicted Occupations:</h2>
          <div dangerouslySetInnerHTML={{ __html: occupations }} className="response"></div>
        </div>
        <div className="result">
          <h2>Predicted Skills:</h2>
          <div dangerouslySetInnerHTML={{ __html: skills }} className="response"></div>
        </div>
        <div className="result">
          <h2>Predicted Qualifications:</h2>
          <div dangerouslySetInnerHTML={{ __html: qualifications }} className="response"></div>
        </div>
      </section>
    </div>
  );
};

export default JobMatching;
