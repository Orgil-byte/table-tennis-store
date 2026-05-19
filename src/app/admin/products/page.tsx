import {
  Archive,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  ImageOff,
  Layers3,
  Pencil,
  Plus,
  Search,
} from "lucide-react";

type ProductStatus = "ACTIVE" | "DRAFT" | "ARCHIVED";

type MockProduct = {
  name: string;
  slug: string;
  category: string;
  status: ProductStatus;
  variantCount: number;
  variantSummary: string;
  priceRange: string;
  totalStock: number;
  stockBadge: string | null;
  updatedAt: string;
  imageUrl: string | null;
};

const products: MockProduct[] = [
  {
    name: "Minimalist Smart Watch",
    slug: "minimalist-smart-watch",
    category: "Electronics",
    status: "ACTIVE",
    variantCount: 6,
    variantSummary: "2 colors · 3 sizes",
    priceRange: "$199.99 - $249.99",
    totalStock: 128,
    stockBadge: null,
    updatedAt: "Oct 24, 2023",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuc_LsEl-ERb1-VS5D_mGCXPg7fYct5rsAFqBaVBBXai4TknJfjZAmxDKhtT5MuL9SOgpyl31oktjaY2EINOhqtkGgxLY_fiZvgLXokGtpsYV-Q8nWXJlnUwk-POO1CjnZV_0Hx_uVsYAeEyvyPtc_keH6hx4qd1c4msKp5p65doPuJhFWtP2sEpskfkCfPRLCVGJ8fHgi8-1jqrUpfVLsl9nYglJUiVXIrY_ajdgzsQlCBW7UutS74FrRILKemy7LPggTuo9B795d",
  },
  {
    name: "Ergonomic Desk Chair",
    slug: "ergo-desk-chair-v2",
    category: "Home Goods",
    status: "DRAFT",
    variantCount: 1,
    variantSummary: "Standard",
    priceRange: "$299.00",
    totalStock: 4,
    stockBadge: "Low stock",
    updatedAt: "Oct 20, 2023",
    imageUrl: null,
  },
];

const statusLabels: Record<ProductStatus, string> = {
  ACTIVE: "Active",
  DRAFT: "Draft",
  ARCHIVED: "Archived",
};

const tableHeadings = [
  "Product",
  "Status",
  "Variants",
  "Price Range",
  "Inventory",
  "Updated",
  "Actions",
];

const filterGroups = [
  {
    label: "Status",
    options: ["All", "Active", "Draft", "Archived"],
  },
  {
    label: "Category",
    options: ["All", "Electronics", "Apparel", "Home Goods"],
  },
  {
    label: "Stock",
    options: ["All", "In stock", "Low stock", "Out of stock"],
  },
];

const pages = ["1", "2", "3"];

export default function AdminProductsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
            Products
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Manage product catalog, inventory, variants, images, and status.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-10 items-center justify-center gap-2 self-start rounded bg-white px-4 text-sm font-semibold text-zinc-950 shadow-[0_4px_14px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-zinc-200 sm:self-auto"
        >
          <Plus className="size-4" />
          Create product
        </button>
      </div>

      <section className="mb-4 rounded-lg border border-zinc-800 bg-[#18181B] p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by product name, slug, or SKU"
              className="h-10 w-full rounded border border-zinc-800 bg-[#131315] pl-10 pr-4 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
            />
          </label>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:flex lg:shrink-0">
            {filterGroups.map((filter) => (
              <label
                key={filter.label}
                className="relative w-full sm:min-w-36 lg:w-auto"
              >
                <span className="sr-only">{filter.label}</span>
                <select className="h-10 w-full appearance-none rounded border border-zinc-800 bg-[#131315] px-3 pr-9 text-sm text-zinc-200 outline-none transition-colors focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500">
                  {filter.options.map((option, index) => (
                    <option key={option}>
                      {index === 0 ? `${filter.label}: ${option}` : option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="hidden overflow-hidden rounded-lg border border-zinc-800 bg-[#18181B] md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-800">
                {tableHeadings.map((heading) => (
                  <th
                    key={heading}
                    className={[
                      "p-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500",
                      heading === "Actions" ? "text-right" : "",
                    ].join(" ")}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {products.map((product) => (
                <tr
                  key={product.slug}
                  className="transition-colors hover:bg-[#131315]"
                >
                  <td className="p-4">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded border border-zinc-800 bg-[#131315]">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={`${product.name} product image`}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <ImageOff className="size-5 text-zinc-600" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-zinc-50">
                          {product.name}
                        </div>
                        <div className="mt-0.5 truncate text-sm text-zinc-500">
                          {product.slug}
                        </div>
                        <div className="mt-0.5 truncate text-sm text-zinc-600">
                          {product.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={[
                        "inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                        product.status === "ACTIVE"
                          ? "border border-white/20 bg-white/10 text-zinc-50"
                          : "",
                        product.status === "DRAFT"
                          ? "border border-zinc-700 bg-zinc-800 text-zinc-200"
                          : "",
                        product.status === "ARCHIVED"
                          ? "border border-zinc-800 bg-zinc-950 text-zinc-500"
                          : "",
                      ].join(" ")}
                    >
                      {statusLabels[product.status]}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="text-sm font-semibold text-zinc-100">
                      {product.variantCount}{" "}
                      {product.variantCount === 1 ? "variant" : "variants"}
                    </div>
                    <div className="mb-1 text-sm text-zinc-500">
                      {product.variantSummary}
                    </div>
                    <button
                      type="button"
                      className="text-[11px] font-semibold text-zinc-400 underline decoration-zinc-700 underline-offset-2 transition-colors hover:text-zinc-50"
                    >
                      View variants
                    </button>
                  </td>
                  <td className="p-4 text-sm text-zinc-100">
                    {product.priceRange}
                  </td>
                  <td className="p-4">
                    <div className="mb-1 text-sm font-semibold text-zinc-100">
                      {product.totalStock} total
                    </div>
                    {product.stockBadge ? (
                      <span className="inline-flex items-center rounded border border-red-900/50 bg-red-950/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300">
                        {product.stockBadge}
                      </span>
                    ) : null}
                  </td>
                  <td className="p-4 text-sm text-zinc-500">
                    {product.updatedAt}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        title="Edit product"
                        className="flex size-8 items-center justify-center rounded text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
                      >
                        <Pencil className="size-4" />
                        <span className="sr-only">Edit product</span>
                      </button>
                      <button
                        type="button"
                        title="Manage images"
                        className="flex size-8 items-center justify-center rounded text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
                      >
                        <ImageIcon className="size-4" />
                        <span className="sr-only">Manage images</span>
                      </button>
                      <button
                        type="button"
                        title="Archive product"
                        className="flex size-8 items-center justify-center rounded text-zinc-400 transition-colors hover:bg-red-950/30 hover:text-red-300"
                      >
                        <Archive className="size-4" />
                        <span className="sr-only">Archive product</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex flex-col gap-4 md:hidden">
        {products.map((product) => (
          <article
            key={product.slug}
            className="rounded-lg border border-zinc-800 bg-[#18181B] p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded border border-zinc-800 bg-[#131315]">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={`${product.name} product image`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <ImageOff className="size-5 text-zinc-600" />
                  )}
                </div>

                <div className="min-w-0">
                  <h2 className="break-words text-sm font-semibold leading-5 text-zinc-50">
                    {product.name}
                  </h2>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {product.category}
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <span
                  className={[
                    "inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                    product.status === "ACTIVE"
                      ? "border border-white/20 bg-white/10 text-zinc-50"
                      : "",
                    product.status === "DRAFT"
                      ? "border border-zinc-700 bg-zinc-800 text-zinc-200"
                      : "",
                    product.status === "ARCHIVED"
                      ? "border border-zinc-800 bg-zinc-950 text-zinc-500"
                      : "",
                  ].join(" ")}
                >
                  {statusLabels[product.status]}
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-zinc-800 pt-4">
              <div className="min-w-0">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Price
                </div>
                <div className="break-words text-sm text-zinc-100">
                  {product.priceRange}
                </div>
              </div>
              <div className="min-w-0">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Stock
                </div>
                <div className="flex flex-col items-start gap-1">
                  <div className="text-sm text-zinc-100">
                    {product.totalStock} total
                  </div>
                  {product.stockBadge ? (
                    <span className="inline-flex items-center rounded border border-red-900/50 bg-red-950/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300">
                      {product.stockBadge}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-zinc-800 pt-4">
              <div>
                <div className="text-sm text-zinc-500">
                  {product.variantCount}{" "}
                  {product.variantCount === 1 ? "variant" : "variants"}
                </div>
                <div className="mt-0.5 text-sm text-zinc-600">
                  {product.variantSummary}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  className="inline-flex h-9 min-w-0 items-center justify-center gap-1.5 rounded border border-zinc-800 bg-[#131315] px-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
                >
                  <Pencil className="size-3.5 shrink-0" />
                  <span className="truncate">Edit</span>
                </button>
                <button
                  type="button"
                  className="inline-flex h-9 min-w-0 items-center justify-center gap-1.5 rounded border border-zinc-800 bg-[#131315] px-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
                >
                  <Layers3 className="size-3.5 shrink-0" />
                  <span className="truncate">Variants</span>
                </button>
                <button
                  type="button"
                  className="inline-flex h-9 min-w-0 items-center justify-center gap-1.5 rounded border border-zinc-800 bg-[#131315] px-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
                >
                  <ImageIcon className="size-3.5 shrink-0" />
                  <span className="truncate">Images</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-zinc-800 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-zinc-500">
          Showing 1 to 10 of 45 results
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <button
            type="button"
            disabled
            className="flex size-8 cursor-not-allowed items-center justify-center rounded border border-zinc-800 text-zinc-500 opacity-50"
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous page</span>
          </button>
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              className={[
                "flex size-8 items-center justify-center rounded border text-sm font-semibold transition-colors",
                page === "1"
                  ? "border-zinc-700 bg-zinc-800 text-zinc-50"
                  : "border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50",
              ].join(" ")}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded border border-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next page</span>
          </button>
        </div>
      </div>
    </div>
  );
}
