// import logo from './logo.svg';
import './App.css';
import EmployerLandingPage from './Components/LandingPage/JobsLandingpage/EmployerLandingPage.js';
import AuthForm from './Components/LandingPage/SignUpLogin/AuthForm.js';
import EmployerAuthForm from './Components/LandingPage/SignUpLogin/EmployerAuthForm.js';
import JobSeekerLandingPage from './Components/LandingPage/JobSeekerLandingPage/JobSeeker.js';
import JobSeekerCV from './Components/LandingPage/JobSeekerLandingPage/JobseekerCv.js';

function App() {
  return (
     <div className="App">
     {/* <AuthForm /> */}
     {/* <EmployerAuthForm /> */}
     {/* <EmployerLandingPage /> */}
     <JobSeekerLandingPage />
     {/* <JobSeekerCV /> */}
   </div>
  );
}

export default App;
