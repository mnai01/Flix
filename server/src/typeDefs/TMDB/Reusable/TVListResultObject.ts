import { Float, Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class TVListResultObject {
    @Field(() => String, { nullable: true })
    poster_path: string;
    @Field(() => Float)
    popularity: number;
    @Field(() => Int)
    id: number;
    @Field(() => String, { nullable: true })
    backdrop_path?: string;
    @Field(() => Float)
    vote_average: number;
    @Field()
    overview: string;
    @Field(() => String, { nullable: true })
    first_air_date: string;
    @Field(() => String, { nullable: true })
    origin_country?: string[] | null;
    @Field(() => Int)
    genre_ids?: number[] | null;
    @Field()
    original_language: string;
    @Field(() => Int)
    vote_count: number;
    @Field()
    name: string;
    @Field()
    original_name: string;
}
