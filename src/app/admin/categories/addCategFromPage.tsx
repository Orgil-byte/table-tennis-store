"use client";

import { addCategory } from "@/src/actions/categories-actions";
import { LoaderCircle, Plus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const AddCategFromPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [categoryInputs, setCategoryInputs] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (categoryInputs.name === "") {
      return;
    }

    try {
      setLoading(true);

      await addCategory({
        name: categoryInputs.name,
        slug: categoryInputs.name.toLowerCase().replace(/\s+/g, "-"),
        description: categoryInputs?.description,
      });

      setCategoryInputs({
        name: "",
        description: "",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);

      router.refresh();
    }
  };

  return (
    <div className="flex flex-col gap-5 lg:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
          Categories
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Manage and organize your product catalog structure.
        </p>
      </div>

      <div className="grid w-full gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:w-auto sm:min-w-136 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:p-2">
        <input
          name="name"
          value={categoryInputs.name}
          onChange={handleChange}
          type="text"
          placeholder="Category Name"
          aria-label="Category name"
          className="h-12 min-w-0 rounded-xl border border-zinc-700/80 bg-[#131315] px-4 text-base text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30 sm:h-11 sm:text-sm"
        />
        <input
          name="description"
          value={categoryInputs.description}
          onChange={handleChange}
          type="text"
          placeholder="Description (optional)"
          aria-label="Category description"
          className="h-12 min-w-0 rounded-xl border border-zinc-700/80 bg-[#131315] px-4 text-base text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30 sm:h-11 sm:text-sm"
        />
        <button
          onClick={handleSubmit}
          className="cursor-pointer active:scale-105 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-base font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 sm:h-11 sm:w-auto sm:text-sm"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <div className="inline-flex items-center justify-center gap-2">
              <Plus className="size-4" />
              Create
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
