import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const offset = 200; // Adjust this value to control when the footer appears
        if (scrollTop > offset) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer ${showFooter ? 'visible' : ''}`}>
            <div className="footer-content">
                <a href="mailto:amitak985059@gmail.com" className="footer-link email">
                    Email: amitak985059@gmail.com
                </a>
                <a href="https://www.instagram.com/amitkumar_1087?igsh=bnhnM3ZxeGhhYW1r" target="_blank" rel="noopener noreferrer" className="footer-link instagram">
                    Instagram
                </a>
                <a href="https://www.snapchat.com/add/amitk247204?share_id=o7yx9I9SfcI&locale=en-IN" target="_blank" rel="noopener noreferrer" className="footer-link facebook">
                    Snapchat
                </a>
                <h7> Code of this website is availaible in resume </h7>
            </div>
        </footer>
    );
};

export default Footer;
