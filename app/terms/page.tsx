import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約",
  description: "草刈りナビの利用規約です。サービス概要、禁止事項、免責事項などについて定めています。",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <Breadcrumb items={[{ label: "利用規約" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">利用規約</h1>
          <p className="text-gray-500 text-sm">最終更新日：2026年4月27日</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-8 text-sm leading-relaxed text-gray-700">

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">第1条（サービスの概要）</h2>
            <p>
              草刈りナビ（以下「当サイト」）は、草刈り業者の比較・情報提供を目的としたウェブサイトです。当サイトは、草刈り・除草・庭木管理業者に関する情報の収集・整理・提供を行うものであり、実際の作業や契約は各業者との間で行われます。当サイトは業者と利用者との契約関係に一切関与しません。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">第2条（禁止事項）</h2>
            <p className="mb-2">利用者は、当サイトの利用にあたり、以下の行為を行ってはなりません。</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>法令または公序良俗に反する行為</li>
              <li>当サイトのサーバーまたはネットワークに過度の負荷をかける行為</li>
              <li>当サイトの運営を妨害するおそれのある行為</li>
              <li>他の利用者または第三者に不利益・損害・不快感を与える行為</li>
              <li>当サイトに掲載されているコンテンツを無断で複製・転載・改変する行為</li>
              <li>不正アクセスその他これに準ずる行為</li>
              <li>その他、当サイトが不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">第3条（免責事項）</h2>
            <p className="mb-2">
              当サイトは、掲載情報の正確性・完全性・最新性について最善を尽くして管理していますが、その内容を保証するものではありません。当サイトに掲載された情報により利用者に損害が生じた場合でも、当サイトは一切の責任を負いません。
            </p>
            <p>
              また、当サイトからリンクされた外部サイトの内容や運営については当サイトは管理・責任を負いません。各業者への依頼・契約は利用者ご自身の判断と責任のもとで行ってください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">第4条（アフィリエイト広告について）</h2>
            <p>
              当サイトは、アフィリエイトプログラムを通じた広告収益により運営されています。利用者が当サイト経由で業者に申し込んだ場合、当サイトに広告報酬が支払われることがあります。ただし、広告収益の有無はランキングや掲載内容の評価に影響を与えず、独自の調査・基準に基づいて公正に掲載しています。広告を含む記事にはPRラベルを表示しています。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">第5条（知的財産権）</h2>
            <p>
              当サイトに掲載されているテキスト・画像・デザイン・ロゴ等の著作物に関する知的財産権は、当サイト運営者または正当な権利を有する第三者に帰属します。無断転載・複製・改変・再配布等を禁止します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">第6条（リンクについて）</h2>
            <p>
              当サイトへのリンクは原則自由です。ただし、フレーム内表示や当サイトコンテンツを誤認させる形でのリンクは禁止します。当サイトは外部サイトからのリンクについて事前通知を必要としませんが、公序良俗に反するサイトや法令違反のサイトからのリンクはお断りします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">第7条（規約の変更）</h2>
            <p>
              当サイトは、必要に応じて本利用規約を変更することができます。変更後の規約は当サイトに掲載した時点から効力を生じるものとし、利用者は変更後も当サイトを利用し続けることにより、変更後の規約に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-green-600">第8条（準拠法・管轄裁判所）</h2>
            <p>
              本利用規約は日本法に準拠し、解釈されるものとします。当サイトに関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
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
