import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "../pages/Signin.css";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signinUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signin success");
      navigate("/home"); // go to homepage
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={signinUser}>Sign In</button>
      <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SigninPage;
