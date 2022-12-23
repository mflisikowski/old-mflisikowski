/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categories_key_key" ON "categories"("key");
