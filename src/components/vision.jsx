import React from 'react';
import H2 from './h2';

const Vision = () => {
  return (
    <div className='main'>
      <H2 h2="Vision & Mission"/>
      
      <div className="vision-container" style={{
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        
        <div style={{
          marginBottom: '30px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          borderLeft: '4px solid #34495e'
        }}>
          <h3 style={{
            color: '#2c3e50',
            fontSize: '1.5rem',
            marginBottom: '15px'
          }}>Our Vision</h3>
          <p style={{
            color: '#34495e',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            To be a leading institution of higher education that nurtures academic excellence, 
            innovation, and character development, preparing students to become responsible 
            global citizens and future leaders who contribute positively to society.
          </p>
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          borderLeft: '4px solid #34495e'
        }}>
          <h3 style={{
            color: '#2c3e50',
            fontSize: '1.5rem',
            marginBottom: '15px'
          }}>Our Mission</h3>
          <p style={{
            color: '#34495e',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '15px'
          }}>
            Our mission is to provide quality education through:
          </p>
          <ul style={{
            color: '#34495e',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            paddingLeft: '20px'
          }}>
            <li>Fostering academic excellence and research-oriented learning</li>
            <li>Developing critical thinking and problem-solving skills</li>
            <li>Promoting ethical values and social responsibility</li>
            <li>Creating an inclusive environment that respects diversity</li>
            <li>Equipping students with practical skills for professional success</li>
            <li>Encouraging innovation and entrepreneurship</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vision; 