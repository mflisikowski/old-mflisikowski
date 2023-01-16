-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "repositories" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "url" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "repository_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "repository_id" UUID,
    "category_id" UUID,
    "name" TEXT NOT NULL,
    "development_url" TEXT,
    "production_url" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socials" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "mailto" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uses" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "category_id" UUID,
    "employee_id" UUID,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "link" BOOLEAN NOT NULL DEFAULT false,
    "link_label" TEXT,
    "link_url" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "use_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "name" TEXT NOT NULL,
    "logotype" TEXT,
    "address" TEXT,
    "phone" TEXT,
    "regon" TEXT,
    "nip" TEXT,
    "isContractor" BOOLEAN DEFAULT false,
    "isClient" BOOLEAN DEFAULT false,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workplaces" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "company_id" UUID,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "present" BOOLEAN NOT NULL DEFAULT false,
    "start" TEXT,
    "start_full" TEXT,
    "end" TEXT,
    "end_full" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workplace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pages" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "route_id" UUID,
    "title" TEXT NOT NULL,
    "subheading" JSONB,
    "heading" JSONB,
    "content" JSONB,
    "fullscreen" BOOLEAN DEFAULT false,
    "active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "label" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "navigation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "description" TEXT,
    "image" TEXT,
    "title" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "postcode" TEXT,
    "address" TEXT,
    "city" TEXT,
    "country" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metas" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "meta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "availabilities" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "description" TEXT,
    "label" TEXT,
    "active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relocations" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "description" TEXT,
    "label" TEXT,
    "active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "relocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statuses" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "description" TEXT,
    "label" TEXT,
    "active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "employee_id" UUID,
    "level" TEXT,
    "name" TEXT,
    "active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "pesel_number" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "name" TEXT,
    "title" TEXT,
    "avatar" TEXT,
    "portrait" TEXT,
    "city" TEXT,
    "address" TEXT,
    "postcode" TEXT,
    "location" TEXT,
    "birthday" TEXT,
    "about" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_key_key" ON "categories"("key");

-- CreateIndex
CREATE UNIQUE INDEX "repositories_name_key" ON "repositories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "projects_name_key" ON "projects"("name");

-- CreateIndex
CREATE UNIQUE INDEX "socials_name_key" ON "socials"("name");

-- CreateIndex
CREATE UNIQUE INDEX "uses_name_key" ON "uses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pages_route_id_key" ON "pages"("route_id");

-- CreateIndex
CREATE UNIQUE INDEX "pages_title_key" ON "pages"("title");

-- CreateIndex
CREATE UNIQUE INDEX "routes_label_key" ON "routes"("label");

-- CreateIndex
CREATE UNIQUE INDEX "settings_employee_id_key" ON "settings"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "metas_name_key" ON "metas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "availabilities_description_key" ON "availabilities"("description");

-- CreateIndex
CREATE UNIQUE INDEX "availabilities_label_key" ON "availabilities"("label");

-- CreateIndex
CREATE UNIQUE INDEX "relocations_description_key" ON "relocations"("description");

-- CreateIndex
CREATE UNIQUE INDEX "relocations_label_key" ON "relocations"("label");

-- CreateIndex
CREATE UNIQUE INDEX "statuses_description_key" ON "statuses"("description");

-- CreateIndex
CREATE UNIQUE INDEX "statuses_label_key" ON "statuses"("label");

-- CreateIndex
CREATE UNIQUE INDEX "skills_name_key" ON "skills"("name");

-- CreateIndex
CREATE UNIQUE INDEX "employees_pesel_number_key" ON "employees"("pesel_number");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employees_phone_key" ON "employees"("phone");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_repository_id_fkey" FOREIGN KEY ("repository_id") REFERENCES "repositories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "uses" ADD CONSTRAINT "uses_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "uses" ADD CONSTRAINT "uses_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "workplaces" ADD CONSTRAINT "workplaces_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "workplaces" ADD CONSTRAINT "workplaces_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "routes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "metas" ADD CONSTRAINT "metas_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "availabilities" ADD CONSTRAINT "availabilities_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "relocations" ADD CONSTRAINT "relocations_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "statuses" ADD CONSTRAINT "statuses_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
