import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "草刈りナビ｜草刈り業者比較・料金・おすすめランキング2026",
  description: "庭の雑草、もう悩まない。全国対応の草刈り業者を徹底比較。料金相場・口コミ・ランキングを掲載。無料見積もりで最安値を探しましょう。",
};

const top3Companies = companiesData.slice(0, 3);
const scenes = [
  { slug: "garden", label: "庭・自宅", icon: "" },
  { slug: "vacant-lot", label: "空き地", icon: "" },
  { slug: "vacant-house", label: "空き家", icon: "️" },
  { slug: "apartment", label: "アパート", icon: "" },
  { slug: "solar", label: "太陽光発電", icon: "️" },
];

const faqs = [
  { q: "草刈り業者に頼む費用の相場はいくら？", a: "一般的な庭（30平方メートル）で約10,000〜25,000円が相場です。面積・草の高さ・廃棄物量によって変動します。複数業者の見積もり比較がおすすめです。" },
  { q: "草刈りはどの季節に依頼すればいい？", a: "5〜6月と8〜9月の年2回が基本。草が伸びすぎる前に依頼すると費用を抑えられます。雑草が旺盛な夏は予約が込むため早めの予約を。" },
  { q: "草刈りと除草の違いは？", a: "草刈りは草を刈り取る作業。除草は根ごと取り除く作業を指します。除草の方が再生を防げますが費用は高め。除草剤・防草シートとの組み合わせが効果的です。" },
  { q: "DIYと業者どちらがいい？", a: "30平方メートル以下の庭ならDIYも選択肢。それ以上の面積や急傾斜・空き地の場合は業者への依頼が効率的です。道具代・時間・体力を考慮して判断を。" },
];

const rankColors = [
  { border: "border-yellow-400", badge: "bg-yellow-400", rank: "text-yellow-400", label: "No.1 編集部イチオシ" },
  { border: "border-gray-300", badge: "bg-gray-400", rank: "text-gray-400", label: "No.2" },
  { border: "border-amber-600", badge: "bg-amber-600", rank: "text-amber-600", label: "No.3" },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero — full-width background image with green gradient overlay */}
        <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center">
          {/* Background image */}
          <Image
            src="/images/hero-a.png"
            alt="きれいに整備された芝生と青空"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Green gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(22,163,74,0.82) 0%, rgba(21,128,61,0.70) 50%, rgba(20,83,45,0.60) 100%)",
            }}
          />
          {/* Content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 py-20">
            <p className="text-yellow-300 font-bold text-xs md:text-sm mb-3 tracking-widest uppercase drop-shadow">
              草刈り業者の総合比較サイト
            </p>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight text-white drop-shadow-lg">
              庭の雑草、もう悩まない。
            </h1>
            <p className="text-green-100 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
              全国対応の草刈り・除草業者を徹底比較。<br className="hidden sm:block" />
              料金相場・口コミ・ランキングで最適な業者を見つけましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ranking/"
                className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
              >
                 おすすめランキングを見る
              </Link>
              <Link
                href="/cost/price/"
                className="bg-white/95 text-primary hover:bg-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
              >
                 料金相場を確認する
              </Link>
            </div>
          </div>
        </section>

        {/* Scene nav */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">シーン別草刈りガイド</h2>
            <p className="text-gray-500 text-sm text-center mb-8">お悩みのシーンから探す</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              {scenes.map((scene) => (
                <Link
                  key={scene.slug}
                  href={`/scene/${scene.slug}/`}
                  className="group flex flex-col items-center p-5 bg-green-50 hover:bg-primary rounded-2xl transition-all duration-200 border border-green-200 hover:border-primary text-center shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="text-4xl mb-2 transition-transform duration-200 group-hover:scale-110">
                    {scene.icon}
                  </span>
                  <span className="font-semibold text-sm text-gray-700 group-hover:text-white transition-colors">
                    {scene.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TOP3 */}
        <section className="py-14 px-4 bg-bg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2"> おすすめ草刈り業者 TOP3</h2>
            <p className="text-gray-500 text-sm text-center mb-10">料金・対応エリア・口コミを総合評価</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {top3Companies.map((company, index) => (
                <div
                  key={company.slug}
                  className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 p-6 border-2 ${rankColors[index].border} relative flex flex-col hover:-translate-y-1`}
                >
                  {/* Rank badge */}
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${rankColors[index].badge} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow whitespace-nowrap`}
                  >
                     {rankColors[index].label}
                  </div>

                  {/* Rank number + name */}
                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <span
                      className={`text-4xl font-black leading-none ${rankColors[index].rank}`}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">Rank</p>
                      <h3 className="text-lg font-bold text-gray-800 leading-tight">{company.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-gray-700 mb-1">{company.tagline}</p>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-2 flex-1">
                    {company.description}
                  </p>

                  {/* Price + coverage */}
                  <div className="flex justify-between items-center bg-green-50 rounded-xl px-3 py-2 mb-4 text-sm">
                    <div>
                      <span className="text-[10px] text-gray-400 block">料金目安</span>
                      <span className="text-primary font-bold">¥{company.pricePerSqm}/㎡〜</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 block">対応エリア</span>
                      <span className="text-gray-600 text-xs font-medium">{company.coverage}</span>
                    </div>
                  </div>

                  <Link
                    href={`/company/${company.slug}/`}
                    className={`block w-full text-center py-2.5 rounded-xl text-sm font-bold transition-all ${
                      index === 0
                        ? "bg-primary hover:bg-green-700 text-white shadow hover:shadow-md"
                        : "bg-green-50 hover:bg-green-100 text-primary border border-primary"
                    }`}
                  >
                    詳しく見る →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/ranking/"
                className="inline-flex items-center gap-2 text-primary hover:text-green-700 font-semibold hover:underline text-sm"
              >
                全業者のランキングを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* Cost table */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2"> 草刈り料金相場一覧</h2>
            <p className="text-gray-500 text-sm text-center mb-8">面積別の費用目安（2026年最新版）</p>
            <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-5 py-3.5 text-left font-semibold rounded-tl-2xl">面積</th>
                    <th className="px-5 py-3.5 text-right font-semibold">最安値</th>
                    <th className="px-5 py-3.5 text-right font-semibold">目安</th>
                    <th className="px-5 py-3.5 text-right font-semibold rounded-tr-2xl">高め</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "〜30㎡（一般家庭の庭）", low: "¥5,000", mid: "¥10,000", high: "¥20,000" },
                    { area: "30〜100㎡（広めの庭・空き地）", low: "¥10,000", mid: "¥25,000", high: "¥45,000" },
                    { area: "100〜300㎡（大きな空き地）", low: "¥20,000", mid: "¥50,000", high: "¥90,000" },
                    { area: "300㎡以上（田畑・太陽光）", low: "¥40,000", mid: "¥100,000", high: "¥200,000" },
                  ].map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-green-50" : "bg-white"} hover:bg-green-100 transition-colors`}>
                      <td className="px-5 py-3.5 font-medium text-gray-700">{row.area}</td>
                      <td className="px-5 py-3.5 text-right text-primary font-bold">{row.low}</td>
                      <td className="px-5 py-3.5 text-right text-gray-700">{row.mid}</td>
                      <td className="px-5 py-3.5 text-right text-gray-400">{row.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              ※目安です。草の高さ・廃棄物量・地域によって変動します。
            </p>
            <div className="text-center mt-5">
              <Link href="/cost/price/" className="inline-flex items-center gap-1 text-primary hover:underline font-semibold text-sm">
                詳しい料金ガイドを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-bg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">よくある質問</h2>
            <p className="text-gray-500 text-sm text-center mb-10">草刈りに関するお悩みにお答えします</p>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 border border-gray-50"
                >
                  <h3 className="font-bold text-gray-800 mb-3 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center mt-0.5">
                      Q
                    </span>
                    <span className="leading-snug">{faq.q}</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex gap-3 items-start pl-0">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-green-100 text-primary text-xs font-black flex items-center justify-center mt-0.5">
                      A
                    </span>
                    <span>{faq.a}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 bg-accent text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">今すぐ無料で見積もりを取る</h2>
            <p className="text-red-100 mb-8 text-sm md:text-base">
              複数業者の見積もりを比較して、最安値の業者を見つけましょう
            </p>
            <Link
              href="/ranking/"
              className="bg-white text-accent hover:bg-red-50 px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 inline-block"
            >
               おすすめ業者ランキングへ
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
