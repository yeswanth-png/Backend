import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Signup successful:', data);
      // Redirect or show success message
    } else {
      console.error('Signup failed');
      // Show error message
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            placeholder="Enter your full name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            placeholder="Enter your email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="Create a password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>

        <button type="submit">Register</button>

        <p className="signin-text">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
