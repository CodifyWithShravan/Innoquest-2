import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
    await axios.post("http://localhost:5000/signup", { name, email, password });
    alert("User registered");
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Signup</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter name" 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button className="btn btn-success w-100" onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
