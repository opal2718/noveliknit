"use client";

import { ArrowLeft, Star, Bookmark, MessageSquare } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";


export default function ReaderPage() {
  const [showOriginal, setShowOriginal] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const modifiedText = `"개구리가 노트북을 삼킨 포스트잇을 던지고 고양이는 샤프심과 함께 작동하다."
한참을 고민하던 번역기가 겨우 내놓은 답이었다. 그럼 그렇지. 제아무리 지구 상에 있는 모든 언어를 번역할 수 있대도 이런 말 같지도 않은 소리까지 알아들을 수 있을리가… 나는 한숨을 푹 내쉬고는 내 앞의 처음 보는 생명체를 바라본다. 보호 장비 안으로 보이는 매끄러운 얼굴이 아까보다 자주 주변을 두리번거리는 걸 보니 마음이 좀 급해진 모양이다.
'이제 뭘 어떻게 더 해야하지? 아니 이미 도망갔어야 되는건가?'
하지만 아무리 봐도 이건 술 취해서 돌아다니는 아저씨들보다도 덜 위험해 보인다. 그동안 내가 들어본 외계인 목격담 중에 사람이 죽은 건 많이 없었으니까 괜찮을거다. 아니 외계인 만나서 죽은 사람 얘기는 해줄 수 있는 사람이 없어서 그런건가? 뭐... 이미 이렇게 된 걸 어떡하겠어.
그 때 이 생명체 뒤에서 뭔가 빛이 반짝인다. 이 친구가 종전과 다른 표정으로 뒤돌아보는 걸 보니 얘는 역시 저걸 타고 온 외계인이 맞나 보다. 곧 똑같이 생긴 외계인이 네모난 물건을 들고 걸어온다. 내 앞에 거의 20분째 서있던 외계인이 그 물건을 받더니 (아마도) 좀 밝아진 표정을 하고서 받은 물건을 작동시킨다.
"이제 나의 언어를 흡수하는가?"

`;

  const originalText = `아이린은 작은 서점의 문을 닫으며 하늘을 올려다봤다. 
  반짝이는 눈송이 사이로, 어릴 적 들었던 멜로디가 귓가에 아련히 퍼졌다. 
  “기억하고 있어?” 누군가 속삭이는 듯한 소리에 그녀는 고개를 돌렸다. 
  아무도 없었다. 하지만 마음 한구석이 따뜻해졌다.`;

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <button onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">잊혀진 별의 노래</h1>
        </div>
        <label className="text-sm flex items-center gap-1">
          <input
            type="checkbox"
            checked={showOriginal}
            onChange={() => setShowOriginal(!showOriginal)}
          />
          원본 보기
        </label>
      </header>

      {/* 본문 */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        <p className="text-sm text-center text-gray-500">by Luna Avelyn</p>

        <img
          src="https://placekitten.com/400/200"
          alt="삽화"
          className="w-full h-48 object-cover rounded-xl"
        />

        <div className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap bg-white p-4 rounded-xl shadow">
          {showOriginal ? originalText : modifiedText}
        </div>

        {!showOriginal && (
          <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <h3 className="text-sm font-semibold">AI 수정 내용에 대한 피드백</h3>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="예: 분위기나 문장이 어색했어요"
              className="w-full p-2 text-sm border rounded resize-none h-24"
            />
            <button className="w-full bg-indigo-600 text-white py-2 rounded font-semibold text-sm">
              피드백 제출
            </button>
          </div>
        )}

        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Bookmark className="w-5 h-5 text-gray-500" />
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  onClick={() => setRating(i)}
                  className={`w-5 h-5 cursor-pointer ${
                    rating >= i ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MessageSquare className="w-4 h-4" />
            <span>댓글 12</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-sm text-gray-600">
          <h4 className="font-semibold mb-2">댓글</h4>
          <ul className="space-y-2">
            <li>🌟 진짜 감성 터졌어요… AI 수정본 더 좋아요!</li>
            <li>원본 문장이 더 잔잔한 분위기네요. 둘 다 좋습니다.</li>
            <li>피드백 남겼어요~ 이런 기능 신기하네요!</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
