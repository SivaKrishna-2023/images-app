import React from 'react';
import './index.css'; 

function ImageDetailsPopup({ image, onClose }) {
  return (
    <div className="image-details-popup">
      <div className="image-details-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={image.urls.regular} alt={image.alt_description} />
        <div className="details">
          <h2>{image.alt_description}</h2>
          <p>By: {image.user.username}</p>
          <p>Likes: {image.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageDetailsPopup;