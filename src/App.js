import React, { useState } from 'react';
import './App.css';
import Nav from "./Components/Nav"

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    gender: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name === '',
      email: formData.email === '' || !validateEmail(formData.email),
      gender: formData.gender === ''
    };

    setErrors(newErrors);

    const formIsValid = !Object.values(newErrors).includes(true);

    if (formIsValid) {
      alert('Form submitted successfully!');
      // Optionally, you can add code here to submit the form data to the server
    }
  };

  return (
   <div>   
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <Nav/>
        <h2>Basic Details Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <small className="error">Name is required</small>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <small className="error">Valid email is required</small>}
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select 
            id="gender" 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <small className="error">Gender is required</small>}
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
    </div>

);
}

export default App;
