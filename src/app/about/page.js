"use client"

import Image from "next/image";
import AvatarImg from "@/../public/avatar.jpg";
import { useLanguage } from "../../context/LanguageContext";
import Link from "next/link";

export default function About() {
  const { language } = useLanguage();

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto relative">
      
      <div className="absolute top-6 left-6">
        <Link href="/" className="text-gray-500 hover:text-gray-800 transition-colors">
          &larr; {language === 'zh' ? '回到首頁' : 'Back to Home'}
        </Link>
      </div>

      {/* 個人介紹區塊 */}
      <div className="flex flex-col w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          {language === 'zh' ? '李昕璇' : 'Vicky Li'}
        </h1>
        
        {/* 個人資料卡片 */}
        {/* 
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Image 
              src={AvatarImg} 
              alt="個人照片" 
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">李昕璇</h2>
              <p className="text-gray-600 mb-4">
                專案管理/軟體開發/數位內容/創新創業/華語教學/主持人
              </p>
              <p className="text-gray-700 leading-relaxed">
                自介
              </p>
            </div>
          </div>
        </div>
        */}

        {/* 教育經歷 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#800020]">{language === 'zh' ? '教育經歷' : 'Education'}</h3>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{language === 'zh' ? '國立政治大學' : 'National Chengchi University'}</h4>
                <p className="text-gray-700 mb-2 text-base">{language === 'zh' ? '數位內容與科技 學士學位學程' : 'Bachelor of Science in Digital Content and Technology'}</p>
                <p className="text-gray-700 mb-2 text-base">{language === 'zh' ? '民族學系' : 'Bachelor of Arts in Ethnology'}</p>
                <p className="text-gray-700 mb-2 text-base">{language === 'zh' ? '輔修資訊管理學系' : 'Minor in Information Management'}</p>
              </div>
              <div className="text-gray-500 text-sm md:text-right">
                {language === 'zh' ? '2021.09 – 2026.01' : 'Sep 2021 – Jan 2026'}
              </div>
            </div>
          </div>
        </div>

        {/* 專案經歷 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#800020]">{language === 'zh' ? '專案經歷' : 'Projects'}</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                <h4 className="font-semibold">{language === 'zh' ? 'TeamUP (side project媒合平台)' : 'TeamUP (Side Project Matching Platform)'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2024.01 – 2024.06' : 'Jan 2024 – Jun 2024'}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'zh' 
                  ? '這是一個協助專業技能者進行媒合的平台，使用者可以自由發佈專案，定義合作需求，並透過一鍵申請功能加入感興趣的專案。平台同時支援建立媒合進度、查看申請者資訊，以及快速回覆申請狀態等功能。負責後端與資料庫的開發，採用 Next.js API Routes、Node.js 與 Firebase 技術實作。'
                  : 'A platform to help professionals match with side projects. Users can post projects, define collaboration needs, and apply to join projects with a single click. The platform also supports tracking matching progress, viewing applicant information, and quickly responding to applications. Responsible for backend and database development using Next.js API Routes, Node.js, and Firebase.'}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                <h4 className="font-semibold">{language === 'zh' ? 'StyleEase (智慧衣櫥)' : 'StyleEase (Smart Wardrobe)'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2024.10 – 2025.01' : 'Oct 2024 – Jan 2025'}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'zh'
                  ? '主導系統架構設計與資料流程規劃；協調前後端整合與資料庫開發。建置 AI 基礎的穿搭建議模組並實作 MVP 以進行快速迭代。展現跨職能協作、技術執行與產品交付的能力。'
                  : 'Led system architecture design and data flow planning; coordinated frontend-backend integration and database development. Built AI-based outfit suggestion module and implemented an MVP for rapid iteration. Demonstrated capabilities in cross-functional collaboration, technical execution, and product delivery.'}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                <h4 className="font-semibold">{language === 'zh' ? 'Hunger Saver（剩食資訊交換平台）' : 'Hunger Saver (Surplus Food Exchange Platform)'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2022.09 – 2023.01' : 'Sep 2022 – Jan 2023'}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'zh'
                  ? '設計系統介面與平台工作流程；主導核心功能邏輯開發（貼文創建、留言互動、自動下架等）。獲得需求分析、資訊架構與跨部門溝通的實作經驗。使用語言：Java。'
                  : 'Designed the system interface and platform workflow; led the logic development for core functions (post creation, comment interaction, automatic takedown, etc.). Gained hands-on experience in requirement analysis, information architecture, and interdepartmental communication. Tech stack: Java.'}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                <h4 className="font-semibold">{language === 'zh' ? '圖書館座位預約系統' : 'Library Seat Reservation System'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2022.02 – 2022.06' : 'Feb 2022 – Jun 2022'}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'zh'
                  ? '擔任專案經理與使用者研究負責人。進行訪談、設計問卷並分析使用者流程。製作系統規格與提案文件；實作即時座位可用性功能以提升校園空間利用率。'
                  : 'Served as project manager and user research lead. Conducted interviews, designed surveys, and analyzed user flows. Produced system specifications and proposal documents; implemented real-time seat availability features to enhance campus space utilization.'}
              </p>
            </div>
          </div>
        </div>

        {/* 學術研究與產業應用 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#800020]">{language === 'zh' ? '學術研究與產業應用' : 'Academic Research & Industrial Application'}</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                <h4 className="font-semibold">{language === 'zh' ? '德盛管理制度優化計劃' : 'Management System Optimization Plan for Der Sheng'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2024.10 – 2025.01' : 'Oct 2024 – Jan 2025'}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'zh'
                  ? '透過 SWOT 分析與因果樹枝圖深入診斷企業管理與營運問題，提出數據驅動的策略解決方案。建議企業導入人才招募機制與績效考核制度，提升人力資本配置與內部管理效率。設計企業內部創新管理框架，優化技術轉移與新市場擴展的流程，促進產學合作。'
                  : 'Diagnosed corporate management and operational issues through SWOT analysis and cause-and-effect diagrams, proposing data-driven strategic solutions. Recommended implementing a talent recruitment mechanism and performance appraisal system to enhance human capital allocation and internal management efficiency. Designed an internal innovation management framework to optimize technology transfer and new market expansion processes, fostering industry-academia collaboration.'}
              </p>
            </div>
          </div>
        </div>

        {/* 得獎紀錄 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#800020]">{language === 'zh' ? '得獎紀錄' : 'Awards'}</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                <h4 className="font-semibold">{language === 'zh' ? 'Go Pin!（智能媒合平台）' : 'Go Pin! (Intelligent Matching Platform)'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2024.11' : 'Nov 2024'}</span>
              </div>
              <p className="text-gray-600 mb-2 font-semibold">{language === 'zh' ? '台北市政府產業發展局_校園創業營隊成果發表會 優勝' : 'Winner, Campus Entrepreneurship Camp Demo Day, Taipei City Government Department of Economic Development'}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'zh' 
                  ? '提案：Go Pin! ，一個智能媒合平台，利用 AI 技術幫助新創團隊、投資人及專業人士高效匹配合作機會。我們結合智慧推薦系統與專業顧問機制，提升創業資源的流通與成功率，並透過多語言支持與國際拓展功能，助力團隊進軍全球市場。'
                  : 'Proposed Go Pin!, an intelligent matching platform that uses AI to help startups, investors, and professionals efficiently match for collaboration opportunities. We combine a smart recommendation system and a professional consulting mechanism to enhance the flow and success rate of entrepreneurial resources, and facilitate global market entry through multilingual support and international expansion features.'}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                <h4 className="font-semibold">{language === 'zh' ? 'EcoTracker（綠色科技創新）' : 'EcoTracker (Green Tech Innovation)'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2024.01' : 'Jan 2024'}</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{language === 'zh' ? 'X創業家 Pitch擂台賽 最佳社會新創獎' : 'Best Social Innovation Award, X-Entrepreneur Pitch Competition'}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'zh' 
                  ? '開發碳足跡追蹤系統，透過掃描食品記錄環境影響，促進綠色消費。SDG 12：責任消費與生產 及 SDG 13：氣候行動。探討產品專利與智慧財產保護策略，確保技術創新具備市場競爭力。'
                  : 'Developed a carbon footprint tracking system that promotes green consumption by recording the environmental impact of food through scanning. Addresses SDG 12: Responsible Consumption and Production, and SDG 13: Climate Action. Explored product patent and intellectual property protection strategies to ensure the market competitiveness of technological innovations.'}
              </p>
            </div>
          </div>
        </div>

        {/* 實習經歷 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#800020]">{language === 'zh' ? '實習經歷' : 'Internship Experience'}</h3>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <h4 className="font-semibold">{language === 'zh' ? '國家實驗研究院 科技政策研究與資訊中心 創新創業推動組 暑期實習生' : 'Summer Intern, Innovation and Entrepreneurship Promotion Division, Science & Technology Policy Research and Information Center, National Applied Research Laboratories'}</h4>
              <span className="text-gray-500 text-sm">{language === 'zh' ? '2025.07 – 2025.08' : 'Jul 2025 – Aug 2025'}</span>
            </div>
          </div>
        </div>

        {/* 活動經歷 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#800020]">{language === 'zh' ? '活動經歷' : 'Activities'}</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <h4 className="font-semibold">{language === 'zh' ? '國立政治大學國際合作事務處 華語圓桌領袖' : 'Mandarin Roundtable Leader, Office of International Cooperation, National Chengchi University'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2024.10 – 仍在進行' : 'Oct 2024 – Present'}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <h4 className="font-semibold">{language === 'zh' ? '國立政治大學數位內容學士班畢業展開幕茶會主持人' : 'Host, Opening Ceremony of the Digital Content BA Program Graduation Exhibition, National Chengchi University'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2025.01' : 'Jan 2025'}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <h4 className="font-semibold">{language === 'zh' ? '國立政治大學2023校園馬拉松主持群' : 'Host, 2023 Campus Marathon, National Chengchi University'}</h4>
                <span className="text-gray-500 text-sm">{language === 'zh' ? '2023.12' : 'Dec 2023'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 技能專長 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#800020]">{language === 'zh' ? '技能專長' : 'Skills'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold mb-2">{language === 'zh' ? '軟體開發' : 'Software Development'}</h4>
              <p className="text-gray-600 text-sm">{language === 'zh' ? 'React、Next.js、Node.js、Firebase、Java、UI/UX設計' : 'React, Next.js, Node.js, Firebase, Java, UI/UX Design'}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold mb-2">{language === 'zh' ? '專案管理' : 'Project Management'}</h4>
              <p className="text-gray-600 text-sm">{language === 'zh' ? '敏捷開發、團隊協作、時程規劃' : 'Agile Development, Team Collaboration, Schedule Planning'}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold mb-2">{language === 'zh' ? '華語教學' : 'Mandarin Teaching'}</h4>
              <p className="text-gray-600 text-sm">{language === 'zh' ? '對外華語教學、課程設計、文化推廣' : 'Teaching Chinese as a Second Language, Curriculum Design, Cultural Promotion'}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold mb-2">{language === 'zh' ? '主持與溝通' : 'Hosting & Communication'}</h4>
              <p className="text-gray-600 text-sm">{language === 'zh' ? '活動主持、公眾演說、跨文化溝通' : 'Event Hosting, Public Speaking, Cross-Cultural Communication'}</p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}
