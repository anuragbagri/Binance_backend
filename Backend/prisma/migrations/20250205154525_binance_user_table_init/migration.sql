/*
  Warnings:

  - You are about to drop the `block` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "block";

-- CreateTable
CREATE TABLE "binanceUser" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "depositAddress" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "binanceUser_pkey" PRIMARY KEY ("username")
);
