import type {
  Category,
  Order,
  OrderItem,
  Prisma,
  Product,
  ProductImage,
  ProductVariant,
  User,
} from "@/generated/prisma/client";

export type {
  OrderStatus,
  ProductStatus,
  UserRole,
} from "@/generated/prisma/client";

export type UserType = User;
export type CategoryType = Category;
export type ProductType = Product;
export type ProductImageType = ProductImage;
export type ProductVariantType = ProductVariant;
export type OrderType = Order;
export type OrderItemType = OrderItem;

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
  include: { products: true };
}>;

export type ProductWithCategory = Prisma.ProductGetPayload<{
  include: { category: true };
}>;

export type ProductWithImages = Prisma.ProductGetPayload<{
  include: { images: true };
}>;

export type ProductFullType = Prisma.ProductGetPayload<{
  include: {
    category: true;
    images: true;
  };
}>;

export type OrderWithUser = Prisma.OrderGetPayload<{
  include: { user: true };
}>;

export type OrderWithItems = Prisma.OrderGetPayload<{
  include: { items: true };
}>;

export type OrderItemWithVariant = Prisma.OrderItemGetPayload<{
  include: { variant: true };
}>;

export type OrderItemWithProduct = OrderItemWithVariant;

export type OrderFullType = Prisma.OrderGetPayload<{
  include: {
    user: true;
    items: {
      include: { variant: true };
    };
  };
}>;
