/*
  Warnings:

  - Added the required column `expiresAt` to the `VerificationToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VerificationToken" ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
