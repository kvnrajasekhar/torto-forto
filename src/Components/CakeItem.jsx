import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const CakeItem = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { filters, generatedImage } = location.state || {};
    const [description, setDescription] = useState('');
    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5555/cakerequest/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            setPrompt(data.prompt);
            setImage(data._id);
            setImageUrl(data.imageUrl);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [id]);

    const handleSubmit = () => {
        // Handle the submission of the description and previous prompt
        console.log('Description:', description);
        console.log('Image ID:', image);
        console.log('Prompt:', prompt);

        if (!image) {
            console.error('Image ID is not set');
            return;
        }

        fetch('http://localhost:5555/cakerequest/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Description: description,
                imageId: image,
                Prompt: prompt,
                imageUrl: imageUrl,
            }),
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text) });
            }
            return response.json();
        })
        .then(data => {
            const user = 1; // Replace with actual user ID if available
            console.log('cake request created:', data);
            navigate(`/account/${user}/marketplace`);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Cake Item</h1>
            <div className="mb-4">
                <img src={imageUrl} alt="Generated Cake" className="w-full h-auto" />
            </div>
            <div className="mb-4">
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
                Submit
            </button>
        </div>
    );
};

export default CakeItem;