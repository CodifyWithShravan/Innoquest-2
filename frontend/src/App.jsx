import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import AddResource from "./pages/AddResource";
import Navbar from "./components/Navbar";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/resources" element={isAuthenticated ? <Resources /> : <Navigate to="/login" />} />
        <Route path="/add-resource" element={isAuthenticated ? <AddResource /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;