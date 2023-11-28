"use client";
import React, { useState } from "react";

type imageProp = {
  imageUrl: string;
  title: string;
  prompt?: string;
  createdBy?: string;
};

const ImageCard = ({
  imageUrl,
  title,
  prompt,
  createdBy,
  onImageClick,
  index,
}: imageProp) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = (e) => {
    // Prevent the click event from propagating to the parent container
    e.stopPropagation();

    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const handleImageClick = () => {
    onImageClick(index);
  };

  return (
    <div
      className="relative overflow-hidden group rounded-md shadow-md cursor-pointer"
      onClick={handleImageClick}
    >
      <img
        src={imageUrl}
        className="rounded-md
        cursor-pointer relative z-0"
        width={500}
        height={800}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="mb-1">{title}</p>
          {prompt && <p className="mb-1"> {prompt}</p>}
          {createdBy && <p>{createdBy}</p>}
        </div>
      </div>
      <div className="absolute top-0 right-0 p-4">
        <button
          onClick={(e) => handleLikeToggle(e)}
          className={`text-white focus:outline-none ${
            isLiked ? "text-red-500" : ""
          }`}
        >
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
