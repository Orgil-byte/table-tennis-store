/*
  Warnings:

  - You are about to drop the column `couponCode` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shippingCountry` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shippingZip` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "couponCode",
DROP COLUMN "shippingCountry",
DROP COLUMN "shippingZip";
