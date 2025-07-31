import React, { useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
function App() {
  const [formData, setFormData] = useState({
    auth:Cookies.get("auth"),
    img: '',
    had: '',
    p: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/addnews', formData);
      alert('Content saved!');
      setFormData({ auth:Cookies.get("auth"),img: '', had: '', p: '' });
    } catch (error) {
      alert('Error saving content',error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
      <h2>Add Events-</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={formData.img}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
        <input
          type="text"
          name="had"
          placeholder="heading"
          value={formData.had}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
        <textarea
          name="p"
          placeholder="pararaph"
          value={formData.p}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 10 }}
        ></textarea>
        <button className='abtn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
