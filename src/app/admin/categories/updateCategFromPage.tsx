"use client";

import { updateCategory } from "@/src/actions/categories-actions";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { CategoryType } from "@/src/types";
import { LoaderCircle, Pencil, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type UpdateCategFromPageProps = {
  category: CategoryType;
};

export const UpdateCategFromPage = ({ category }: UpdateCategFromPageProps) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoryInputs, setCategoryInputs] = useState({
    categoryName: category.name,
    description: category.description ?? "",
    isActive: category.isActive,
  });

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (nextOpen) {
      setCategoryInputs({
        categoryName: category.name,
        description: category.description ?? "",
        isActive: category.isActive,
      });
    }
  };

  const handleSubmit = async () => {
    const categoryName = categoryInputs.categoryName.trim();

    if (categoryName === "") {
      return;
    }

    try {
      setLoading(true);

      await updateCategory(category.id, {
        name: categoryName,
        slug: categoryName.toLowerCase().replace(/\s+/g, "-"),
        description: categoryInputs.description.trim(),
        isActive: categoryInputs.isActive,
      });

      setOpen(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100">
          <Pencil className="size-4" />
          <span className="sr-only">Edit {category.name}</span>
        </button>
      </DialogTrigger>

      <DialogContent className="gap-0 overflow-hidden border border-zinc-800 bg-[#18181B] p-0 text-zinc-100 shadow-2xl shadow-black/40 sm:max-w-130">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="p-5 sm:p-6">
            <DialogTitle className="text-xl font-semibold tracking-tight text-zinc-50">
              Edit category
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm leading-6 text-zinc-500">
              Update how this category appears in the product catalog.
            </DialogDescription>

            <div className="mt-6 grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-300">
                  Category name
                </span>
                <input
                  name="categoryName"
                  value={categoryInputs.categoryName}
                  onChange={(e) =>
                    setCategoryInputs((prev) => ({
                      ...prev,
                      categoryName: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Category name"
                  className="h-12 rounded-xl border border-zinc-700/80 bg-[#131315] px-4 text-base text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30 sm:h-11 sm:text-sm"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-300">
                  Description
                </span>
                <textarea
                  name="description"
                  value={categoryInputs.description}
                  onChange={(e) =>
                    setCategoryInputs((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Short catalog description"
                  rows={4}
                  className="min-h-28 resize-none rounded-xl border border-zinc-700/80 bg-[#131315] px-4 py-3 text-base leading-6 text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30 sm:text-sm"
                />
              </label>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
                <div>
                  <p className="text-sm font-medium text-zinc-200">Active</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Show this category in the store.
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={categoryInputs.isActive}
                  onClick={() =>
                    setCategoryInputs((prev) => ({
                      ...prev,
                      isActive: !prev.isActive,
                    }))
                  }
                  className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-colors ${
                    categoryInputs.isActive
                      ? "bg-emerald-500"
                      : "bg-zinc-800"
                  }`}
                >
                  <span
                    className={`size-6 rounded-full bg-white shadow-sm transition-transform ${
                      categoryInputs.isActive
                        ? "translate-x-6"
                        : "translate-x-0"
                    }`}
                  />
                  <span className="sr-only">
                    {categoryInputs.isActive
                      ? "Deactivate category"
                      : "Activate category"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <DialogFooter className="mx-0 mb-0 border-zinc-800 bg-zinc-950/40 p-4 sm:px-6">
            <DialogClose asChild>
              <button
                type="button"
                disabled={loading}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-700 px-4 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800 disabled:pointer-events-none disabled:opacity-50"
              >
                Cancel
              </button>
            </DialogClose>
            <button
              type="submit"
              disabled={loading || categoryInputs.categoryName.trim() === ""}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 disabled:pointer-events-none disabled:opacity-60"
            >
              {loading ? (
                <LoaderCircle className="size-4 animate-spin" />
              ) : (
                <Save className="size-4" />
              )}
              Save
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
