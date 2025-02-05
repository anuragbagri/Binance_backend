-- CreateTable
CREATE TABLE "block" (
    "id" SERIAL NOT NULL,
    "usename" TEXT NOT NULL,
    "public_key" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "block_pkey" PRIMARY KEY ("id")
);
