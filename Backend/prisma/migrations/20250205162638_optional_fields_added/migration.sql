-- AlterTable
ALTER TABLE "binanceUser" ADD COLUMN     "publickey" TEXT,
ALTER COLUMN "depositAddress" DROP NOT NULL,
ALTER COLUMN "privateKey" DROP NOT NULL,
ALTER COLUMN "balance" DROP NOT NULL,
ALTER COLUMN "balance" SET DATA TYPE DOUBLE PRECISION;
