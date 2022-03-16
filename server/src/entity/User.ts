import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

    @Field()
    @Column('int', { default: 1 })
    tokenVersion: number;

    @Field(() => [WatchedMovies], { nullable: true })
    @OneToMany(() => WatchedMovies, (movie) => movie.user, { cascade: true })
    watchedMovies: WatchedMovies[];
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
    @Column('text')
    @Field()
    tmdb: string;

    @Field()
    @Column('text')
    type: string;

    @CreateDateColumn()
    created_at: Date;
}
