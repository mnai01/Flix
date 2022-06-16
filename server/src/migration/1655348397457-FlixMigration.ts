import {MigrationInterface, QueryRunner} from "typeorm";

export class FlixMigration1655348397457 implements MigrationInterface {
    name = 'FlixMigration1655348397457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "firstName" text NOT NULL DEFAULT 'NA'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" text NOT NULL DEFAULT 'NA'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstName"`);
    }

}
