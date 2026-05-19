"use server";

import { getCategories } from "@/src/actions/categories-actions";
import { AddCategFromPage } from "./addCategFromPage";
import { DeleteCategFromPage } from "./deleteCategFromPage";
import { UpdateCategFromPage } from "./updateCategFromPage";

const AdminCategoriesPage = async () => {
  const categories = await getCategories();

  return (
    <div className="mx-auto flex w-full max-w-360 flex-col gap-8 p-6 md:p-8">
      <AddCategFromPage />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.length === 0 ? (
          <div className="text-3xl font-semibold tracking-tight text-zinc-50">
            No categories yet. Create your first category to organize products.
          </div>
        ) : (
          categories.map((category) => {
            return (
              <section
                key={category.name}
                className="overflow-hidden rounded-lg border border-zinc-800 bg-[#18181B] transition-colors hover:border-zinc-700"
              >
                <div className="flex h-full flex-col">
                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
                          {category.name}
                        </h2>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                            category.isActive
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                              : "border-zinc-700 bg-zinc-800 text-zinc-400"
                          }`}
                        >
                          <span
                            className={`size-1.5 rounded-full ${
                              category.isActive
                                ? "bg-emerald-400"
                                : "bg-zinc-500"
                            }`}
                          />
                          {category.isActive ? "Active" : "Inactive"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <UpdateCategFromPage category={category} />
                        <DeleteCategFromPage category={category} />
                      </div>
                    </div>

                    <p className="line-clamp-3 text-sm leading-6 text-zinc-500">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-zinc-800 bg-zinc-950/30 px-5 py-4">
                    <span className="font-mono text-sm text-zinc-500">
                      {category.slug}
                    </span>

                    <span className="inline-flex items-center justify-center gap-5 rounded-md border border-zinc-700 bg-zinc-800 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-200">
                      Products{""} - {""}
                      {category.products.length}
                    </span>
                  </div>
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AdminCategoriesPage;
