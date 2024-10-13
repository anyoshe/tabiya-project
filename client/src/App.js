// import logo from './logo.svg';
import './App.css';
import AuthForm from './Components/LandingPage/SignUpLogin/AuthForm.js';
import EmployerAuthForm from './Components/LandingPage/SignUpLogin/EmployerAuthForm.js';

function App() {
  return (
     <div className="App">
     <AuthForm />
     <EmployerAuthForm />
   </div>
  );
}

export default App;
