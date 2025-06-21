"use client"
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import Painting1 from "@/image/1.png"
import Painting2 from "@/image/2.png"
import Painting3 from "@/image/3.png"
import Painting4 from "@/image/4.png"
import Link from "next/link";

export default function ProjectPage() {
  const { language } = useLanguage();

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto relative">
      
      <div className="absolute top-6 left-6">
        <Link href="/" className="text-gray-500 hover:text-gray-800 transition-colors">
          &larr; {language === 'zh' ? '回到首頁' : 'Back to Home'}
        </Link>
      </div>
      
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">
          {language === 'zh' ? '精選專案' : 'Featured Projects'}
        </h1>
      </div>

      <div className="flex flex-col w-full mt-8">
        <h2 className="text-xl font-bold mb-4 text-[#800020]">
          {language === 'zh' ? '軟體開發' : 'Software Development'}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4" >
        
        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square" 
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/demo/TeamUp.mp4" type="video/mp4" />
          </video>
          <div className="w-full h-1/3 backdrop-blur-lg bg-black/30 absolute bottom-0 left-0 text-white text-xl flex justify-center items-center">
            TeamUP
          </div>
        </div>

        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square" 
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/demo/StyleEase.mp4" type="video/mp4" />
          </video>
          <div className="w-full h-1/3 backdrop-blur-lg bg-black/30 absolute bottom-0 left-0 text-white text-xl flex justify-center items-center">
            StyleEase
          </div>
        </div>

      </div>

      <div className="flex flex-col w-full mt-8">
        <h2 className="text-xl font-bold mb-4 text-[#800020]">
          {language === 'zh' ? '創新創業' : 'Innovation & Entrepreneurship'}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4" >
        
        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square" 
          style={{ backgroundImage: `url(/inno/台北市政府產業發展局%20校園創業營隊成果發表優勝.JPG)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-full h-1/3 backdrop-blur-lg bg-black/30 absolute bottom-0 left-0 text-white text-xl flex justify-center items-center text-center">
            {language === 'zh' ? '台北市政府產業發展局<br/>校園創業營隊成果發表優勝' : 'Winner, Campus Entrepreneurship Camp<br/>Taipei City Government'}
          </div>
        </div>

        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square" 
          style={{ backgroundImage: `url(/inno/社會創新.JPG)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-full h-1/3 backdrop-blur-lg bg-black/30 absolute bottom-0 left-0 text-white text-xl flex justify-center items-center">
            {language === 'zh' ? '社會創新' : 'Social Innovation'}
          </div>
        </div>

      </div>

    </div>
  );
}
