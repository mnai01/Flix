import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

// BaseEntity gives us more functionality like User.save
@ObjectType()
@Entity('users')
export class User extends BaseEntity {
    // it can infer string but not number so we need to specify
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column('text')
    email: string;

    @Column('text')
    password: string;

    @Column('int', { default: 0 })
    tokenVersion: number;
}
