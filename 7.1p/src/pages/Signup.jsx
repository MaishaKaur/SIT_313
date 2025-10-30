import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../pages/Signup.css";

const auth = getAuth(app);
const db = getFirestore(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const createUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // save extra user info in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName,
        lastName,
        email,
      });

      alert("Signup successful!");
      navigate("/"); // go to signin page
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="Signup-page">
      <h1>Sign Up</h1>
      <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
      <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
