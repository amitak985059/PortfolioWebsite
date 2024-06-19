// frontend/src/components/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contactDetails = { name, email, phone, message };

        try {
            const response = await axios.post('http://localhost:5000/contact', contactDetails);
            setResponseMessage(response.data.message);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setResponseMessage('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Phone:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default ContactUs;
