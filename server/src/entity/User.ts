import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';

export enum UserRole {
    ADMIN = 'admin',
    FREE = 'free',
    PREMIUM = 'premium',
}

registerEnumType(UserRole, {
    name: 'UserRole',
    description: 'User Roles',
});

// BaseEntity gives us more functionality like User.save
@ObjectType()
@Entity('users')
export class User extends BaseEntity {
    // it can infer string but not number so we need to specify
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column('text', { default: 'NA' })
    firstName: string;

    @Field()
    @Column('text', { default: 'NA' })
    lastName: string;

    @Field()
    @Column('text')
    email: string;

    @Column('text')
    password: string;

    @Field()
    @Column('int', { default: 1 })
    tokenVersion: number;

    @Field(() => [WatchedMovies], { nullable: true })
    @OneToMany(() => WatchedMovies, (movie) => movie.user, { cascade: true })
    watchedMovies: WatchedMovies[];

    @Field(() => UserRole)
    @Column({ type: 'enum', enum: UserRole, default: UserRole.FREE })
    role: string;

    @Field()
    @Column('boolean', { default: false })
    plainText: boolean;
}

// BaseEntity gives us more functionality like User.save
@ObjectType()
@Entity('watchedMedia')
export class WatchedMovies extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.watchedMovies, { nullable: false })
    user: User;

    // it can infer string but not number so we need to specify
    @Field()
    @Column('text')
    tmdb: string;

    @Field()
    @Column('text')
    type: string;

    @Field()
    @Column('text')
    poster_path: string;

    @Field()
    @Column({
        default: () => 'NOW()',
    })
    created_at: Date;
}
