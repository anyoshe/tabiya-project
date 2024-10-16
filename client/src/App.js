import './App.css';
import EmployerLandingPage from './Components/LandingPage/JobsLandingpage/EmployerLandingPage.js';
import AuthForm from './Components/LandingPage/SignUpLogin/AuthForm.js';
import EmployerAuthForm from './Components/LandingPage/SignUpLogin/EmployerAuthForm.js';
import JobSeekerLandingPage from './Components/LandingPage/JobSeekerLandingPage/JobSeeker.js';
import JobSeekerCV from './Components/LandingPage/JobSeekerLandingPage/JobseekerCv.js';
import LandingPage from './Components/LandingPage/LandingPageMain/LandingPage.js';
import JobMatching from './Components/LandingPage/JobSeekerLandingPage/JobSeeker.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Freelancer Signup Route */}
          <Route path="/freelancer" element={<AuthForm />} />

          {/* Route for Employer Login */}
          <Route path="/contractor" element={<EmployerAuthForm />} />

          {/* Route for Employer Dashboard */}
          <Route path="/employer-dashboard" element={<EmployerLandingPage />} />

          {/* Sign In Route */}
          <Route path="/signin" element={<AuthForm />} />
          <Route path="/jobseeker-dashboard" element={<JobMatching />} />  {/* New route for Job Seeker Dashboard */}

          {/* Contact Route */}
          {/* Assuming you have a Contact component */}
          <Route path="/contact" element={<div>Contact Page</div>} />

          {/* Job Seeker Landing Page */}
          <Route path="/jobseeker" element={<JobSeekerLandingPage />} />
            
          {/* Job Seeker CV Page */}
          <Route path="/jobseeker-cv" element={<JobSeekerCV />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
