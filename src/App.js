
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import SignupForm from './pages/Signup'
import Dash from './pages/Dash';
import Forgetpass from './pages/Forgetpass';
import Resetpass from './pages/Restpass';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes >
         
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignupForm/>} />
        <Route path="/dash" element={<Dash/>} />
        <Route path="/Forget password" element={<Forgetpass/>} />
        <Route path="/Reset password" element={<Resetpass/>} />
              
       
        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
