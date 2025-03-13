import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      
      <div className="w-[600px] h-[600px] rounded-2xl bg-white flex justify-center items-center">
        {/* <img src={AvatarImg.src} className="w-[80px] h-[80px] rounded-full" /> */}
        <Image src={AvatarImg} alt="Avatar" className="w-[80px] h-[80px] rounded-full" />
        <h1>古健樺</h1>
      </div>
      
    </div>
  );
}
