import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "草刈りナビのプライバシーポリシーです。個人情報の取り扱いについて定めています。",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">プライバシーポリシー</h1>
          <p className="text-gray-500 text-sm">最終更新日：2026年4月27日</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-8 text-sm leading-relaxed text-gray-700">

          <p>
            株式会社MediaX（以下「当社」）が運営する草刈りナビ（以下「当サイト」）は、利用者の個人情報の保護を重要な責務と考え、以下のプライバシーポリシーを定めます。
          </p>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">個人情報の収集</h2>
            <p className="mb-2">
              当サイトでは、以下の情報を自動的に収集する場合があります。
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>アクセスログ（IPアドレス、ブラウザの種類、アクセス日時、参照元URL等）</li>
              <li>Cookie情報（セッション情報、利用状況の記録等）</li>
              <li>アクセス解析ツールが収集する匿名の統計情報</li>
            </ul>
            <p className="mt-2">
              当サイトでは、お問い合わせフォーム等を通じて氏名・メールアドレス等の個人情報を収集することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">利用目的</h2>
            <p className="mb-2">収集した情報は、以下の目的で利用します。</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>当サイトのコンテンツ改善・運営のため</li>
              <li>お問い合わせへの対応のため</li>
              <li>アクセス状況の分析・統計のため</li>
              <li>不正アクセスの検知・防止のため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">第三者提供</h2>
            <p>
              当社は、以下の場合を除き、収集した個人情報を第三者に提供しません。
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>ご本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護のために必要な場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">Cookie・アクセス解析ツール</h2>
            <p className="mb-2">
              当サイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p>
              Cookieの使用を希望しない場合は、ブラウザの設定にてCookieを無効にすることができます。詳細については
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Googleのプライバシーポリシー</a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">広告配信（アフィリエイト）</h2>
            <p>
              当サイトはアフィリエイトプログラムを利用しており、広告配信事業者がCookieを使用して利用者の興味に応じた広告を表示することがあります。広告配信事業者のCookieの使用については各事業者のプライバシーポリシーをご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">個人情報の管理</h2>
            <p>
              当社は収集した個人情報について、不正アクセス・紛失・改ざん・漏洩等を防ぐため、適切なセキュリティ対策を講じます。また、利用目的を達成した個人情報は適切に削除します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">お問い合わせ</h2>
            <p>
              個人情報の開示・訂正・削除等のご請求、その他プライバシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">ポリシーの変更</h2>
            <p>
              当社は、法令の改正や事業内容の変更等により、本プライバシーポリシーを予告なく変更することがあります。変更後のポリシーは当サイトに掲載した時点から効力を生じます。
            </p>
          </section>

          <div className="pt-4 border-t border-gray-200 text-xs text-gray-500">
            <p>運営者：株式会社MediaX</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
