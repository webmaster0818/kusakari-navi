import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import companiesData from "@/data/companies.json";

export async function generateStaticParams() {
  return companiesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の口コミ・評判・料金`,
    description: `${company.name}の料金・特徴・メリット・デメリットを徹底解説。${company.tagline}`,
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) notFound();

  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "業者比較", href: "/ranking/" }, { label: company.name }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">{company.name}</h1>
              <p className="text-primary font-medium">{company.tagline}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">¥{company.pricePerSqm}/㎡〜</div>
              <div className="text-sm text-gray-500">対応エリア: {company.coverage}</div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{company.description}</p>
          <a
            href={company.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block w-full md:w-auto md:inline-block text-center bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-colors"
          >
            公式サイトで無料見積もりを取る ※PR
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Features */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="text-lg font-bold mb-3 text-gray-800"> 主な特徴</h2>
            <ul className="space-y-2">
              {company.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-0.5"></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pros & Cons */}
          <div className="space-y-4">
            <div className="bg-green-50 rounded-xl p-5">
              <h2 className="text-lg font-bold mb-3 text-green-700"> メリット</h2>
              <ul className="space-y-2">
                {company.pros.map((p, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5">
              <h2 className="text-lg font-bold mb-3 text-red-700"> デメリット</h2>
              <ul className="space-y-2">
                {company.cons.map((c, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">-</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-accent text-white rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">{company.name}に無料見積もりを依頼する</h2>
          <p className="text-red-100 text-sm mb-4">今すぐ費用確認。複数業者と比較検討もおすすめ！</p>
          <a
            href={company.officialUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-white text-accent hover:bg-red-50 px-8 py-3 rounded-full font-bold transition-colors"
          >
            公式サイトへ → ※PR
          </a>
        </div>

        <div className="mt-6 text-center">
          <Link href="/ranking/" className="text-primary hover:underline">← 業者ランキング一覧に戻る</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
