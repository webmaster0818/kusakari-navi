import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "草刈り業者格安ランキング2026｜料金が安いおすすめ業者",
  description: "草刈り業者を価格順にランキング。料金が安くてコスパの良い業者を厳選。無料見積もりで最安値を確認しましょう。",
};

const cheapRanking = [...companiesData].sort((a, b) => a.pricePerSqm - b.pricePerSqm);

export default function CheapRankingPage() {
  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "ランキング", href: "/ranking/" }, { label: "格安ランキング" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">草刈り業者 格安ランキング2026</h1>
        <p className="text-gray-600 mb-3">料金の安さを重視した方向けのランキングです。1平方メートルあたりの単価順で並んでいます。</p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-sm text-yellow-800">
          💡 価格だけでなく、対応エリア・サービス品質も合わせて確認することをおすすめします
        </div>

        <div className="space-y-4">
          {cheapRanking.map((company, index) => (
            <div key={company.slug} className={`bg-white rounded-2xl shadow-sm p-6 border-2 ${index === 0 ? 'border-yellow-400' : 'border-transparent'} relative`}>
              {index === 0 && (
                <div className="absolute -top-3 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  最安値候補
                </div>
              )}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="sm:w-14 flex-shrink-0 text-center">
                  <span className={`text-3xl font-black ${index === 0 ? 'text-yellow-400' : 'text-gray-400'}`}>{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">{company.name}</h2>
                      <p className="text-sm text-gray-500">{company.tagline}</p>
                    </div>
                    <div className="sm:text-right">
                      <div className="text-2xl font-black text-primary">¥{company.pricePerSqm}/㎡〜</div>
                      <div className="text-xs text-gray-400">対応: {company.coverage}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{company.description}</p>
                </div>
                <div className="flex sm:flex-col gap-2 sm:w-28 flex-shrink-0">
                  <Link href={`/company/${company.slug}/`} className="flex-1 sm:flex-none text-center bg-primary hover:bg-green-700 text-white py-2 rounded-lg text-sm font-bold transition-colors">
                    詳細
                  </Link>
                  <a href={company.officialUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex-1 sm:flex-none text-center bg-accent hover:bg-red-700 text-white py-2 rounded-lg text-sm font-bold transition-colors">
                    見積もり※PR
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">格安で草刈りを依頼するコツ</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-primary">✓</span>複数業者から相見積もりを取る</li>
            <li className="flex items-start gap-2"><span className="text-primary">✓</span>繁忙期（夏）を避けて予約する</li>
            <li className="flex items-start gap-2"><span className="text-primary">✓</span>草が短いうちに依頼する（作業量が少ない分安くなる）</li>
            <li className="flex items-start gap-2"><span className="text-primary">✓</span>定期管理契約で単価を下げる</li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
