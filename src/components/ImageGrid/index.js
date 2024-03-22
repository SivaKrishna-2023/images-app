import React, { useState } from 'react';
import './index.css'
import ImageDetailsPopup from '../ImageDetailsPopup';

function ImageGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-grid">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.regular}
          alt={image.alt_description}
          className="image"
          onClick={() => handleImageClick(image)}
        />
      ))}
      {selectedImage && (
        <ImageDetailsPopup
          image={selectedImage}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default ImageGrid;
