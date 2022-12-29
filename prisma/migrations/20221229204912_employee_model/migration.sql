/*
  Warnings:

  - You are about to drop the column `birtday` on the `settings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "settings" DROP COLUMN "birtday";

-- AlterTable
ALTER TABLE "workplaces" ADD COLUMN     "employee_id" UUID;

-- CreateTable
CREATE TABLE "availabilities" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "answer" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT DEFAULT '',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "employeeId" UUID,

    CONSTRAINT "availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relocations" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "answer" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT DEFAULT '',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "employee_id" UUID,

    CONSTRAINT "relocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "pesel_number" TEXT DEFAULT '',
    "birtday" TEXT DEFAULT '',
    "email" TEXT DEFAULT '',
    "name" TEXT DEFAULT '',
    "postcode" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "phone" TEXT DEFAULT '',
    "location" TEXT DEFAULT '',
    "title" TEXT DEFAULT '',
    "about" TEXT DEFAULT '',
    "city" TEXT DEFAULT '',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "workplaces" ADD CONSTRAINT "workplaces_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availabilities" ADD CONSTRAINT "availabilities_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relocations" ADD CONSTRAINT "relocations_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;
