import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "草刈りDIY vs プロ業者｜どちらがお得か徹底比較",
  description: "草刈りをDIYでやるべきか業者に頼むべきか徹底比較。費用・時間・仕上がりの観点から最適な選択方法を解説します。",
};

export default function DiyVsProPage() {
  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "費用ガイド" }, { label: "DIY vs プロ比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">草刈りDIY vs プロ業者｜徹底比較2026</h1>
        <p className="text-gray-600 mb-8">草刈りを自分でやるか業者に頼むか迷っている方へ。費用・時間・仕上がり・リスクの観点から徹底的に比較します。</p>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
          <h2 className="text-xl font-bold text-gray-800 p-6 pb-0 mb-4">DIY vs プロ業者 比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-gray-600">比較項目</th>
                  <th className="px-4 py-3 text-center text-green-600 font-bold"> DIY</th>
                  <th className="px-4 py-3 text-center text-blue-600 font-bold"> プロ業者</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "初期費用", diy: "道具代：10,000〜50,000円", pro: "不要（道具持参）" },
                  { item: "作業費用（30㎡）", diy: "年間500〜1,000円（燃料費等）", pro: "年間20,000〜50,000円" },
                  { item: "時間", diy: "2〜5時間/回", pro: "1〜2時間/回（自分の時間ゼロ）" },
                  { item: "仕上がり品質", diy: "経験で向上、最初は粗い場合も", pro: "プロ品質・均一" },
                  { item: "廃棄物処理", diy: "自分で処分（無料〜有料）", pro: "業者が処分（別途費用の場合も）" },
                  { item: "安全性", diy: "怪我・事故リスクあり", pro: "保険対応・安全確保" },
                  { item: "技術・知識", diy: "道具の扱いを習得必要", pro: "専門知識で最適な方法を選択" },
                  { item: "急傾斜・広面積", diy: "危険・体力的に困難", pro: "専用機材で安全・迅速" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border-r">{row.item}</td>
                    <td className="px-4 py-3 text-gray-700 border-r text-center">{row.diy}</td>
                    <td className="px-4 py-3 text-gray-700 text-center">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* When DIY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-green-700 mb-4"> DIYがおすすめな場合</h2>
            <ul className="space-y-3">
              {[
                "面積が30㎡以下の小さな庭",
                "草の高さが30cm未満",
                "平坦な土地で作業しやすい",
                "体力があり時間に余裕がある",
                "年間の草刈り回数が少ない",
                "道具を長期的に活用できる",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 mt-0.5"></span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4"> プロ依頼がおすすめな場合</h2>
            <ul className="space-y-3">
              {[
                "面積が100㎡以上の広い土地",
                "草が50cm以上に伸びている",
                "急傾斜地・足場が悪い場所",
                "空き地・空き家など遠方の土地",
                "高齢・体力に不安がある方",
                "きれいな仕上がりにこだわりたい",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 mt-0.5"></span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cost comparison */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">5年間の総コスト比較（30㎡の庭・年2回草刈り）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-2 border-green-300 rounded-xl p-4">
              <h3 className="font-bold text-green-700 mb-3"> DIYの場合</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { item: "草刈り機（エンジン式）", cost: "¥30,000" },
                    { item: "替え刃・消耗品（5年分）", cost: "¥10,000" },
                    { item: "燃料費（5年分）", cost: "¥5,000" },
                    { item: "防護具・道具", cost: "¥5,000" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-1 text-gray-600">{r.item}</td>
                      <td className="py-1 text-right font-medium">{r.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-green-50">
                    <td className="py-2 font-bold text-gray-800">5年合計</td>
                    <td className="py-2 text-right font-black text-green-700 text-lg">¥50,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">※自分の労働時間（50時間以上）は含まない</p>
            </div>
            <div className="border-2 border-blue-300 rounded-xl p-4">
              <h3 className="font-bold text-blue-700 mb-3"> プロ業者の場合</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { item: "草刈り（年2回×5年=10回）", cost: "¥100,000" },
                    { item: "初回防草シート施工", cost: "¥45,000" },
                    { item: "その後の草刈り（年1回×4年）", cost: "¥40,000" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-1 text-gray-600">{r.item}</td>
                      <td className="py-1 text-right font-medium">{r.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50">
                    <td className="py-2 font-bold text-gray-800">5年合計（最適化後）</td>
                    <td className="py-2 text-right font-black text-blue-700 text-lg">¥85,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">※防草シート設置後は管理頻度を減らせる</p>
            </div>
          </div>
        </div>

        {/* Tools for DIY */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">DIYに必要な道具と費用</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { tool: "エンジン草刈り機", price: "20,000〜50,000円", note: "広い面積に最適" },
              { tool: "電動草刈り機（コード式）", price: "5,000〜15,000円", note: "小さな庭向け・静音" },
              { tool: "充電式草刈り機", price: "10,000〜30,000円", note: "コードレスで使いやすい" },
              { tool: "鎌・手刈り道具", price: "1,000〜3,000円", note: "狭い場所・少量の草向け" },
              { tool: "防護メガネ・手袋", price: "1,000〜3,000円", note: "安全確保に必須" },
              { tool: "ゴミ袋・熊手", price: "1,000〜2,000円", note: "廃棄物処理用" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-sm text-gray-800">{item.tool}</div>
                  <div className="text-xs text-gray-500">{item.note}</div>
                </div>
                <div className="text-sm font-bold text-secondary ml-3 text-right">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/ranking/" className="bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-colors inline-block mb-4">
            プロ業者に無料見積もりを依頼する →
          </Link>
          <div className="flex gap-4 justify-center text-sm">
            <Link href="/cost/price/" className="text-primary hover:underline">料金相場を見る →</Link>
            <Link href="/ranking/" className="text-primary hover:underline">業者ランキングを見る →</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
