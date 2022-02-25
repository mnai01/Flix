/* eslint-disable no-unused-vars */
import { ArgsType, Field, Float, Int, ObjectType, registerEnumType } from 'type-graphql';

export enum DiscoverTVSortBy {
    popularityAsc = 'popularity.asc',
    popularityDesc = 'popularity.desc',
    vote_averageAsc = 'vote_average.asc',
    vote_averageDesc = 'vote_average.desc',
}
registerEnumType(DiscoverTVSortBy, {
    name: 'DiscoverTVSortBy', // this one is mandatory
    description: 'Sort by', // this one is optional
});
@ArgsType()
export class DiscoverTVParams {
    @Field(() => DiscoverTVSortBy, { nullable: true })
    'sort_by': DiscoverTVSortBy;
    @Field(() => Int, { nullable: true })
    'page': number;
    @Field({ nullable: true })
    'with_genres': string;
    @Field(() => String, { nullable: true })
    'watch_region': string = 'USA';
    @Field(() => [String], { nullable: true })
    'with_status': string[] = ['2', '5'];
}
@ObjectType()
export class DiscoverTV {
    @Field(() => Int)
    page: number;
    @Field(() => [DiscoverTVResults])
    results?: DiscoverTVResults[];
    @Field(() => Int)
    total_results: number;
    @Field(() => Int)
    total_pages: number;
}
@ObjectType()
export class DiscoverTVResults {
    @Field(() => String, { nullable: true })
    poster_path: string;
    @Field(() => Float)
    popularity: number;
    @Field(() => Int)
    id: number;
    @Field(() => String, { nullable: true })
    backdrop_path?: string;
    @Field(() => Int)
    vote_average: number;
    @Field()
    overview: string;
    @Field()
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
