import {
  Armchair,
  Dumbbell,
  Laptop2,
  Pencil,
  Plus,
  Shirt,
  Trash2,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description:
      "High-performance computing devices, smart home gadgets, and premium audio equipment for the modern workspace.",
    slug: "/electronics",
    count: "142 Products",
    icon: Laptop2,
  },
  {
    name: "Apparel",
    description:
      "Minimalist clothing essentials designed for utility and comfort. Features sustainable materials and muted color palettes.",
    slug: "/apparel",
    count: "86 Products",
    icon: Shirt,
  },
  {
    name: "Home & Office",
    description:
      "Ergonomic seating, desk organizers, and ambient lighting solutions to create an optimal environment for deep work.",
    slug: "/home-office",
    count: "34 Products",
    icon: Armchair,
  },
  {
    name: "Fitness",
    description:
      "Equipment and accessories for strength training and conditioning. Built to withstand rigorous daily use.",
    slug: "/fitness",
    count: "12 Products",
    icon: Dumbbell,
  },
];

export default function AdminCategoriesPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 p-6 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
            Categories
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Manage and organize your product catalog structure.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 rounded-lg border border-zinc-800 bg-zinc-900/70 p-2 sm:w-auto sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Category Name"
            className="h-10 min-w-0 flex-1 rounded-md border border-zinc-800 bg-[#131315] px-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder:text-zinc-500 sm:w-48"
          />
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200">
            <Plus className="size-4" />
            Create
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <section
              key={category.name}
              className="overflow-hidden rounded-lg border border-zinc-800 bg-[#18181B] transition-colors hover:border-zinc-700"
            >
              <div className="flex h-full flex-col">
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 text-zinc-100">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
                        {category.name}
                      </h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <button className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100">
                        <Pencil className="size-4" />
                        <span className="sr-only">Edit {category.name}</span>
                      </button>
                      <button className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-red-950/30 hover:text-red-300">
                        <Trash2 className="size-4" />
                        <span className="sr-only">Delete {category.name}</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-zinc-500">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-zinc-800 bg-zinc-950/30 px-5 py-4">
                  <span className="font-mono text-sm text-zinc-500">
                    {category.slug}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-800 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-200">
                    <span className="size-1.5 rounded-full bg-white/60" />
                    {category.count}
                  </span>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
