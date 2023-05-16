/*
  Warnings:

  - The `amount` column on the `Transaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `balance` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "amount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL DEFAULT 0.00;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "balance",
ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.00;
