/*
  Warnings:

  - You are about to alter the column `name` on the `Tag` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Tag` MODIFY `name` ENUM('NIKE', 'ADIDAS', 'PUMA', 'LINING', 'ANTA') NOT NULL DEFAULT 'NIKE';
