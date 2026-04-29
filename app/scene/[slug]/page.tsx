import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import scenesData from "@/data/scenes.json";
import companiesData from "@/data/companies.json";

export async function generateStaticParams() {
  return scenesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scene = scenesData.find((s) => s.slug === slug);
  if (!scene) return {};
  return {
    title: scene.title,
    description: scene.description,
  };
}

export default async function ScenePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scene = scenesData.find((s) => s.slug === slug);
  if (!scene) notFound();

  const relatedCompanies = companiesData.filter((c) =>
    scene.recommendedCompanies.includes(c.slug)
  );

  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "シーン別ガイド" }, { label: scene.title }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-2xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{scene.title}</h1>
          <p className="text-yellow-200 font-medium">{scene.heroText}</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">{scene.description}</p>

        {/* Sections */}
        <div className="space-y-6 mb-8">
          {scene.sections.map((section, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="bg-secondary/10 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-secondary mb-4">💡 知っておくべきポイント</h2>
          <ul className="space-y-2">
            {scene.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-secondary mt-0.5 font-bold">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <div className="space-y-4">
            {scene.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-800 mb-2">Q. {faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-4">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended companies */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">このシーンにおすすめの業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedCompanies.map((company, index) => (
              <div key={company.slug} className="bg-white rounded-xl shadow-sm p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-black text-primary">{index + 1}位</span>
                  <h3 className="font-bold text-gray-800">{company.name}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-3">{company.tagline}</p>
                <p className="text-primary font-bold text-sm mb-3">¥{company.pricePerSqm}/㎡〜</p>
                <Link
                  href={`/company/${company.slug}/`}
                  className="block text-center bg-primary hover:bg-green-700 text-white py-2 rounded-lg text-xs font-bold transition-colors"
                >
                  詳細・見積もり
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/ranking/" className="text-primary hover:underline">← 全業者ランキングを見る</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
