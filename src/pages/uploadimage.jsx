import React, { useState } from "react";
import "../csspage/uploadimage.css";


const Uploadimage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleReset = () => {
    setImage(null);
  };

  return (
    <div className="login-container">
    <div className="upload-container">
      <h2>⬆️ Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {image && (
        <div className="image-preview">
          <img src={image} alt="Uploaded Preview" />
          <button onClick={handleReset} className="reset-btn">❌ Remove</button>
        </div>
      )}
    </div>
    </div>
  );
};


export default Uploadimage
