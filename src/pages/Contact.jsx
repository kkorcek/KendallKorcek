import React from 'react';
import '../styles/contact.css';
import BusinessCard from '../components/buisness-card';

const Contact = () => {
  return (
    <div className="centered-screen">
      <BusinessCard
        name="Kendall Korcek"
        title="Software Engineer"
        email="kendallkorcek10@gmail.com"
        phone="(734) 864-2364"
        linkedIn="https://www.linkedin.com/in/kendall-korcek/"
        image="/headshot.jpg"
      />
    </div>
  );
};

export default Contact;
