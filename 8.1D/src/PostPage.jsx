import React, { useState } from 'react';
import ARTICLES from './ARTICLES';
import CustomBar from './QUESTION';
import './PostPage.css';

function PostPage() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="post-container">
      <h2>Post</h2>
      <h3>New Post</h3>
      <p>Choose Type of Post</p>
      <select 
        className="post-select"
        value={selectedOption} // this is setting the value of the select dropdown to the current state of selectedOption
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select Post Type</option>
        <option value="question">Ask Question</option>
        <option value="article">Write Article</option>
      </select>

      {selectedOption === 'question' && <CustomBar />}
      {selectedOption === 'article' && <ARTICLES />}
      
      {!selectedOption && (
        <p className="select-message">
          Please select a post type from the dropdown above
        </p>
      )}
    </div>
  );
}

export default PostPage;