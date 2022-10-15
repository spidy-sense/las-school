import React from 'react';
import './gallery.css';

import image1 from '../../attachments/gallery-1.jpg';
import image2 from '../../attachments/gallery-2.jpg';
import image3 from '../../attachments/gallery-3.jpg';
import image4 from '../../attachments/gallery-4.jpg';

const Gallery = () => {
    return (
        <div className="gallery-block">
            <h2>Galllery</h2>

            <div className="grid-container-gallery">
                <div className="grid-item-gallery">
                    <img style={{ 'width': '20rem', 'height': '20rem' }} src={image1} />
                </div>
                <div className="grid-item-gallery">
                    <img style={{ 'width': '20rem','height': '20rem' }} src={image2} />
                </div>
                <div className="grid-item-gallery">
                    <img style={{ 'width': '20rem','height': '20rem' }} src={image3} />
                </div>
                <div className="grid-item-gallery">
                    <img style={{ 'width': '20rem','height': '20rem' }} src={image4} />
                </div>
            </div>

            <button className="headButton" style={{ 'marginTop': '2rem' }}>View More</button>
        </div>
    )
}

export default Gallery