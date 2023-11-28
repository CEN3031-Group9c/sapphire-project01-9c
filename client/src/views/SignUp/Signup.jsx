import React, { useState } from 'react';
import './Signup.css'; // Import a CSS file for styling
import Logo from '../../assets/CodeSparks_logo.png';
import NavBar from "../../components/NavBar/NavBar"

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to submit the form data to your backend for registration.
    console.log(formData); // For demonstration purposes, log the data to the console.
  };

  return (
    <div className="container">
    <div className="page-wrapper">
    <NavBar />
    <div className="signup-container">
      <img src={Logo} id='CodeSparks-logo' alt='logo' className="CodeSparks_logo"/>
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Researcher">Researcher</option>
            <option value="ContentCreator">Content Creator</option>
          </select>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Signup;