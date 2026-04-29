import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-green-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span>🌿</span> 草刈りナビ
            </h3>
            <p className="text-green-200 text-sm leading-relaxed">
              草刈り業者の料金比較・口コミ・おすすめランキングを掲載。あなたに最適な業者を見つけましょう。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-yellow-300">業者ランキング</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link href="/ranking/" className="hover:text-white transition-colors">総合ランキング</Link></li>
              <li><Link href="/ranking/cheap/" className="hover:text-white transition-colors">格安ランキング</Link></li>
              <li><Link href="/ranking/regular/" className="hover:text-white transition-colors">定期管理ランキング</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-yellow-300">シーン別ガイド</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link href="/scene/garden/" className="hover:text-white transition-colors">庭の草刈り</Link></li>
              <li><Link href="/scene/vacant-lot/" className="hover:text-white transition-colors">空き地の草刈り</Link></li>
              <li><Link href="/scene/vacant-house/" className="hover:text-white transition-colors">空き家の草刈り</Link></li>
              <li><Link href="/scene/apartment/" className="hover:text-white transition-colors">アパートの草刈り</Link></li>
              <li><Link href="/scene/solar/" className="hover:text-white transition-colors">太陽光発電所</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-yellow-300">雑草・費用ガイド</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link href="/weed/types/" className="hover:text-white transition-colors">雑草の種類</Link></li>
              <li><Link href="/weed/herbicide/" className="hover:text-white transition-colors">除草剤の使い方</Link></li>
              <li><Link href="/weed/sheet/" className="hover:text-white transition-colors">防草シート</Link></li>
              <li><Link href="/cost/price/" className="hover:text-white transition-colors">料金・費用相場</Link></li>
              <li><Link href="/cost/diy-vs-pro/" className="hover:text-white transition-colors">DIY vs プロ比較</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-green-300 text-xs">
            © 2026 草刈りナビ. All rights reserved.
          </p>
          <p className="text-green-400 text-xs">
            ※当サイトはアフィリエイト広告を含みます。PRラベルのリンクは広告です。
          </p>
        </div>
      </div>
    </footer>
  );
}
