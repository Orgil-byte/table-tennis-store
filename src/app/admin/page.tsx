import {
  ArrowRight,
  Clock3,
  DollarSign,
  Package2,
  ReceiptText,
  ShoppingBag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "$124,500",
    note: "from last month",
    delta: "+12%",
    tone: "up" as const,
    icon: DollarSign,
  },
  {
    label: "Total Orders",
    value: "1,240",
    note: "from last month",
    delta: "+5%",
    tone: "up" as const,
    icon: ShoppingBag,
  },
  {
    label: "Total Products",
    value: "450",
    note: "Stable inventory",
    icon: Package2,
  },
  {
    label: "Pending Orders",
    value: "12",
    note: "Requires immediate action",
    highlight: true,
    icon: Clock3,
  },
  {
    label: "Avg. Order Value",
    value: "$100.40",
    note: "from last month",
    delta: "-2%",
    tone: "down" as const,
    icon: ReceiptText,
  },
];

const topProducts = [
  { name: "Wireless Earbuds Pro", units: "850 units", width: "w-[85%]", fill: "bg-white text-zinc-900" },
  { name: "Mechanical Keyboard", units: "650 units", width: "w-[65%]", fill: "bg-zinc-400 text-zinc-900" },
  { name: "Ergonomic Mouse", units: "500 units", width: "w-[50%]", fill: "bg-zinc-500 text-zinc-950" },
  { name: "Monitor Stand", units: "400 units", width: "w-[40%]", fill: "bg-zinc-600 text-white" },
  { name: "Desk Mat", units: "300 units", width: "w-[30%]", fill: "bg-zinc-700 text-white" },
];

export default function AdminOverviewPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] p-6 md:p-8">
      <div className="mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
            Overview
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Here&apos;s what&apos;s happening with your store today.
          </p>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <section
              key={stat.label}
              className={[
                "rounded-lg border p-5 transition-colors",
                stat.highlight
                  ? "border-zinc-700 bg-zinc-900"
                  : "border-zinc-800 bg-[#18181B] hover:border-zinc-700",
              ].join(" ")}
            >
              <div className="mb-4 flex items-start justify-between">
                <span
                  className={[
                    "text-sm font-medium",
                    stat.highlight ? "text-zinc-100" : "text-zinc-400",
                  ].join(" ")}
                >
                  {stat.highlight ? (
                    <span className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-white" />
                      {stat.label}
                    </span>
                  ) : (
                    stat.label
                  )}
                </span>
                <Icon
                  className={[
                    "size-4",
                    stat.highlight ? "text-zinc-100" : "text-zinc-500",
                  ].join(" ")}
                />
              </div>

              <div>
                <div
                  className={[
                    "text-[30px] leading-9 font-bold tracking-tight",
                    stat.highlight ? "text-zinc-50" : "text-zinc-100",
                  ].join(" ")}
                >
                  {stat.value}
                </div>
                <div className="mt-1 flex items-center gap-1 text-sm text-zinc-500">
                  {stat.delta ? (
                    <span
                      className={[
                        "inline-flex items-center gap-1",
                        stat.tone === "down" ? "text-red-300" : "text-zinc-100",
                      ].join(" ")}
                    >
                      {stat.tone === "down" ? (
                        <TrendingDown className="size-3.5" />
                      ) : (
                        <TrendingUp className="size-3.5" />
                      )}
                      {stat.delta}
                    </span>
                  ) : null}
                  <span>{stat.note}</span>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="overflow-hidden rounded-lg border border-zinc-800 bg-[#18181B]">
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
            Top 5 Selling Products
          </h2>
          <button className="inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-100">
            View Report
            <ArrowRight className="size-4" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {topProducts.map((product) => (
              <div key={product.name} className="flex items-center gap-4">
                <div className="w-32 shrink-0 truncate text-sm text-zinc-400">
                  {product.name}
                </div>
                <div className="relative h-8 flex-1 overflow-hidden rounded-sm bg-zinc-800">
                  <div
                    className={`absolute inset-y-0 left-0 flex items-center justify-end rounded-sm pr-3 text-[13px] font-bold ${product.width} ${product.fill}`}
                  >
                    <span className="whitespace-nowrap">{product.units}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
