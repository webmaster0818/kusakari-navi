import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "記事の制作ポリシー",
  description: "草刈りナビの記事制作ポリシーです。編集方針・情報の正確性への取り組み・広告との関係について説明しています。",
};

export default function ContentPolicyPage() {
  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "記事の制作ポリシー" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">記事の制作ポリシー</h1>
          <p className="text-gray-500 text-sm">最終更新日：2026年4月27日</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-8 text-sm leading-relaxed text-gray-700">

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="text-green-900 font-medium">
              草刈りナビは、読者の方が最適な草刈り業者を選べるよう、独自の調査・比較に基づいた公正な情報提供を行うことをお約束します。
            </p>
          </div>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">編集方針</h2>
            <p className="mb-2">
              当サイトのコンテンツは、草刈り・除草・庭木管理に関する専門知識を持つ編集者・ライターが、独自の調査・比較・取材に基づいて制作しています。主な制作基準は以下のとおりです。
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>複数の業者・情報源を比較し、読者に有益な情報を提供する</li>
              <li>主観的な意見と客観的な事実を明確に区別して記載する</li>
              <li>シーン・場所・広さに応じた具体的な情報を優先する</li>
              <li>専門用語には適切な解説を付記する</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">情報の正確性への取り組み</h2>
            <p className="mb-2">
              当サイトでは、掲載情報の正確性を確保するために以下の対策を行っています。
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>掲載前の事実確認・複数情報源による裏付け</li>
              <li>料金・サービス内容等は各業者の公式情報を参照</li>
              <li>情報が古くなった場合の定期的な見直しと更新</li>
              <li>誤情報が判明した場合の速やかな訂正と訂正履歴の明記</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">
              ※掲載情報は調査時点のものであり、サービス内容・料金等は変更になる場合があります。最新情報は各業者の公式サイトをご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">広告・アフィリエイトとの関係</h2>
            <p className="mb-2">
              当サイトはアフィリエイト広告を含みますが、広告収益の有無はランキングや評価に一切影響しません。
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>ランキングは独自の評価基準（価格・対応エリア・口コミ・作業品質等）に基づき決定しています</li>
              <li>広告掲載業者であっても、評価基準を満たさない場合は上位に掲載しません</li>
              <li>広告・PR要素を含む記事・リンクには明示的にPRラベルを表示します</li>
              <li>読者の利益を最優先とし、スポンサーからの編集への干渉は一切受け付けません</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">更新頻度</h2>
            <p>
              ランキングページは定期的（概ね月1回以上）に見直しを行い、市場状況・業者の変更に応じて更新します。コラム・ガイド記事は情報の陳腐化が確認された場合に随時更新します。各ページの最終更新日を記載し、情報の鮮度を読者が確認できるようにしています。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">引用・参考元の明示</h2>
            <p>
              当サイトが外部情報を引用・参照する場合は、出典を明示します。統計データ・調査結果等を引用する際は、発行元・調査年を明記します。著作権を尊重し、無断転載は行いません。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">読者からのフィードバック対応</h2>
            <p>
              当サイトの情報に誤りや不明点がある場合、読者の皆様からのご指摘をお待ちしています。いただいたフィードバックは編集部で確認のうえ、内容が正確であれば速やかに修正対応します。お問い合わせは当サイトのお問い合わせフォームよりご連絡ください。
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
