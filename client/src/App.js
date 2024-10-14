// import logo from './logo.svg';
import './App.css';
import EmployerLandingPage from './Components/LandingPage/JobsLandingpage/EmployerLandingPage.js';
import AuthForm from './Components/LandingPage/SignUpLogin/AuthForm.js';
import EmployerAuthForm from './Components/LandingPage/SignUpLogin/EmployerAuthForm.js';

function App() {
  return (
     <div className="App">
     <AuthForm />
     <EmployerAuthForm />
     <EmployerLandingPage />
   </div>
  );
}

export default App;
