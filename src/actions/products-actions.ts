"use server";

import prisma from "../lib/prisma";
import { ProductStatus as ProductStatusValue } from "@/generated/prisma/enums";
import type { ProductStatus } from "../types";

// ===============To Delete Products and ProductVariants===================================

export const hasProductBeenOrderedBefore = async (productId: number) => {
  const count = await prisma.orderItem.count({
    where: {
      variant: {
        productId,
      },
    },
  });

  return count > 0;
};

export const hasProductVariantBeenOrderedBefore = async (
  productVariantId: number,
) => {
  const count = await prisma.orderItem.count({
    where: {
      variantId: productVariantId,
    },
  });

  return count > 0;
};

// ==============Products==============================

export const getProducts = async () => {
  const products = await prisma.product.findMany({
    where: {
      status: ProductStatusValue.ACTIVE,
    },

    include: {
      category: true,
      images: true,
      variants: {
        where: { isActive: true },
        include: {
          orderItems: true,
        },
      },
    },
  });

  return products;
};

export const getAdminProducts = async () => {
  return await prisma.product.findMany({
    include: {
      category: true,
      images: true,
      variants: {
        include: {
          orderItems: true,
        },
      },
    },
  });
};

// =====================================================================

export const getProductBySlug = async (slug: string) => {
  const product = await prisma.product.findUnique({
    where: { slug },

    include: {
      category: true,
      images: true,
      variants: {
        where: { isActive: true },
        include: {
          orderItems: true,
        },
      },
    },
  });

  return product;
};

// =====================================================================

export const addProduct = async (data: {
  name: string;
  slug: string;
  description: string;
  categoryId: number;
  status: ProductStatus;
}) => {
  const product = await prisma.product.create({
    data,
  });

  return product;
};

// =====================================================================

export const updateProduct = async (
  data: {
    name: string;
    slug: string;
    description: string;
    categoryId: number;
    status: ProductStatus;
  },
  id: number,
) => {
  const product = await prisma.product.update({
    where: { id },
    data,
  });

  return product;
};

// =====================================================================

export const deleteProduct = async (id: number) => {
  const notValidDeleteItem = await hasProductBeenOrderedBefore(id);

  if (notValidDeleteItem) {
    const archivedProduct = await prisma.product.update({
      where: { id },
      data: { status: ProductStatusValue.ARCHIVED },
    });

    return archivedProduct;
  }

  const product = await prisma.product.delete({
    where: { id },
  });

  return product;
};

// ==============Product Variant==============================

export const addProductVariant = async (data: {
  productId: number;
  sku: string;
  price: string;
  stockQty: number;
  size?: string;
  color?: string;
}) => {
  const productVariant = await prisma.productVariant.create({
    data,
  });

  return productVariant;
};

// =====================================================================

export const updateProductVariant = async (
  id: number,
  data: {
    productId: number;
    sku: string;
    price: string;
    stockQty: number;
    size?: string;
    color?: string;
  },
) => {
  const productVariant = await prisma.productVariant.update({
    where: { id },
    data,
  });

  return productVariant;
};

// =====================================================================

export const deleteProductVariant = async (id: number) => {
  const notValidDeleteItem = await hasProductVariantBeenOrderedBefore(id);

  if (notValidDeleteItem) {
    const archivedProductVariant = await prisma.productVariant.update({
      where: { id },
      data: { isActive: false },
    });

    return archivedProductVariant;
  }

  const productVariant = await prisma.productVariant.delete({
    where: { id },
  });

  return productVariant;
};

// =================Product Image===============================================

export const addProductImage = async (data: {
  url: string;
  alt?: string;
  productId: number;
}) => {
  const productImage = await prisma.productImage.create({
    data,
  });

  return productImage;
};

// =====================================================================

export const updateProductImage = async (
  id: number,
  data: { url: string; alt: string; productId: number },
) => {
  const productImage = await prisma.productImage.update({
    where: { id },
    data,
  });

  return productImage;
};

// =====================================================================

export const deleteProductImage = async (id: number) => {
  const productImage = await prisma.productImage.delete({
    where: { id },
  });

  return productImage;
};
