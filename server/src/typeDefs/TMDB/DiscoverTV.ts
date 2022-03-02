/* eslint-disable no-unused-vars */
import { ArgsType, Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { TVListResultObject } from './Reusable/TVListResultObject';

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
    @Field(() => [String], { nullable: true })
    'with_original_language': string = 'en';
}
@ObjectType()
export class DiscoverTV {
    @Field(() => Int)
    page: number;
    @Field(() => [TVListResultObject])
    results?: TVListResultObject[];
    @Field(() => Int)
    total_results: number;
    @Field(() => Int)
    total_pages: number;
}
