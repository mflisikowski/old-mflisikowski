-- CreateTable
CREATE TABLE "settings" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "description" TEXT DEFAULT '',
    "image" TEXT DEFAULT '',
    "title" TEXT DEFAULT '',
    "phone" TEXT DEFAULT '',
    "email" TEXT DEFAULT '',
    "postcode" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "city" TEXT DEFAULT '',
    "country" TEXT DEFAULT '',
    "birtday" TEXT DEFAULT '',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "setting_pkey" PRIMARY KEY ("id")
);
