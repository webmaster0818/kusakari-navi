import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "草刈り定期管理おすすめ業者ランキング2026",
  description: "庭や空き地の定期草刈り管理に強い業者をランキング。年間契約・定期管理プランが充実した業者を厳選紹介します。",
};

// Companies with regular management features
const regularCompanies = companiesData.filter((c) =>
  c.features.some((f) => f.includes("定期"))
);

export default function RegularRankingPage() {
  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "ランキング", href: "/ranking/" }, { label: "定期管理ランキング" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">草刈り定期管理おすすめ業者ランキング</h1>
        <p className="text-gray-600 mb-3">年間を通じた定期的な草刈り管理に対応している業者のランキングです。</p>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm text-green-800">
           定期管理契約は1回あたりの費用が抑えられ、草が伸びすぎる前に管理できるためおすすめです
        </div>

        <div className="space-y-4 mb-8">
          {regularCompanies.map((company, index) => (
            <div key={company.slug} className={`bg-white rounded-2xl shadow-sm p-6 border-2 ${index === 0 ? 'border-primary' : 'border-transparent'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="sm:w-14 flex-shrink-0 text-center">
                  <span className={`text-3xl font-black ${index === 0 ? 'text-primary' : 'text-gray-400'}`}>{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">{company.name}</h2>
                      <p className="text-sm text-gray-500">{company.tagline}</p>
                    </div>
                    <div className="sm:text-right">
                      <div className="text-xl font-black text-primary">¥{company.pricePerSqm}/㎡〜</div>
                      <div className="text-xs text-gray-400">{company.coverage}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 mb-3 line-clamp-2">{company.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {company.features.filter(f => f.includes("定期") || f.includes("管理") || f.includes("契約")).map((f, i) => (
                      <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-col gap-2 sm:w-28 flex-shrink-0">
                  <Link href={`/company/${company.slug}/`} className="flex-1 sm:flex-none text-center bg-primary hover:bg-green-700 text-white py-2 rounded-lg text-sm font-bold transition-colors">
                    詳細
                  </Link>
                  <a href={company.officialUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex-1 sm:flex-none text-center bg-accent hover:bg-red-700 text-white py-2 rounded-lg text-sm font-bold transition-colors">
                    相談※PR
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guide */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">定期管理契約のメリット</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              { iconEl: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9"/><text x="12" y="16" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10" fontWeight="bold">¥</text></svg>, title: "費用が割安", desc: "単発依頼より1回あたりの費用が安くなることが多い" },
              { iconEl: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, title: "管理の手間が省ける", desc: "スケジュールを業者に管理してもらえる" },
              { iconEl: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>, title: "草を短くキープ", desc: "伸びすぎる前に対応するため費用・手間を節約" },
              { iconEl: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, title: "優先対応", desc: "繁忙期でも優先的に対応してもらいやすい" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                {item.iconEl}
                <div>
                  <div className="font-bold text-gray-800">{item.title}</div>
                  <div className="text-gray-600 text-xs">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
