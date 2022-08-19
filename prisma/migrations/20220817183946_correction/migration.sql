-- Active: 1660710742682@@localhost@5430@postgres
/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MovieRent" DROP CONSTRAINT "MovieRent_userId_fkey";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "users_client" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
   
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_client_email_key" ON "users_client"("email");

-- AddForeignKey
ALTER TABLE "MovieRent" ADD CONSTRAINT "MovieRent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
