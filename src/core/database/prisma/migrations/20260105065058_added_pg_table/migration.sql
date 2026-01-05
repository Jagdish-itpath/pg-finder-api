-- CreateTable
CREATE TABLE "pg" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "rent" DOUBLE PRECISION NOT NULL,
    "gender" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "pg_pkey" PRIMARY KEY ("id")
);
