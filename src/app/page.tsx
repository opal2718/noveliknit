import { Home, BookOpen, User, Coins, PenTool } from "lucide-react";
import NavBar from "@/components/NavBar";

export default function NoveliknitLayout() {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="text-2xl font-bold text-center p-4 bg-white shadow">
        Noveliknit
      </header>

      {/* 콘텐츠 영역 - 홈 */}
      <main className="flex-1 overflow-y-auto p-4 space-y-8">
        {/* 개인화 추천 */}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-black">당신을 위한 이야기</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="min-w-[200px] bg-white rounded-xl shadow p-3 shrink-0"
              >
                <div className="h-32 bg-slate-200 rounded mb-2" />
                <h3 className="font-semibold text-sm">개인화 소설 {i}</h3>
                <p className="text-xs text-gray-500">
                  AI가 취향에 맞게 추천했어요
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 실시간 인기작 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">실시간 인기작</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex gap-3 bg-white rounded-xl shadow p-3"
              >
                <div className="w-20 h-28 bg-slate-200 rounded" />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">인기작 {i}</h3>
                    <p className="text-xs text-gray-500">
                      많은 독자들이 선택했어요
                    </p>
                  </div>
                  <span className="text-xs text-yellow-500 font-medium">
                    ★ 4.{i} / 5
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 하단 네비게이션 */}
      <NavBar />
    </div>
  );
}
