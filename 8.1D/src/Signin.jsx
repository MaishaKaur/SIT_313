import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import "./Signin.css";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signinUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signin success");
      navigate("/Post"); // go to Post page
    } catch (err) {
      alert(err.message);
    }
  };

  const signout = async () => {
          try {
              if (!auth.currentUser){
                  alert("No user is currently signed in.");
                  return;
              }
              if (window.confirm("Are you sure you want to sign out?")) {
                  alert("Signing out...");
                  await signOut(auth);
              }
          } catch (error) {
              console.error("Error signing out: ", error);
          }
      }

  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={signinUser}>Sign In</button>
      <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
      <button style={{ color: "red", border: "none", background: "none", cursor: "pointer" }} onClick={signout}>Sign Out</button>
    </div>
  );
};

export default SigninPage;
