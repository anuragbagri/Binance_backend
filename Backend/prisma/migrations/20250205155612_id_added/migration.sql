/*
  Warnings:

  - The primary key for the `binanceUser` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "binanceUser" DROP CONSTRAINT "binanceUser_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "binanceUser_pkey" PRIMARY KEY ("id");
