import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostPage from './PostPage';
import FindQuestion from './QuestionFilter';
import SignupPage from "./Signup";
import SigninPage from "./Signin";
import './App.css';
import Payment from './payment';
import ProjectedRoute from './ProjectedRoute';
import { Pos } from 'codemirror';

function App() {
  return (
    <Router>
        <nav className="main-nav">
          <ul>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/FindQuestion">Find Questions</Link></li>
            <li><Link to="/payment">Plans</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/post" element={
            <ProjectedRoute>
              <PostPage />
            </ProjectedRoute>
          } />
          <Route path="/FindQuestion" element={
            <ProjectedRoute>
              <FindQuestion />
            </ProjectedRoute>
          } />
          <Route path="/payment" element={
            <ProjectedRoute>
              <Payment />
            </ProjectedRoute>
          } />
        </Routes>
    </Router>
  );
}

export default App;