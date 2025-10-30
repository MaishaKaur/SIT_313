import React, { useState } from 'react';
import './email.css';

function Email() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      const response = await fetch('http://localhost:3001/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setEmail('');  // Clear on success
        alert('Subscribed! Check your email.');  // Simple feedback
      } else {
        alert('Subscription failed. Try again.');
      }
    } catch (error) {
      alert('Connection error. Is backend running?');
    }
  };

  return (
    <form id="email-registration" onSubmit={handleSubmit}>
      <div className="container">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
}

export default Email;