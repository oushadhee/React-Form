import React, { useState } from 'react';

export default function SecondPage() {
  const [formData, setFormData] = useState({
    email: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for email and description
    if (formData.email && formData.description) {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setMessage('Form saved successfully!');
      } else {
        setMessage('Please enter a valid email address.');
      }
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="container">
      <h1>Enter your details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Enter a description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>

      {/* Display the message */}
      {message && (
        <div style={{ marginTop: '20px', color: message.includes('successfully') ? 'green' : 'red' }}>
          <strong>{message}</strong>
        </div>
      )}
    </div>
  );
}
