-- CreateTable
CREATE TABLE "metas" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "content" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "meta_pkey" PRIMARY KEY ("id")
);
