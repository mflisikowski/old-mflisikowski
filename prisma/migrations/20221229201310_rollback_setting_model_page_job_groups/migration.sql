/*
  Warnings:

  - You are about to drop the column `job_title` on the `settings` table. All the data in the column will be lost.
  - You are about to drop the column `page_description` on the `settings` table. All the data in the column will be lost.
  - You are about to drop the column `page_image` on the `settings` table. All the data in the column will be lost.
  - You are about to drop the column `page_title` on the `settings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "settings" DROP COLUMN "job_title",
DROP COLUMN "page_description",
DROP COLUMN "page_image",
DROP COLUMN "page_title";
