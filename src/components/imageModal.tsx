// ImageModal.jsx
import React, { useRef, useEffect } from "react";

const ImageModal = ({ imageUrl, onClose }) => {
  const modalRef = useRef();

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div
        ref={modalRef}
        className="max-w-screen-lg max-h-screen overflow-hidden"
      >
        <img
          src={imageUrl}
          alt="Modal"
          className="w-500 h-880 object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
