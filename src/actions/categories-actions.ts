"use server";

import prisma from "../lib/prisma";

type AddCategoryInput = {
  name: string;
  slug: string;
  description?: string;
};

// =====================================================================

export const getCategories = async () => {
  const categories = await prisma.category.findMany({
    include: { products: true },
  });

  return categories;
};

// =====================================================================

export const getCategoryBySlug = async (slug: string) => {
  const category = await prisma.category.findUnique({
    where: { slug },

    include: { products: true },
  });

  return category;
};

// =====================================================================

export const addCategory = async (data: AddCategoryInput) => {
  try {
    await prisma.category.create({
      data: {
        name: data.name.trim(),
        slug: data.slug.trim(),
        description: data.description?.trim() || null,
      },
    });

    return {
      success: true,
      message: "Category created successfully.",
    };
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return {
        success: false,
        message: `"${data.name}" already exists in category. Create another name.`,
      };
    }

    return {
      success: false,
      message: "Failed to create category. Please try again.",
    };
  }
};

// =====================================================================

export const deleteCategory = async (id: number) => {
  const category = await prisma.category.delete({
    where: { id },
  });

  return category;
};

// =====================================================================

export const updateCategory = async (
  id: number,
  data: {
    name: string;
    slug: string;
    description: string;
    isActive: boolean;
  },
) => {
  const category = await prisma.category.update({
    where: { id },
    data: {
      name: data.name.trim(),
      slug: data.slug.trim(),
      description: data.description.trim() || null,
      isActive: data.isActive,
    },
  });

  return category;
};
