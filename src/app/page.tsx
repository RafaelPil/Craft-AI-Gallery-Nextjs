"use client";
import { useState } from "react";
import styles from "@/app/styles/Home.module.css";
import GenerateImageModal from "@/components/generateImageModal";
import Header from "@/components/header";
import ImageCard from "@/components/imageCard";
import ImageModal from "@/components/imageModal";

const itemData = [
  {
    img: "https://www.thestreet.com/.image/t_share/MTgyMDU5NDcwMTc4NzU1NzE1/boredape1.jpg",
    title: "Image 1",
    prompt: "Describe the image prompt",
    createdBy: "User 1",
  },
  {
    img: "https://gibbonsgazette.org/wp-content/uploads/2022/04/43YAWLITTZJLZIQTCP2JSS4KSM.jpg",
    title: "Image 2",
    prompt: "Describe the image",
    createdBy: "User 2",
  },
  {
    img: "https://s3.ap-northeast-1.amazonaws.com/fio.one/live/wp-content/uploads/2021/12/ape3.png",
    title: "Image 3",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://lh3.googleusercontent.com/vYHTJERH8I_tGAZ33OpPiqT-bo4zynYuHJEkcMkDL1Po22q-NuQYJbn2DxD7KcHOxfz3BlpAKXrW6zSl1JJL4jS6GPHy-scASuQynw=w1400-k",
    title: "Image 4",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://assets-global.website-files.com/61ede842398e1b8a50ce8fd0/626831280acc3500ff828207_ape-8135-unnamed-1.png",
    title: "Image 5",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://gibbonsgazette.org/wp-content/uploads/2022/04/43YAWLITTZJLZIQTCP2JSS4KSM.jpg",
    title: "Image 6",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://s3.ap-northeast-1.amazonaws.com/fio.one/live/wp-content/uploads/2021/12/ape3.png",
    title: "Image 7",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://lh3.googleusercontent.com/vYHTJERH8I_tGAZ33OpPiqT-bo4zynYuHJEkcMkDL1Po22q-NuQYJbn2DxD7KcHOxfz3BlpAKXrW6zSl1JJL4jS6GPHy-scASuQynw=w1400-k",
    title: "Image 8",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);

  const filteredData = itemData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.prompt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const handleOpenGenerateModal = (index) => {
    setSelectedImageIndex(index);
    setIsGenerateModalOpen(true);
  };

  // New function to close the generate image modal
  const handleCloseGenerateModal = () => {
    setIsGenerateModalOpen(false);
    setSelectedImageIndex(null);
  };

  return (
    <>
      <Header
        setSearchQuery={setSearchQuery}
        onOpenGenerateModal={handleOpenGenerateModal}
      />

      <div className="grid grid-cols-4 gap-2 mb-14 px-56 pt-36">
        {filteredData.map((item, index) => (
          <ImageCard
            key={index}
            imageUrl={item.img}
            title={item.title}
            prompt={item.prompt}
            createdBy={item.createdBy}
            onImageClick={() => handleImageClick(index)}
            index={index}
          />
        ))}
      </div>

      {isModalOpen && selectedImageIndex !== null && (
        <ImageModal
          imageUrl={filteredData[selectedImageIndex].img}
          title={filteredData[selectedImageIndex].title}
          prompt={filteredData[selectedImageIndex].prompt}
          createdBy={filteredData[selectedImageIndex].createdBy}
          onClose={handleCloseModal}
        />
      )}
      {isGenerateModalOpen && selectedImageIndex !== null && (
        <GenerateImageModal onClose={handleCloseGenerateModal} />
      )}
    </>
  );
}
