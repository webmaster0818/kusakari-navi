import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="bg-green-50 border-b border-green-100">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
          <li>
            <Link href="/" className="text-primary hover:underline">ホーム</Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className="text-gray-400">›</span>
              {item.href ? (
                <Link href={item.href} className="text-primary hover:underline">{item.label}</Link>
              ) : (
                <span className="text-gray-700 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
