/*
  Warnings:

  - You are about to drop the column `name` on the `TaskGroup` table. All the data in the column will be lost.
  - Added the required column `title` to the `TaskGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TaskGroup" DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "title" TEXT NOT NULL;
