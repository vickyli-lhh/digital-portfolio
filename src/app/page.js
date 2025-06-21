"use client"

import Image from "next/image";
import HeartImg from "@/../public/heart.png"
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";


export default function Home() {

  const [heart, setHeart] = useState(0);
  const { language, setLanguage } = useLanguage();

  const addHeart = function(){
    setHeart(heart+1);
  }

  return (
    <div className="flex flex-col w-full h-full bg-white justify-center items-center rounded-2xl p-8">
      
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {language === 'zh' ? "李昕璇的數位履歷" : "Vicky Li's Digital Portfolio"}
        </h1>
        <p className="text-gray-600 text-center">
          {language === 'zh' 
            ? "您好，我是李昕璇。目前就讀於政治大學，雙主修民族學與數位內容。" 
            : "Hi, I'm Vicky Li. Currently I'm a senior student double majoring in Ethnology and Digital Content."}
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setLanguage('en')}
          className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
            language === 'en' 
              ? 'bg-[#800020] text-white' 
              : 'bg-white text-[#800020] border-2 border-[#800020] hover:bg-gray-100'
          }`}
        >
          English
        </button>
        <button 
          onClick={() => setLanguage('zh')}
          className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
            language === 'zh' 
              ? 'bg-[#800020] text-white' 
              : 'bg-white text-[#800020] border-2 border-[#800020] hover:bg-gray-100'
          }`}
        >
          中文
        </button>
      </div>

      <div className="cursor-pointer flex flex-col justify-center items-center"
        onClick={addHeart}
      >
        <Image src={HeartImg} className="w-[68px]" alt="heart" />
        <div className=" text-2xl "> { heart } </div>
      </div>
      
    </div>
  );
}
