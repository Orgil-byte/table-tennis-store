import Image from "next/image";
import {
  Filter,
  ImageIcon,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";

const filters = ["All", "Active", "Drafts"] as const;

const products = [
  {
    name: "Minimalist Smart Watch",
    category: "Electronics",
    price: "$299.00",
    inventory: 124,
    stockWidth: "85%",
    stockTone: "bg-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUstSPMhqeDnE8zDRvS0hWJ2vRMIKXlAsCL3QzIbeQ32gEAtDqNneIo0Gm3OHGMqq5zNDE7BglodbSgmx0PmwU2NTk65EY5XkbrLqmQnKtk0wC6BhZMx8ZYZ1WM0JP1prUHqBv4bnhBsGwo8xNtJrRwXPMxZcdBWO71k1sKgVgWOTC3E7gamypm0jvMiTIgYAdGJh9rVCO5-N_KB8gqlCEwCm-Uyxj6FjtHF4YfHrxZ5MtceU-4Q1qwQmaia_bwX614TLPChpTopwj",
  },
  {
    name: "Noise-Cancelling Headphones",
    category: "Audio",
    price: "$349.50",
    inventory: 8,
    stockWidth: "12%",
    stockTone: "bg-red-300",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFkW-Pf3resnWphclNYHDXj2UiCdLn7pu9q62Um7AI5c5LJfGbaRoTiHW1WXORIAASQRm-sdbhN18Qi0lJtsG68HqdHRLWt1McYoo7pv_niFAfK48jZOguRaFGyfOaR0VQBNYEbWcFg6TtJpQ7I1uBKm3Yh6DqUFHOKY5D_NugOi3XB89R8yNOOLYrg8OVyN6baW4B0CZYQ0HkBmZqxbBocC3ppQB2VCG5taMw4FSYfOHNCgha-p6fNdQ6W7oGVy2ywyNXxLD44x70",
  },
  {
    name: "Ergonomic Desk Chair",
    category: "Furniture",
    price: "$599.00",
    inventory: 42,
    stockWidth: "45%",
    stockTone: "bg-white",
  },
  {
    name: "Pro Elite Running Shoes",
    category: "Apparel",
    price: "$180.00",
    inventory: 210,
    stockWidth: "95%",
    stockTone: "bg-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZb6D18C0HguuuJzMIL8aQONEWL-GC7uMk3vRknOO4wTAsKLl-leoDxcAWzWETWlqLmo_woLuzC4yrCQchHd9xI2UsznxEMABK1Y88K0zk-OafblghdpVjE70MMsNRNpsEFad0QpTarYNqowRXHqv2cn7ZIZRh6xSF1E0CYf9GdDtzK5LpT50q0wEMz6PTT4h1tItS2hV3E4BJcqLAZNMgnq-z5gaz8NymLrZSd_Vycwk8XMGdAutNapqj9hB_7gSUWD1uYSXYmrri",
  },
];

export default function AdminProductsPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 p-6 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
            Products
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Manage your catalog, inventory, and pricing.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200">
          <Plus className="size-4" />
          Add Product
        </button>
      </div>

      <section className="overflow-hidden rounded-xl border border-zinc-800 bg-[#18181B]">
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/50 px-4 py-4">
          <div className="flex items-center gap-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={[
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  index === 0
                    ? "border border-zinc-700 bg-zinc-800 text-zinc-100"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100",
                ].join(" ")}
              >
                {filter}
              </button>
            ))}
          </div>

          <button className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100">
            <Filter className="size-4" />
            <span className="sr-only">Filter products</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/30">
                <th className="w-14 px-4 py-3 text-sm font-medium text-zinc-500" />
                <th className="px-4 py-3 text-sm font-medium text-zinc-500">
                  Product Name
                </th>
                <th className="px-4 py-3 text-sm font-medium text-zinc-500">
                  Category
                </th>
                <th className="px-4 py-3 text-sm font-medium text-zinc-500">
                  Price
                </th>
                <th className="px-4 py-3 text-sm font-medium text-zinc-500">
                  Inventory
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-zinc-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800">
              {products.map((product) => (
                <tr
                  key={product.name}
                  className="group transition-colors hover:bg-zinc-900/40"
                >
                  <td className="px-4 py-3">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="size-10 rounded-lg border border-zinc-800 object-cover"
                      />
                    ) : (
                      <div className="flex size-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800 text-zinc-500">
                        <ImageIcon className="size-4" />
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-zinc-100">{product.name}</div>
                    <div className="mt-1 text-sm text-zinc-500 md:hidden">
                      {product.category}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-md border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-300">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-100">
                    {product.price}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className={`h-full ${product.stockTone}`}
                          style={{ width: product.stockWidth }}
                        />
                      </div>
                      <span
                        className={[
                          "text-sm",
                          product.inventory < 10
                            ? "text-red-300"
                            : "text-zinc-300",
                        ].join(" ")}
                      >
                        {product.inventory}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                      <button className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100">
                        <Pencil className="size-4" />
                        <span className="sr-only">Edit {product.name}</span>
                      </button>
                      <button className="rounded-md p-2 text-red-300 transition-colors hover:bg-red-950/30 hover:text-red-200">
                        <Trash2 className="size-4" />
                        <span className="sr-only">Delete {product.name}</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-800 bg-zinc-950/40 px-4 py-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Showing 1 to 4 of 48 results</span>
          <div className="flex items-center gap-1">
            <button
              disabled
              className="rounded-md px-2 py-1 text-zinc-600 transition-colors disabled:cursor-not-allowed"
            >
              Prev
            </button>
            <button className="rounded-md border border-zinc-700 bg-zinc-800 px-2 py-1 font-medium text-zinc-100">
              1
            </button>
            <button className="rounded-md px-2 py-1 transition-colors hover:bg-zinc-800 hover:text-zinc-100">
              2
            </button>
            <button className="rounded-md px-2 py-1 transition-colors hover:bg-zinc-800 hover:text-zinc-100">
              3
            </button>
            <span className="px-2 py-1">...</span>
            <button className="rounded-md px-2 py-1 transition-colors hover:bg-zinc-800 hover:text-zinc-100">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
