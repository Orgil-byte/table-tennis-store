import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Edit,
  ImageIcon,
  Layers3,
  Plus,
  Trash2,
} from "lucide-react";

type ProductStatus = "Active" | "Draft" | "Archived";

type MockProduct = {
  id: number;
  name: string;
  slug: string;
  category: string;
  status: ProductStatus;
  variants: number;
  totalStock: number;
  priceRange: string;
  created: string;
  imageUrl?: string;
};

const filters = [
  "All",
  "Active",
  "Draft",
  "Archived",
  "No variants",
  "Low stock",
  "Out of stock",
] as const;

const products: MockProduct[] = [
  {
    id: 1,
    name: "Classic Hoodie",
    slug: "classic-hoodie",
    category: "Apparel",
    status: "Active",
    variants: 3,
    totalStock: 150,
    priceRange: "$45.00 - $55.00",
    created: "Oct 12, 2023",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9jcrCBWPhB6xx_2D7_O-zmiI9K1Tq-ENO4DIMqcQIeosui2ws8hLAknIDLrUEGiatmPZu3P9UOpBK9VgRIE1MteC7NVqPvhGd4C_d2wpUi--hrRLrXO5n2Zs4zt4gPVYW2jA_G6MwH2mCNmJXuwIusI5O8eq0bo-HE5ofdm_mt0rqjyTFd3pbGRNEoJvWT31r6NNe_AIBoiITejsrd0KkRbkXA6CvUtFkoGLgITF8IY7KLj0Tlx6thcJUguf9WuCcxJawXjXXWx7o",
  },
  {
    id: 2,
    name: "Premium Sneakers",
    slug: "premium-sneakers",
    category: "Footwear",
    status: "Draft",
    variants: 5,
    totalStock: 0,
    priceRange: "$120.00",
    created: "Oct 24, 2023",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRyIU4qyb2sySXX5dUt9hAayxAGtEYcUP44kqPFDFG9Xj0R9-2L5unABog3grQTr7XiwqhMgthG42pBlMppLMDKePDbK9pzkaRDgjKjTJuQxST7D4HVdH0Uz7JCjovl8aLc_MTEe0tC2uuN1R89PFw2AfKiR6oylGbP2cBfulYtmt0QcwReLfHbFtFPrnzRw0P6dm2CEn9alurOIJfvuFbCFAiAOqyw5cpy8EEj-CukPDMCix4XhG1EgcahaGOL0JGAfUBAwTYBnWQ",
  },
  {
    id: 3,
    name: "Minimalist Watch",
    slug: "minimalist-watch",
    category: "Accessories",
    status: "Archived",
    variants: 0,
    totalStock: 0,
    priceRange: "$199.00",
    created: "Nov 01, 2023",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMvVAcjl4OIrKLOrUywfBjrG-zn-oFEX0bKH_ciuWU3iQo06ZozGbYp7Ne6eYNBGNuBkxHRvQ2uoH5pXobzPn1VHMzW5mT0iN-HxaDBWrUqwoZhZ583LecqMOsI8xcsmMLWrFmlJzWJwghldI8cIhyaAMAoSZVBG7BkflIuPl6l1tihuv4WOc9C70nDU8ndIUwMfKEftQCMDBp954vV4sS9-T3EfUzY86Wn19DJ7c7Lq3VapnowONsSuxHiM0MQUIEBSKiK8Ml7oGE",
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    slug: "cotton-t-shirt",
    category: "Apparel",
    status: "Active",
    variants: 4,
    totalStock: 12,
    priceRange: "$25.00",
    created: "Nov 15, 2023",
  },
];

const AdminProductsPage = () => (
  <div className="min-h-[calc(100vh-3.5rem)] w-full min-w-0 overflow-hidden bg-[#131315]">
    <div className="mx-auto flex w-full max-w-360 flex-col gap-6 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h1 className="text-xl font-semibold leading-7 text-[#e5e1e4]">
            Products Directory
          </h1>
          <p className="mt-1 text-[13px] leading-4.5 text-[#c4c7c8]">
            Manage your catalog, variants, and stock levels.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-[#444748] bg-[#2a2a2c] px-4 py-2 text-[13px] leading-4.5 text-[#e5e1e4] transition-colors hover:bg-[#353437]">
            <Download className="size-4" />
            Export CSV
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-[13px] leading-4.5 text-[#2f3131] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors hover:bg-[#e2e2e2]">
            <Plus className="size-4" />
            Add Product
          </button>
        </div>
      </div>

      <div className="border-b border-[#444748] pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={[
                "rounded-full border px-3 py-1.5 text-[13px] leading-4.5 transition-colors",
                index === 0
                  ? "border-transparent bg-[#313032] text-[#e5e1e4]"
                  : "border-[#444748] bg-transparent text-[#c4c7c8] hover:bg-[#353437]",
                index === 4 ? "sm:ml-3" : "",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <section className="flex min-w-0 flex-col gap-3 md:gap-0 md:overflow-hidden md:rounded-lg md:border md:border-[#444748] md:bg-[#131315]">
        <div className="hidden grid-cols-[4.75rem_minmax(12rem,1.7fr)_minmax(7.5rem,0.9fr)_7rem_6rem_7.5rem_5.25rem] items-center gap-x-6 border-b border-[#444748] bg-[#1c1b1d] px-5 py-3 text-[11px] font-semibold uppercase leading-4 tracking-wider text-[#c4c7c8] md:grid xl:grid-cols-[4.75rem_minmax(14rem,1.8fr)_minmax(8rem,0.9fr)_7rem_6rem_7.5rem_12rem_5.25rem]">
          <div className="text-center">Image</div>
          <div>Product Details</div>
          <div>Category</div>
          <div className="text-center">Status</div>
          <div className="text-center">Variants</div>
          <div className="text-center">Total Stock</div>
          <div className="hidden text-right xl:block">Price Range</div>
          <div className="text-center">Actions</div>
        </div>

        <div className="flex flex-col gap-3 md:block md:divide-y md:divide-[#444748]">
          {products.map((product) => (
            <article
              key={product.id}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)_minmax(5.5rem,auto)] gap-x-3 overflow-hidden rounded-lg border border-[#444748] bg-[#18181a] p-4 md:grid-cols-[4.75rem_minmax(12rem,1.7fr)_minmax(7.5rem,0.9fr)_7rem_6rem_7.5rem_5.25rem] md:items-center md:gap-x-6 md:rounded-none md:border-0 md:bg-transparent md:px-5 md:py-3 md:transition-colors md:hover:bg-[#1c1b1d] xl:grid-cols-[4.75rem_minmax(14rem,1.8fr)_minmax(8rem,0.9fr)_7rem_6rem_7.5rem_12rem_5.25rem]"
            >
              <div className="col-start-1 row-start-1 md:col-auto md:row-auto md:justify-self-center">
                {product.imageUrl ? (
                  <div className="size-10 shrink-0 overflow-hidden rounded border border-[#444748] bg-[#2a2a2c]">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex size-10 shrink-0 items-center justify-center rounded border border-[#444748] bg-[#2a2a2c] text-[#444748]">
                    <ImageIcon className="size-5" />
                  </div>
                )}
              </div>

              <div className="col-start-2 row-start-1 min-w-0 md:col-auto md:row-auto">
                <div className="truncate text-sm font-medium leading-5 text-[#e5e1e4]">
                  {product.name}
                </div>
                <div className="mt-0.5 truncate font-mono text-[11px] leading-5 text-[#c4c7c8]">
                  {product.slug}
                  <span className="hidden md:inline xl:hidden">
                    / {product.priceRange}
                  </span>
                </div>
              </div>

              <div className="col-start-2 row-start-2 mt-4 min-w-0 md:col-auto md:row-auto md:mt-0 md:truncate md:text-[13px] md:leading-4.5 md:text-[#c4c7c8]">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8e9192] md:hidden">
                  Category
                </div>
                <div className="mt-0.5 truncate text-[13px] leading-4.5 text-[#e5e1e4] md:mt-0 md:text-[#c4c7c8]">
                  {product.category}
                </div>
              </div>

              <div className="col-start-3 row-start-1 justify-self-end md:col-auto md:row-auto md:justify-self-center">
                <span
                  className={[
                    "inline-flex max-w-full items-center rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                    product.status === "Active"
                      ? "bg-[#e2e2e2] text-[#636565]"
                      : "",
                    product.status === "Draft"
                      ? "bg-[#4a4b53] text-[#bcbbc5]"
                      : "",
                    product.status === "Archived"
                      ? "border border-[#444748] bg-[#353437] text-[#c4c7c8]"
                      : "",
                  ].join(" ")}
                >
                  {product.status}
                </span>
              </div>

              <div
                className={[
                  "col-start-3 row-start-2 mt-4 min-w-0 text-right md:col-auto md:row-auto md:mt-0 md:text-center md:font-mono md:text-[13px] md:leading-5",
                  product.variants === 0
                    ? "md:text-[#c4c7c8]"
                    : "md:text-[#e5e1e4]",
                ].join(" ")}
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8e9192] md:hidden">
                  Variants
                </div>
                <div className="mt-0.5 font-mono text-[13px] leading-5 text-[#e5e1e4] md:mt-0 md:text-inherit">
                  {product.variants}
                </div>
              </div>

              <div className="col-start-2 row-start-3 mt-3 min-w-0 font-mono text-[13px] leading-5 md:col-auto md:row-auto md:mt-0 md:text-center">
                <div className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#8e9192] md:hidden">
                  Stock
                </div>
                <div
                  className={`${product.totalStock < 10 ? "text-red-500" : "text-green-500"} mt-0.5 md:mt-0`}
                >
                  {product.totalStock}
                </div>
              </div>

              <div className="col-span-2 col-start-2 row-start-4 mt-3 min-w-0 md:col-auto md:row-auto md:mt-0 md:hidden xl:block">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8e9192] md:hidden">
                  Price Range
                </div>
                <div className="mt-0.5 truncate font-mono text-[13px] leading-5 text-[#e5e1e4] xl:mt-0 xl:text-right">
                  {product.priceRange}
                </div>
              </div>
              <div className="col-span-3 col-start-1 row-start-5 mt-4 flex items-center justify-end gap-1 border-t border-[#444748] pt-3 md:col-auto md:row-auto md:mt-0 md:justify-center md:border-0 md:pt-0">
                <button
                  className="rounded p-1.5 text-[#c4c7c8] transition-colors hover:bg-[#353437] hover:text-[#e5e1e4]"
                  title="View/Edit"
                >
                  <Edit className="size-4.5" />
                  <span className="sr-only">Edit {product.name}</span>
                </button>

                <button
                  className="rounded p-1.5 text-[#c4c7c8] transition-colors hover:bg-[#353437] hover:text-[#e5e1e4]"
                  title="Manage Product"
                >
                  <Layers3 className="size-4.5" />
                  <span className="sr-only">Manage {product.name}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="overflow-hidden rounded-lg border border-[#444748] md:rounded-none md:border-0 md:border-t md:border-[#444748]">
          <div className="flex flex-col gap-3 border-t border-[#444748] bg-[#1c1b1d] p-4 text-[13px] leading-4.5 sm:flex-row sm:items-center sm:justify-between md:border-t-0">
            <span className="text-[#c4c7c8]">
              Showing 1 to 4 of 128 products
            </span>

            <div className="flex items-center gap-1">
              <button
                disabled
                className="rounded border border-[#444748] bg-[#131315] p-1 text-[#c4c7c8] opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="size-4" />
                <span className="sr-only">Previous page</span>
              </button>
              {["1", "2", "3"].map((page) => (
                <button
                  key={page}
                  className={[
                    "rounded px-3 py-1 text-[13px] leading-4.5",
                    page === "1"
                      ? "border border-[#444748] bg-[#353437] text-[#e5e1e4]"
                      : "border border-transparent bg-[#131315] text-[#c4c7c8] transition-colors hover:bg-[#353437]",
                  ].join(" ")}
                >
                  {page}
                </button>
              ))}
              <span className="px-2 text-[#c4c7c8]">...</span>
              <button className="rounded border border-[#444748] bg-[#131315] p-1 text-[#c4c7c8] transition-colors hover:bg-[#353437]">
                <ChevronRight className="size-4" />
                <span className="sr-only">Next page</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default AdminProductsPage;
