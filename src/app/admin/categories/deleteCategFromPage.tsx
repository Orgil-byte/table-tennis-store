"use client";

import { deleteCategory } from "@/src/actions/categories-actions";
import { CategoryType } from "@/src/types";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type DeleteCategFromPageProps = {
  category: CategoryType;
};

export const DeleteCategFromPage = ({ category }: DeleteCategFromPageProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleDeleteCategory = async () => {
    const confirmed = window.confirm(
      `Do you want to delete "${category.name}" ?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoading(true);

      await deleteCategory(category.id);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);

      router.refresh();
    }
  };

  return (
    <button
      onClick={handleDeleteCategory}
      className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-red-950/30 hover:text-red-300"
    >
      {loading ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <Trash2 className="size-4" />
      )}
      <span className="sr-only">Delete {category.name}</span>
    </button>
  );
};
