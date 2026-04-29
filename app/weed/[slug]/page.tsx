import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import weedsData from "@/data/weeds.json";
import companiesData from "@/data/companies.json";

export async function generateStaticParams() {
  return weedsData.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const weed = weedsData.find((w) => w.slug === slug);
  if (!weed) return {};
  return {
    title: weed.title,
    description: weed.description,
  };
}

export default async function WeedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const weed = weedsData.find((w) => w.slug === slug);
  if (!weed) notFound();

  const relatedCompanies = companiesData.filter((c) =>
    weed.recommendedCompanies.includes(c.slug)
  );

  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "雑草対策ガイド" }, { label: weed.title }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{weed.title}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">{weed.description}</p>

        {/* Sections */}
        <div className="space-y-6 mb-8">
          {weed.sections.map((section, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-primary mb-4"> ポイント・注意事項</h2>
          <ul className="space-y-2">
            {weed.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary mt-0.5 font-bold">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <div className="space-y-4">
            {weed.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-800 mb-2">Q. {faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-4">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related companies */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">おすすめ草刈り業者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedCompanies.map((company) => (
              <div key={company.slug} className="bg-white rounded-xl shadow-sm p-4 border border-green-100">
                <h3 className="font-bold text-gray-800 mb-1">{company.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{company.tagline}</p>
                <p className="text-primary font-bold text-sm mb-3">¥{company.pricePerSqm}/㎡〜</p>
                <Link
                  href={`/company/${company.slug}/`}
                  className="block text-center bg-primary hover:bg-green-700 text-white py-2 rounded-lg text-xs font-bold transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/ranking/" className="text-primary hover:underline">← 業者ランキングを見る</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
