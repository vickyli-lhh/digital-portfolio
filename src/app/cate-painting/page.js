import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Painting1 from "@/image/1.png"

export default function CatePainting() {


  let dog = "bg-red-200";

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6">
      
      {/* <img src={Painting1.src} className="w-full h-full object-cover rounded-2xl" /> */}
      
      <Image src={Painting1} />

      

      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">
          繪畫作品
        </h1>
        <h3 >
          我精彩的繪圖作品，我擅長用水彩勾勒出細膩的線條，並且用色調和來表現出不同的情感。
        </h3>
      </div>

      <div className="flex flex-col w-full gap-4 mt-3" >
        
        <div className="grid grid-cols-3 ${dog} w-full gap-4 h-[33vh]">

          <div 
            className={`bg-gray-200 col-span-2 rounded-2xl`} 

              style={
                { backgroundImage: `url(${Painting1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              }
          >


            內容一
          </div>
          <div className="bg-gray-200 rounded-2xl">
            內容二
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          <div className="bg-gray-200 rounded-2xl">
            內容四
          </div>
          <div className="bg-gray-200 rounded-2xl">
            內容五
          </div>
        </div>

      </div>

      
    </div>
  );
}
