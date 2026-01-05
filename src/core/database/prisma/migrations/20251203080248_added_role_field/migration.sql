-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('ADMIN', 'PG_OWNER', 'MANAGER', 'TENANT');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "UserRoles" NOT NULL DEFAULT 'TENANT';
