"use client"
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import Link from "next/link";

export default function HostPage() {
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
          {language === 'zh' ? '華語教學與主持' : 'Mandarin Teaching & Hosting'}
        </h1>
      </div>

      <div className="flex flex-col w-full mt-8">
        <h2 className="text-xl font-bold mb-4 text-[#800020]">
          {language === 'zh' ? '華語教學' : 'Mandarin Teaching'}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4" >
        
        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square flex items-center justify-center" 
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <img 
            src="/mandarin/mandarin1.JPG" 
            alt={language === 'zh' ? '華語教學一' : 'Mandarin Teaching 1'} 
            className="w-full h-full object-contain"
          />
        </div>

        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square flex items-center justify-center" 
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <img 
            src="/mandarin/mandarin2.JPG" 
            alt={language === 'zh' ? '華語教學二' : 'Mandarin Teaching 2'}
            className="w-full h-full object-contain"
          />
        </div>

        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square flex items-center justify-center" 
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <img 
            src="/mandarin/mandarin3.jpg" 
            alt={language === 'zh' ? '華語教學三' : 'Mandarin Teaching 3'}
            className="w-full h-full object-contain"
          />
        </div>

      </div>

      <div className="flex flex-col w-full mt-8">
        <h2 className="text-xl font-bold mb-4 text-[#800020]">
          {language === 'zh' ? '主持' : 'Hosting'}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4" >
        
        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square flex items-center justify-center" 
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <img 
            src="/hosting/主持人.jpg" 
            alt={language === 'zh' ? '主持人' : 'Host'}
            className="w-full h-full object-contain"
          />
          <div className="w-full h-1/3 backdrop-blur-lg bg-black/30 absolute bottom-0 left-0 text-white text-lg flex justify-center items-center">
            {language === 'zh' ? '主持人' : 'Host'}
          </div>
        </div>

        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square flex items-center justify-center" 
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <img 
            src="/hosting/校園馬拉松主持群.jpg" 
            alt={language === 'zh' ? '校園馬拉松主持群' : 'Campus Marathon Host Group'}
            className="w-full h-full object-contain"
          />
          <div className="w-full h-1/3 backdrop-blur-lg bg-black/30 absolute bottom-0 left-0 text-white text-lg flex justify-center items-center text-center">
            {language === 'zh' ? '校園馬拉松主持群' : 'Campus Marathon Host Group'}
          </div>
        </div>

        <div 
          className="bg-gray-200 rounded-2xl relative overflow-hidden aspect-square flex items-center justify-center" 
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <img 
            src="/hosting/數位內容畢業展開幕茶會%20主持人.JPG" 
            alt={language === 'zh' ? '數位內容畢業展開幕茶會主持人' : 'Host, Opening Ceremony of the Digital Content Graduation Exhibition'}
            className="w-full h-full object-contain"
          />
          <div className="w-full h-1/3 backdrop-blur-lg bg-black/30 absolute bottom-0 left-0 text-white text-lg flex justify-center items-center text-center">
            {language === 'zh' ? '數位內容畢業展開幕茶會主持人' : 'Host, Opening Ceremony'}
          </div>
        </div>

      </div>

      
    </div>
  );
}
