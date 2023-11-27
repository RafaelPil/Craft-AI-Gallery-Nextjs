import styles from "@/app/styles/Home.module.css";
import Header from "@/components/header";
import ImageCard from "@/components/imageCard";

const itemData = [
  {
    img: "https://ipfs.io/ipfs/QmZcRZu2cMJG9KUSta6WTrRek647WSG5mJZLhimwbC2y56",
    title: "Image 1",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://gibbonsgazette.org/wp-content/uploads/2022/04/43YAWLITTZJLZIQTCP2JSS4KSM.jpg",
    title: "Image 1",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://s3.ap-northeast-1.amazonaws.com/fio.one/live/wp-content/uploads/2021/12/ape3.png",
    title: "Image 1",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://lh3.googleusercontent.com/vYHTJERH8I_tGAZ33OpPiqT-bo4zynYuHJEkcMkDL1Po22q-NuQYJbn2DxD7KcHOxfz3BlpAKXrW6zSl1JJL4jS6GPHy-scASuQynw=w1400-k",
    title: "Image 1",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://assets-global.website-files.com/61ede842398e1b8a50ce8fd0/626831280acc3500ff828207_ape-8135-unnamed-1.png",
    title: "Image 1",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://gibbonsgazette.org/wp-content/uploads/2022/04/43YAWLITTZJLZIQTCP2JSS4KSM.jpg",
    title: "Image 1",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://s3.ap-northeast-1.amazonaws.com/fio.one/live/wp-content/uploads/2021/12/ape3.png",
    title: "Image 1",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
  {
    img: "https://lh3.googleusercontent.com/vYHTJERH8I_tGAZ33OpPiqT-bo4zynYuHJEkcMkDL1Po22q-NuQYJbn2DxD7KcHOxfz3BlpAKXrW6zSl1JJL4jS6GPHy-scASuQynw=w1400-k",
    title: "Image 1",
    prompt: "Describe the image",
    createdBy: "User 1",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-2 mb-14 px-36">
      {itemData.map((item, index) => (
        <ImageCard
          key={index}
          imageUrl={item.img}
          title={item.title}
          prompt={item.prompt}
          createdBy={item.createdBy}
        />
      ))}
    </div>
  );
}
