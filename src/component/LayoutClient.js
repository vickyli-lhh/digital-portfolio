"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import AvatarImg from "@/../public/avatar.jpg";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }) {
  const { language } = useLanguage();
  const pathname = usePathname();

  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-yellow-100 p-8">
      <div className=" min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-white flex 
      justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
        
        <Image src={AvatarImg} alt="Avatar" className="w-[80px] h-[80px] rounded-full" />
    
        <h1 className="mt-2 font-bold">李昕璇</h1>
        <div className="max-w-[380px] text-center flex justify-center">
           <span className="text-[#800020]">{language === 'zh' ? '軟體開發與專案管理 / 創新與創業 / 華語教學 / 活動主持' : 'Software Development & Project Management / Innovation / Mandarin Language Teaching / Event Hosting'}</span>
        </div>
        
        {/* 社群連結 */}
        <div className="flex gap-2 my-5">
          <a href="https://www.facebook.com/profile.php?id=100070094467840&mibextid=rS40aB7S9Ucbxw6v" target="_blank">
            <Image src="/brand-facebook.svg" alt="Facebook" width={40} height={40} />
          </a>
          <a href="https://www.instagram.com/vickyli03?igsh=dnJ3ZDN3ZWltMGox&utm_source=qr" target="_blank">
            <Image src="/brand-instagram.svg" alt="Instagram" width={40} height={40} />
          </a>
          <a href="https://www.linkedin.com/in/vicky-li-09853a248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
            <Image src="/brand-linkedin.svg" alt="LinkedIn" width={40} height={40} />
          </a>
          <a href="https://github.com/vickyli-lhh" target="_blank">
            <Image src="/brand-github.svg" alt="GitHub" width={40} height={40} />
          </a>
          <a href="https://gitlab.com/liv8872" target="_blank">
            <Image src="/brand-gitlab.svg" alt="GitLab" width={40} height={40} />
          </a>
        </div>

        {/* 頁面切換 */}
        <div className="w-full flex flex-col gap-2">
          
          <Link href="/about" className="w-full">
            <button className={`w-full h-[44px] rounded-xl flex items-center justify-center text-center font-semibold transition-colors ${pathname === '/about' ? 'bg-[#800020] text-white' : 'bg-white text-[#800020] border-2 border-[#800020] hover:bg-gray-100'}`}>{language === 'zh' ? '關於我' : 'About Me'}</button>
          </Link>

          <Link href="/project" className="w-full">
            <button className={`w-full h-[44px] rounded-xl flex items-center justify-center text-center font-semibold transition-colors ${pathname === '/project' ? 'bg-[#800020] text-white' : 'bg-white text-[#800020] border-2 border-[#800020] hover:bg-gray-100'}`}>{language === 'zh' ? '專案' : 'Projects'}</button>
          </Link>

          <Link href="/host" className="w-full">
            <button className={`w-full h-[44px] rounded-xl flex items-center justify-center text-center font-semibold transition-colors ${pathname === '/host' ? 'bg-[#800020] text-white' : 'bg-white text-[#800020] border-2 border-[#800020] hover:bg-gray-100'}`}>{language === 'zh' ? '主持' : 'Host & Teach'}</button>
          </Link>
        </div>

      </div>

      {children}

    </div>
  );
} 