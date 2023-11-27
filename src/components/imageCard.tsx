import React from "react";

type imageProp = {
  imageUrl: string;
  title: string;
  prompt?: string;
  createdBy?: string;
};

const ImageCard = ({ imageUrl, title, prompt, createdBy }: imageProp) => {
  return (
    <div className="relative overflow-hidden group rounded-md shadow-md mb-2">
      <img src={imageUrl} alt="NFT" className="object-cover w-[400px] h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="mb-1">{title}</p>
          {prompt && <p className="mb-1"> {prompt}</p>}
          {createdBy && <p>{createdBy}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
