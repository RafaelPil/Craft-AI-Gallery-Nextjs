// ImageModal.jsx
import React, { useRef, useEffect, useState } from "react";

const ImageModal = ({ imageUrl, onClose, title, prompt, createdBy }) => {
  const modalRef = useRef();
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false); // Added state for like

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    // Add your logic for handling the comment here
    console.log("Added comment:", comment);
    setComment(""); // Clear the input field after adding the comment
  };

  const handleLikeToggle = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div
        ref={modalRef}
        className="flex max-w-screen-lg max-h-screen overflow-hidden"
      >
        <div className="flex-shrink-0 w-400 h-600 relative overflow-hidden">
          <img
            src={imageUrl}
            alt="Modal"
            className="w-[400px] h-[600px] object-cover rounded-tr-none rounded-br-none rounded-l-md"
          />
        </div>
        <div className="flex-shrink-0 w-80 bg-black p-4 flex flex-col rounded-r-md relative">
          {/* Like button in the top-right corner */}
          <button
            onClick={handleLikeToggle}
            className={`absolute top-2 right-2 text-white focus:outline-none ${
              isLiked ? "text-red-500" : ""
            }`}
          >
            {isLiked ? "❤️ Liked" : "🤍 Like"}
          </button>
          {/* Title, prompt, and createdBy details */}
          <div className="text-white mt-8">
            <p className="text-lg font-bold">{title}</p>
            <p className="text-sm">{prompt}</p>
            <p className="text-sm">{createdBy}</p>
          </div>
          {/* Comment input and add button at the bottom */}
          <div className="mt-auto">
            <div className="mb-4 flex">
              <input
                type="text"
                value={comment}
                onChange={handleInputChange}
                placeholder="Add a comment..."
                className="w-full p-2 bg-gray-800 text-white border-none outline-none"
              />
            </div>
            <button
              onClick={handleAddComment}
              className="w-full bg-[#2ecc71] text-white p-2"
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
