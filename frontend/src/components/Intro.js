import React from 'react';
import './Intro.css';
import profilePicture from '../asset/amit_picture.png'; // Ensure the path is correct

const Intro = () => {
    return (
        <div className="intro-section">
            <div className="intro-text">
                <h2>Hi, this is me Amit Kumar</h2>
                <p>
                    I am a motivated and enthusiastic web developer with a solid understanding of data structures and algorithms. I seek an internship/permanent position to apply and further develop my technical skills in a professional environment. Eager to contribute to a dynamic team and assist in creating innovative web solutions.
                </p>
                <h2>Skills</h2>
                <p>
                - Programming Languages: HTML, CSS, JavaScript, Python, C++, Java
- Web Development: React, Node.js, Express.js, Bootstrap
- Databases: MySQL, MongoDB
- Tools & Technologies: Git, GitHub, Visual Studio Code, Postman
- Other Skills: Problem-Solving, Team Collaboration, Agile Methodologies
</p>
            </div>
            <div className="intro-image">
                <img src={profilePicture} alt="Amit Kumar" />
            </div>
        </div>
    );
};

export default Intro;
