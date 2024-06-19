import React, { useState } from 'react';
import axios from 'axios';
import './NewProject.css';

const NewProject = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [images, setImages] = useState(['']);

    const handleImageChange = (index, value) => {
        const newImages = [...images];
        newImages[index] = value;
        setImages(newImages);
    };

    const addImageField = () => {
        setImages([...images, '']);
    };

    const removeImageField = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProject = { title, description, link, images };

        try {
            await axios.post('http://localhost:5000/projects', newProject);
            setTitle('');
            setDescription('');
            setLink('');
            setImages(['']);
            alert('Project added successfully!');
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    return (
        <div className="new-project-form">
            <h2>Add New Project</h2>
            <form onSubmit={handleSubmit} disabled = {true}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </label>
                <label>
                    Link:
                    <input type="url" value={link} onChange={(e) => setLink(e.target.value)} required />
                </label>
                {images.map((image, index) => (
                    <div key={index} className="image-input">
                        <label>
                            Image URL {index + 1}:
                            <input
                                type="url"
                                value={image}
                                onChange={(e) => handleImageChange(index, e.target.value)}
                            />
                        </label>
                        <button type="button" onClick={() => removeImageField(index)}>Remove Image</button>
                    </div>
                ))}
                <button type="button" onClick={addImageField}>Add Another Image</button>
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default NewProject;
