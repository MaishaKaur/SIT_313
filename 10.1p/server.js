require('dotenv').config();  // Loads .env
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = 3001;  // Different from React's 3000

// Middleware
app.use(express.json());  // Parse JSON bodies
app.use(cors({ origin: 'http://localhost:3000' }));  // Allow React to connect

// Set SendGrid key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Newsletter endpoin
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  const msg = {
    to: email,
    from: 'maisha4829.se24@chitkara.edu.in',  // Your verified SendGrid sender
    subject: 'Welcome to DEV@Deakin!',
    text: 'Thanks for subscribing! Get daily insider tips on development.',
  };

  try {
    await sgMail.send(msg);
    console.log(`Welcome email sent to ${email}`);
    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});