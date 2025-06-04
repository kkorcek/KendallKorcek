import React from "react";
import {motion} from 'framer-motion';
import '../styles/business-card.css';

const BusinessCard = ({name, title, email, phone, linkedIn, image, resumeLink}) => {

    return (
        <motion.div
      className="business-card"
      initial={{ y: -240, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
<div className="business-card">
            <img src={image} alt="Profile" className="business-card-img" />
            <div className="card-content">
                <h2 className="business-card-name">{name}</h2>
                <p className="business-card-title">{title}</p>
                <p className="business-card-contact">{email}</p>
                <p className="business-card-contact">{phone}</p>
                <a
                    href={linkedIn}
                    className="business-card-contact linkedIn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    LinkedIn
                </a>
            </div>
        </div>
    </motion.div>
        
    );
}

export default BusinessCard;