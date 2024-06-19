import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "./portfolio.css";

const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
};

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <h1>My Portfolio</h1>
            <div className="projects">
                {projects.map(project => (
                    <div key={project._id} className="project">
                        <Slider {...sliderSettings}>
                            {project.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`${project.title} ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                        <h2>{project.title}</h2>
                        <p>{truncate(project.description, 100)}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
