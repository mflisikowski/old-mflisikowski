-- CreateTable
CREATE TABLE "Categories" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "key" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "uses_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL DEFAULT '',
    "repository_name" TEXT NOT NULL DEFAULT '',
    "repository_url" TEXT NOT NULL DEFAULT '',
    "development_url" TEXT NOT NULL DEFAULT '',
    "production_url" TEXT NOT NULL DEFAULT '',
    "category_name" TEXT NOT NULL DEFAULT '',
    "category_id" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Socials" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL DEFAULT '',
    "url" TEXT NOT NULL DEFAULT '',
    "mailto" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "socials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Uses" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "link" BOOLEAN NOT NULL,
    "link_label" TEXT NOT NULL DEFAULT '',
    "link_url" TEXT NOT NULL DEFAULT '',
    "category_id" UUID NOT NULL,

    CONSTRAINT "uses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workplaces" (
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "company_name" VARCHAR NOT NULL DEFAULT '',
    "company_logotype" VARCHAR NOT NULL DEFAULT '',
    "job_title" VARCHAR NOT NULL DEFAULT '',
    "job_start" DECIMAL NOT NULL,
    "job_end" DECIMAL NOT NULL,
    "job_present" BOOLEAN NOT NULL DEFAULT false,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),

    CONSTRAINT "workplaces_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Uses" ADD CONSTRAINT "Uses_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

