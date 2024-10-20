import { useState, useEffect } from 'react';
import './HinhAnh.css'; 

export const HinhAnh = () => {
    const images = [
        '/src/assets/img/Booking1.jpg',
        '/src/assets/img/Booking2.jpg',
        '/src/assets/img/Booking3.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};
