"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";

export default function AccountPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="text-xl font-bold text-center p-4 bg-white shadow">
        계정 설정
      </header>

      {/* 콘텐츠 영역 */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* 사용자 정보 */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm font-semibold mb-2 text-gray-700">사용자 정보</h2>
          <p className="text-sm text-gray-600">아이디: user123@example.com</p>
          <p className="text-sm text-gray-600">닉네임: 독서왕길동</p>
        </section>

        {/* 테마 설정 */}
        <section className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
          <span className="text-sm text-gray-700 font-medium">다크 모드</span>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            {darkMode ? "켜짐" : "꺼짐"}
          </label>
        </section>

        {/* 기타 */}
        <section className="bg-white p-4 rounded-xl shadow space-y-3">
          <button className="w-full py-2 rounded bg-indigo-600 text-white text-sm font-medium">
            로그아웃
          </button>
          <button className="w-full py-2 rounded bg-red-100 text-red-600 text-sm font-medium">
            계정 탈퇴
          </button>
        </section>
      </main>
      <NavBar />
    </div>
  );
}
