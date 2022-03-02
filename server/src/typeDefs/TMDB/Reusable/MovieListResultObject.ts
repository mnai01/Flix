import { Field, Float, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class MovieListResultObject {
    @Field(() => String, { nullable: true })
    poster_path: string | null;
    @Field({ nullable: true })
    adult: boolean;
    @Field({ nullable: true })
    overview: string;
    @Field({ nullable: true })
    release_date: string;
    @Field(() => [Int], { nullable: true })
    genre_ids: number[];
    @Field(() => Int, { nullable: false })
    id: number;
    @Field({ nullable: true })
    original_title: string;
    @Field({ nullable: true })
    original_language: string;
    @Field({ nullable: true })
    title: string;
    @Field(() => String, { nullable: true })
    backdrop_path: string;
    @Field(() => Float, { nullable: true })
    popularity: number;
    @Field(() => Int, { nullable: true })
    vote_count: number;
    @Field({ nullable: true })
    video: boolean;
    @Field({ nullable: true })
    vote_average: string;
}
