import Link from "next/link";
import { Home, BookOpen, User, Coins, PenTool } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="grid grid-cols-5 border-t bg-white p-2 text-xs text-center">
      <Link href="/account" className="flex flex-col items-center gap-1">
        <User className="w-5 h-5" />
        <span>계정 설정</span>
      </Link>
      <Link href="/credits" className="flex flex-col items-center gap-1">
        <Coins className="w-5 h-5" />
        <span>크레딧 얻기</span>
      </Link>
      <Link href="/" className="flex flex-col items-center gap-1">
        <Home className="w-5 h-5" />
        <span>홈</span>
      </Link>
      <Link href="/shelf" className="flex flex-col items-center gap-1">
        <BookOpen className="w-5 h-5" />
        <span>서재</span>
      </Link>
      <Link href="/creator" className="flex flex-col items-center gap-1">
        <PenTool className="w-5 h-5" />
        <span>창작자</span>
      </Link>
    </nav>
  );
}
