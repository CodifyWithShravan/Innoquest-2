import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/signup", { name, email, password });
      if (res.data.success) {
        alert("User registered successfully");
        setName("");
        setEmail("");
        setPassword("");
        setError(""); // Clear any previous errors
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      setError("Error registering user");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Signup</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button className="btn btn-success w-100" onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;