import React, { useState } from 'react';

export default function FirstPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    text: '',
    photo: null,
  });

  const [submitMessage, setSubmitMessage] = useState(''); // State for submit message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoUpload = (e) => {
    setFormData({
      ...formData,
      photo: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleRemovePhoto = () => {
    setFormData({
      ...formData,
      photo: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here we check if the form is filled out correctly
    if (formData.title && formData.description && formData.text) {
      setSubmitMessage('Form submitted successfully!');
    } else {
      setSubmitMessage('Please fill in all fields.');
    }

    console.log(formData); // For debugging, logs the form data
  };

  return (
    <div className="container">
      <h1>Form In React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
  <label htmlFor="description">Description</label>
  <textarea
    placeholder="Enter Description"
    cols="30"
    rows="10"
    name="description"
    value={formData.description}
    onChange={handleChange}
  />
</div>


        <div>
          <label htmlFor="text">Text</label>
          <textarea
            placeholder="Enter Text"
            cols = "30"
            rows="10"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="photo">Upload Photo</label>
          <input type="file" name="photo" onChange={handlePhotoUpload} />
        </div>

        {formData.photo && (
          <div>
            <img src={formData.photo} alt="Uploaded" style={{ width: '150px', height: '150px' }} />
            <button type="button" onClick={handleRemovePhoto}>
              Remove Photo
            </button>
          </div>
        )}

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Display the message after form submission */}
      {submitMessage && (
        <div style={{ marginTop: '20px', color: submitMessage.includes('successfully') ? 'green' : 'red' }}>
          <strong>{submitMessage}</strong>
        </div>
      )}
    </div>
  );
}
