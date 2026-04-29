import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "草刈り料金・費用相場2026｜面積別・地域別の目安",
  description: "草刈りの料金・費用相場を面積別・地域別に詳しく解説。業者選びと見積もりのコツも紹介します。",
};

const priceTable = [
  { area: "〜10㎡（玄関前・小さな庭）", low: 3000, mid: 6000, high: 12000 },
  { area: "10〜30㎡（一般的な庭）", low: 5000, mid: 10000, high: 20000 },
  { area: "30〜50㎡（広めの庭）", low: 8000, mid: 16000, high: 30000 },
  { area: "50〜100㎡（小さな空き地）", low: 12000, mid: 25000, high: 45000 },
  { area: "100〜200㎡（空き地・駐車場）", low: 20000, mid: 40000, high: 75000 },
  { area: "200〜500㎡（大きな空き地）", low: 35000, mid: 70000, high: 130000 },
  { area: "500㎡〜（太陽光・農地）", low: 60000, mid: 130000, high: 250000 },
];

const addOns = [
  { item: "雑草処分（1袋）", price: "500〜1,000円" },
  { item: "除草剤散布", price: "5,000〜15,000円" },
  { item: "防草シート施工（1㎡）", price: "1,500〜3,500円" },
  { item: "砂利敷き（1㎡）", price: "3,000〜8,000円" },
  { item: "高木の剪定", price: "5,000〜30,000円/本" },
  { item: "緊急・即日対応", price: "+20〜30%割増" },
];

export default function PricePage() {
  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "費用ガイド" }, { label: "料金・費用相場" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">草刈り料金・費用相場2026年最新版</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          草刈りの費用は面積・草の高さ・廃棄物の量・地域によって大きく異なります。このページでは面積別の料金目安と、費用を抑えるコツを解説します。
        </p>

        {/* Main price table */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">面積別料金目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">面積・目安</th>
                  <th className="px-4 py-3 text-right">最安値</th>
                  <th className="px-4 py-3 text-right">平均</th>
                  <th className="px-4 py-3 text-right">高め</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-gray-700">{row.area}</td>
                    <td className="px-4 py-3 text-right text-green-700 font-bold">¥{row.low.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right text-gray-700">¥{row.mid.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right text-gray-500">¥{row.high.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※草の高さ30cm以下・廃棄物処分別の目安です。実際は現地見積もりで確認しましょう。</p>
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">オプション費用の目安</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {addOns.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">{item.item}</span>
                <span className="text-sm font-bold text-secondary">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Factors */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">料金が変わる主な要因</h2>
          <div className="space-y-4">
            {[
              { factor: "草の高さ・密度", detail: "草が50cm以上の場合、刈り取りに時間がかかり割増になることが多い。定期管理で草を短く保つと費用を抑えられる。" },
              { factor: "廃棄物の量", detail: "刈り取った草の処分費用は別途かかることが多い。45Lのゴミ袋1袋あたり500〜1,000円が目安。" },
              { factor: "アクセスのしやすさ", detail: "急傾斜地や重機が入りにくい場所は割増になる。駐車スペースの有無も影響する。" },
              { factor: "地域・季節", detail: "都市部は人件費が高め。夏の繁忙期（7〜9月）は予約が取りにくく割増になる場合も。" },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-gray-800 mb-1">{item.factor}</h3>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-primary/5 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">費用を抑える5つのコツ</h2>
          <ol className="space-y-3">
            {[
              "複数業者から相見積もりを取る（最大30〜50%節約可能）",
              "繁忙期（7〜9月）を避けて5〜6月や10月頃に依頼する",
              "草が短いうちに定期管理を始める",
              "廃棄物を自分で処分してコストを下げる",
              "定期管理契約でまとめて依頼する",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                {tip}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <Link href="/ranking/" className="bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-colors inline-block">
            無料見積もりを取る →
          </Link>
        </div>

        <div className="mt-6 flex gap-4 justify-center text-sm">
          <Link href="/cost/diy-vs-pro/" className="text-primary hover:underline">DIY vs 業者の比較を見る →</Link>
          <Link href="/ranking/" className="text-primary hover:underline">業者ランキングを見る →</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
