import {MigrationInterface, QueryRunner} from "typeorm";

export class FlixMigration1650518463214 implements MigrationInterface {
    name = 'FlixMigration1650518463214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'free', 'premium')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "tokenVersion" integer NOT NULL DEFAULT '1', "role" "public"."users_role_enum" NOT NULL DEFAULT 'free', "plainText" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "watchedMedia" ("id" SERIAL NOT NULL, "tmdb" text NOT NULL, "type" text NOT NULL, "poster_path" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT NOW(), "userId" integer NOT NULL, CONSTRAINT "PK_f8c1947ebcff99945c5ecc2003f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "watchedMedia" ADD CONSTRAINT "FK_1ce3bb8e8e0352662e17d366983" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "watchedMedia" DROP CONSTRAINT "FK_1ce3bb8e8e0352662e17d366983"`);
        await queryRunner.query(`DROP TABLE "watchedMedia"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }

}
