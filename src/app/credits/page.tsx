import NavBar from "@/components/NavBar";

const card_colors = ["bg-red-200", "bg-orange-200", "bg-yellow-200", "bg-green-200"];
const card_titles = ["작품 평가 작성", "캐릭터 취향 설정", "소설 취향 설정", "친구 초대"];
const card_desciptions = ["그동안 Noveliknit에서 읽은 작품에 평점을 남기면 크레딧을 드려요.", 
    "제시되는 캐릭터에 대한 선호도를 입력해서 당신의 캐릭터 유형 취향을 확인할 수 있게 도와주세요.", 
    "제시되는 소설에 대한 선호도를 입력해서 당신의 작품 취향을 확인할 수 있게 도와주세요.", 
    "친구가 가입하면 보상 크레딧이 지급돼요."];

export default function LibraryPage() {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="text-xl font-bold text-center p-4 bg-white shadow">
        크레딧 얻기
      </header>

      {/* 콘텐츠 영역 */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        <p className="text-sm text-gray-500">
          다양한 방법으로 크레딧을 얻으실 수 있습니다.<br></br>
          크레딧은 유료 작품 열람 등에 사용됩니다.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {[0,1,2,3].map((i) => (
            <div
              key={i}
              className={`${card_colors[i]} rounded-xl shadow p-3 flex flex-col items-start`}
            >
              <h3 className="font-semibold text-sm">{card_titles[i]}</h3>
              <p className="mt-[0.5em] text-xs text-gray-700">{card_desciptions[i]}</p>
              <div className="w-full aspect-[3/2] bg-transparent rounded mb-2" />
            </div>
          ))}
        </div>
      </main>
      <NavBar />
    </div>
  );
}
