import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "草刈り業者おすすめランキング2026｜総合比較",
  description: "草刈り業者を料金・対応力・口コミで総合ランキング。全国対応から地域密着まで、あなたの状況に最適な業者を見つけましょう。",
};

export default function RankingPage() {
  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "おすすめランキング" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">草刈り業者おすすめランキング2026</h1>
        <p className="text-gray-600 mb-6">料金・対応エリア・口コミ評価を総合評価した最新ランキングです。</p>

        {/* Sub ranking links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <Link href="/ranking/cheap/" className="bg-secondary/10 hover:bg-secondary/20 text-secondary-700 border border-secondary/30 rounded-xl p-4 flex items-center gap-3 transition-colors">
            <span className="text-2xl">💰</span>
            <div>
              <div className="font-bold">格安ランキング</div>
              <div className="text-xs text-gray-600">コスパ重視で選ぶ</div>
            </div>
          </Link>
          <Link href="/ranking/regular/" className="bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-4 flex items-center gap-3 transition-colors">
            <span className="text-2xl">🔄</span>
            <div>
              <div className="font-bold text-primary">定期管理ランキング</div>
              <div className="text-xs text-gray-600">定期依頼向け業者</div>
            </div>
          </Link>
        </div>

        {/* Full ranking */}
        <div className="space-y-4">
          {companiesData.map((company, index) => (
            <div key={company.slug} className={`bg-white rounded-2xl shadow-sm p-6 border-2 ${index === 0 ? 'border-yellow-400' : index === 1 ? 'border-gray-300' : index === 2 ? 'border-yellow-600' : 'border-transparent'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3 sm:w-16 flex-shrink-0">
                  <span className={`text-3xl font-black ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-yellow-600' : 'text-gray-400'}`}>
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">{company.name}</h2>
                      <p className="text-sm text-gray-500">{company.tagline}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-bold">¥{company.pricePerSqm}/㎡〜</div>
                      <div className="text-xs text-gray-400">{company.coverage}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 mb-3 line-clamp-2">{company.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {company.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-col gap-2 sm:w-32 flex-shrink-0">
                  <Link
                    href={`/company/${company.slug}/`}
                    className="flex-1 sm:flex-none text-center bg-primary hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-bold transition-colors"
                  >
                    詳細を見る
                  </Link>
                  <a
                    href={company.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex-1 sm:flex-none text-center bg-accent hover:bg-red-700 text-white py-2 px-3 rounded-lg text-sm font-bold transition-colors"
                  >
                    見積もり※PR
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
