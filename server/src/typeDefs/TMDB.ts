/* eslint-disable no-unused-vars */
import { ArgsType, Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class VidsrcMovies {
    @Field(() => [VidsrcMovieResult], { nullable: true })
    result?: VidsrcMovieResult[] | null;
    @Field(() => Int)
    pages: number;
}
@ObjectType()
export class VidsrcMovieResult {
    @Field()
    imdb_id: string;
    @Field()
    title: string;
    @Field()
    quality: string;
    @Field()
    embed_url: string;
}
@ArgsType()
export class VidsrcLastesVideosParams {
    @Field(() => Int, { nullable: true })
    page: number = 1;
}

@ObjectType()
export class VidsrcTV {
    @Field(() => [VidsrcTVResult], { nullable: true })
    result?: VidsrcTVResult[] | null;
    @Field(() => Int)
    pages: number;
}
@ObjectType()
export class VidsrcTVResult {
    @Field()
    show_imdb_id: string;
    @Field()
    show_title: string;
    @Field()
    season: string;
    @Field()
    episode: string;
    @Field()
    embed_url: string;
}
