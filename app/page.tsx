import type { Metadata } from "next";
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
  { slug: "garden", label: "庭・自宅", icon: "🏡" },
  { slug: "vacant-lot", label: "空き地", icon: "🌾" },
  { slug: "vacant-house", label: "空き家", icon: "🏚️" },
  { slug: "apartment", label: "アパート", icon: "🏢" },
  { slug: "solar", label: "太陽光発電", icon: "☀️" },
];

const faqs = [
  { q: "草刈り業者に頼む費用の相場はいくら？", a: "一般的な庭（30平方メートル）で約10,000〜25,000円が相場です。面積・草の高さ・廃棄物量によって変動します。複数業者の見積もり比較がおすすめです。" },
  { q: "草刈りはどの季節に依頼すればいい？", a: "5〜6月と8〜9月の年2回が基本。草が伸びすぎる前に依頼すると費用を抑えられます。雑草が旺盛な夏は予約が込むため早めの予約を。" },
  { q: "草刈りと除草の違いは？", a: "草刈りは草を刈り取る作業。除草は根ごと取り除く作業を指します。除草の方が再生を防げますが費用は高め。除草剤・防草シートとの組み合わせが効果的です。" },
  { q: "DIYと業者どちらがいい？", a: "30平方メートル以下の庭ならDIYも選択肢。それ以上の面積や急傾斜・空き地の場合は業者への依頼が効率的です。道具代・時間・体力を考慮して判断を。" },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-300 font-bold text-sm mb-3 tracking-widest uppercase">草刈り業者の総合比較サイト</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              庭の雑草、もう悩まない。
            </h1>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              全国対応の草刈り・除草業者を徹底比較。料金相場・口コミ・ランキングで最適な業者を見つけましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/ranking/"
                className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                🏆 おすすめランキングを見る
              </Link>
              <Link
                href="/cost/price/"
                className="bg-white text-primary hover:bg-green-50 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                💰 料金相場を確認する
              </Link>
            </div>
          </div>
        </section>

        {/* Scene nav */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">シーン別草刈りガイド</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {scenes.map((scene) => (
                <Link
                  key={scene.slug}
                  href={`/scene/${scene.slug}/`}
                  className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors border border-green-200 text-center"
                >
                  <span className="text-3xl mb-2">{scene.icon}</span>
                  <span className="font-medium text-sm text-gray-700">{scene.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TOP3 */}
        <section className="py-12 px-4 bg-bg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">🏆 おすすめ草刈り業者 TOP3</h2>
            <p className="text-gray-500 text-sm text-center mb-8">料金・対応エリア・口コミを総合評価</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {top3Companies.map((company, index) => (
                <div key={company.slug} className={`bg-white rounded-2xl shadow-md p-6 border-2 ${index === 0 ? 'border-yellow-400' : 'border-transparent'} relative`}>
                  {index === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ★ No.1 編集部イチオシ
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-3xl font-black ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-400' : 'text-yellow-600'}`}>
                      {index + 1}位
                    </span>
                    <h3 className="text-lg font-bold text-gray-800">{company.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{company.tagline}</p>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">{company.description}</p>
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-primary font-bold">¥{company.pricePerSqm}/㎡〜</span>
                    <span className="text-gray-500 text-xs">{company.coverage}</span>
                  </div>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="block w-full text-center bg-primary hover:bg-green-700 text-white py-2 rounded-lg text-sm font-bold transition-colors"
                  >
                    詳しく見る
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/ranking/" className="text-primary hover:underline font-medium">
                全業者のランキングを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* Cost table */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">💰 草刈り料金相場一覧</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">面積</th>
                    <th className="px-4 py-3 text-right">最安値</th>
                    <th className="px-4 py-3 text-right">目安</th>
                    <th className="px-4 py-3 text-right">高め</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "〜30㎡（一般家庭の庭）", low: "¥5,000", mid: "¥10,000", high: "¥20,000" },
                    { area: "30〜100㎡（広めの庭・空き地）", low: "¥10,000", mid: "¥25,000", high: "¥45,000" },
                    { area: "100〜300㎡（大きな空き地）", low: "¥20,000", mid: "¥50,000", high: "¥90,000" },
                    { area: "300㎡以上（田畑・太陽光）", low: "¥40,000", mid: "¥100,000", high: "¥200,000" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-green-50" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-gray-700">{row.area}</td>
                      <td className="px-4 py-3 text-right text-green-700 font-bold">{row.low}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{row.mid}</td>
                      <td className="px-4 py-3 text-right text-gray-500">{row.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">※目安です。草の高さ・廃棄物量・地域によって変動します。</p>
            <div className="text-center mt-4">
              <Link href="/cost/price/" className="text-primary hover:underline font-medium">
                詳しい料金ガイドを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-bg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-gray-800 mb-2 flex gap-2">
                    <span className="text-primary">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">
                    <span className="text-secondary font-bold">A.</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-accent text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">今すぐ無料で見積もりを取る</h2>
            <p className="text-red-100 mb-6">複数業者の見積もりを比較して、最安値の業者を見つけましょう</p>
            <Link
              href="/ranking/"
              className="bg-white text-accent hover:bg-red-50 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg inline-block"
            >
              🏆 おすすめ業者ランキングへ
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
