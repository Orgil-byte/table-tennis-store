"use server";

import prisma from "../lib/prisma";

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

export const addCategory = async (data: {
  name: string;
  slug: string;
  description?: string;
}) => {
  const category = await prisma.category.create({
    data,
  });

  return category;
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
    data,
  });

  return category;
};
