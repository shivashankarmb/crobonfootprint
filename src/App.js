import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";


 

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Toast Notifications Container */}
        <ToastContainer position="top-center" autoClose={2000} />

        {/* Application Routes */}
        <Routes>
      
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;

