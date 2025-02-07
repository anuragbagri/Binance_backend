-- AlterTable
ALTER TABLE "binanceUser" ADD COLUMN     "direction" TEXT,
ADD COLUMN     "from" TEXT,
ADD COLUMN     "to" TEXT,
ADD COLUMN     "transactionHash" TEXT,
ADD COLUMN     "value" INTEGER;
