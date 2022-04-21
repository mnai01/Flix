import { User } from '../entity/User';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class seeding1650508115797 implements MigrationInterface {
    name?: string | undefined;
    down(queryRunner: QueryRunner): Promise<any> {
        throw new Error('Method not implemented.');
    }
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(User, {
            id: 1,
            email: '',
            password: '',
            plainText: false,
            role: '',
        });
    }
}
