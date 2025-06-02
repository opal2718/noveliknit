import NavBar from "@/components/NavBar";

export default function LibraryPage() {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="text-xl font-bold text-center p-4 bg-white shadow">
        내 서재
      </header>

      {/* 콘텐츠 영역 */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        <p className="text-sm text-gray-500">
          저장한 소설이 여기에 표시됩니다.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-3 flex flex-col items-start"
            >
              <div className="w-full h-32 bg-slate-200 rounded mb-2" />
              <h3 className="font-semibold text-sm">내 소설 {i}</h3>
              <p className="text-xs text-gray-500">읽던 위치로 바로가기</p>
            </div>
          ))}
        </div>
      </main>
      <NavBar />
    </div>
  );
}
