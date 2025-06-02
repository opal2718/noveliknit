import NavBar from "@/components/NavBar";

export default function CreatorPage() {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="text-xl font-bold text-center p-4 bg-white shadow">
        창작자 공간
      </header>

      {/* 콘텐츠 영역 */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* 공지 및 안내 */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">환영합니다, 작가님!</h2>
          <p className="text-sm text-gray-600">
            이곳에서 소설을 작성하고, AI 개인화 범위를 설정할 수 있어요.
          </p>
        </section>

        {/* 글 작성 바로가기 */}
        <section className="bg-indigo-100 p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <h3 className="text-sm font-semibold">새 소설 작성</h3>
            <p className="text-xs text-gray-600">텍스트, 태그, 설정을 등록해보세요.</p>
          </div>
          <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded">
            작성하기
          </button>
        </section>

        {/* 등록된 작품 목록 */}
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700">내가 등록한 작품</h3>
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-xl shadow flex flex-col gap-1"
            >
              <h4 className="text-sm font-semibold">작품 제목 {i}</h4>
              <p className="text-xs text-gray-500">등록일: 2024.06.01</p>
              <p className="text-xs text-gray-500">변형 허용도: 4 / 5</p>
            </div>
          ))}
        </section>
      </main>
      <NavBar />
    </div>
  );
}
