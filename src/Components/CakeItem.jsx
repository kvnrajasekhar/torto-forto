import  { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import props from 'prop-types';

const CakeItem = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { filters, generatedImage } = location.state || {};
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (!filters || !generatedImage) {
            navigate('/shop');
        }
    }, [filters, generatedImage, navigate]);

    const handleSubmit = () => {
        // Handle the submission of the description and previous prompt
        console.log('Description:', description);
        fetch('http://localhost:5555/cakerequest', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            description: description,
            imageid: props.dalleimage.imageUrl,
            prompt: props.dalleimage.prompt,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            navigate('/marketplace');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        // You can add further logic here, such as sending data to an API
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Cake Item</h1>
            {generatedImage && (
                <div className="mb-4">
                    <img src={props.dalleimage.imageUrl} alt="Generated Cake" className="w-full h-auto" />
                </div>
            )}

            <div className="mb-4">
                <label className="block font-medium mb-2">Description for Making Process</label>
                <textarea
                    className="w-full border border-gray-300 p-2 rounded"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2">Previous Prompt Given for Image Generation</label>
                <textarea
                    className="w-full border border-gray-300 p-2 rounded"
                    rows="4"
                    value={props.dalleimage.prompt}
                />
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

CakeItem.propTypes = {
    dalleimage: props.shape({
        prompt: props.string.isRequired,
        imageUrl: props.string.isRequired,
    }).isRequired,
};

export default CakeItem;
