"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-bold text-xl tracking-tight">草刈りナビ</span>
          <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full font-bold ml-1">PR</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/ranking/" className="hover:text-yellow-200 transition-colors">ランキング</Link>
          <Link href="/cost/price/" className="hover:text-yellow-200 transition-colors">料金相場</Link>
          <Link href="/cost/diy-vs-pro/" className="hover:text-yellow-200 transition-colors">DIY vs 業者</Link>
          <Link href="/weed/types/" className="hover:text-yellow-200 transition-colors">雑草対策</Link>
          <Link
            href="/ranking/"
            className="bg-accent hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
          >
            無料見積もり
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-4">
          <nav className="flex flex-col gap-3 text-sm font-medium pt-3">
            <Link href="/ranking/" className="hover:text-yellow-200 py-1 border-b border-green-700" onClick={() => setMenuOpen(false)}>ランキング</Link>
            <Link href="/ranking/cheap/" className="hover:text-yellow-200 py-1 border-b border-green-700" onClick={() => setMenuOpen(false)}>格安ランキング</Link>
            <Link href="/cost/price/" className="hover:text-yellow-200 py-1 border-b border-green-700" onClick={() => setMenuOpen(false)}>料金相場</Link>
            <Link href="/cost/diy-vs-pro/" className="hover:text-yellow-200 py-1 border-b border-green-700" onClick={() => setMenuOpen(false)}>DIY vs 業者</Link>
            <Link href="/weed/types/" className="hover:text-yellow-200 py-1 border-b border-green-700" onClick={() => setMenuOpen(false)}>雑草の種類</Link>
            <Link href="/scene/garden/" className="hover:text-yellow-200 py-1" onClick={() => setMenuOpen(false)}>庭の草刈り</Link>
            <Link
              href="/ranking/"
              className="bg-accent text-white text-center px-4 py-2 rounded-full font-bold mt-2"
              onClick={() => setMenuOpen(false)}
            >
              無料見積もりを取る
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
