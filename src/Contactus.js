import React, { useState } from 'react';
import axios from 'axios';

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    company_name: '',
    company_niche: '',
    company_website: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:5000/submit-form', formData);
      console.log(response.data); // Check the response from the server
      alert('Your message has been sent!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form!');
    }
  };

  return (
    <div id="container">
      <h1 className='h1'>&bull; Schedule Your Call &bull;</h1>
      <div className="underline"></div>
      <form onSubmit={handleSubmit} method="post" id="contact_form">
        <div className="name">
          <label htmlFor="name"></label>
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            id="name_input" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="email">
          <label htmlFor="email"></label>
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            id="email_input" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="name">
          <label htmlFor="telephone"></label>
          <input 
            type="text" 
            placeholder="Phone Number" 
            name="telephone" 
            id="telephone_input" 
            value={formData.telephone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="email">
          <label htmlFor="company_name"></label>
          <input 
            type="text" 
            placeholder="Company Name" 
            name="company_name" 
            id="company_name_input" 
            value={formData.company_name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="name">
          <label htmlFor="company_niche"></label>
          <input 
            type="text" 
            placeholder="Company Niche" 
            name="company_niche" 
            id="company_niche_input" 
            value={formData.company_niche} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="email">
          <label htmlFor="company_website"></label>
          <input 
            type="text" 
            placeholder="Company Website" 
            name="company_website" 
            id="company_website_input" 
            value={formData.company_website} 
            onChange={handleChange} 
          />
        </div>
        <div className="submit">
          <input type="submit" value="Send Message" id="form_button" />
        </div>
      </form>
    </div>
  );
}
