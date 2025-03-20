import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      
      <div className="w-[600px] h-[90vh] rounded-2xl bg-white flex 
        justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">

        <Image src={AvatarImg} alt="Avatar" className="w-[80px] h-[80px] rounded-full" />
        
        <h1 className="mt-2">古健樺</h1>
        <p className="max-w-[380px] text-center">
          我是一個熱愛學習的學生，喜歡研究各種技術和工具，希望能夠不斷提升自己的能力。
        </p>
        {/* 社群連結 */}
        <div className="flex gap-2 my-5">
          <a href="https://google.com" target="_blank">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://google.com" target="_blank">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://google.com" target="_blank">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://google.com" target="_blank">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://google.com" target="_blank">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
        </div>

        {/* 頁面切換 */}
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">學經歷</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類一</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類二</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類一</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類二</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類一</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類二</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類一</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類二</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類一</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類二</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div>
        </div>
      
      </div>
      
    </div>
  );
}
