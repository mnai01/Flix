/* eslint-disable no-unused-vars */
import { ArgsType, Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { Country } from './Countries';
import { MovieListResultObject } from './Reusable/MovieListResultObject';

export enum DiscoverMovieSortBy {
    popularityAsc = 'popularity.asc',
    popularityDesc = 'popularity.desc',
    release_dateAsc = 'release_date.asc',
    release_dateDesc = 'release_date.desc',
    revenueAsc = 'revenue.asc',
    revenueSesc = 'revenue.desc',
    primary_release_dateAsc = 'primary_release_date.asc',
    primary_release_dateDesc = 'primary_release_date.desc',
    original_titleAsc = 'original_title.asc',
    original_titleDesc = 'original_title.desc',
    vote_averageAsc = 'vote_average.asc',
    vote_averageDesc = 'vote_average.desc',
    vote_countAsc = 'vote_count.asc',
    vote_countDesc = 'vote_count.desc',
}

registerEnumType(DiscoverMovieSortBy, {
    name: 'DiscoverMovieSortBy', // this one is mandatory
    description: 'Sort by', // this one is optional
});

@ArgsType()
export class DiscoverMovieParams {
    @Field(() => Country, { nullable: true })
    'region': Country = Country['UnitedStates'];
    @Field(() => DiscoverMovieSortBy, { nullable: true })
    'sort_by': DiscoverMovieSortBy;
    @Field(() => Country, { nullable: true })
    'certification_country': Country;
    @Field({ nullable: true })
    'certification': string;
    @Field({ nullable: true })
    'certificationLte': string;
    @Field({ nullable: true })
    'certificationGte': string;
    @Field({ nullable: true })
    'include_adult': boolean;
    @Field({ nullable: true })
    'include_video': boolean;
    @Field(() => Int, { nullable: true })
    'page': number;
    @Field(() => Int, { nullable: true })
    'primary_release_year': number;
    @Field(() => Int, { nullable: true })
    'primary_release_dateGte': string;
    @Field(() => Int, { nullable: true })
    'primary_release_dateLte': string;
    @Field(() => Int, { nullable: true })
    'year': string;
    @Field({ nullable: true })
    'with_genres': string;
    @Field(() => [Int], { nullable: true })
    // 'Premiere';
    // 'Theatrical'(limited);
    // 'Theatrical';
    // 'Digital';
    // 'Physical';
    // 'TV';
    'with_release_type': number[] = [4, 5, 6];
    @Field(() => [String], { nullable: true })
    'with_original_language': string = 'en';
    @Field(() => Int, { nullable: true })
    'vote_countGte': number;
    @Field(() => Int, { nullable: true })
    'vote_averageGte': number;
}

@ObjectType()
export class DiscoverMovie {
    // it can infer string but not number so we need to specify
    @Field(() => Int)
    page: number;
    @Field(() => [MovieListResultObject])
    results: MovieListResultObject[];
    @Field(() => Int)
    total_results: number;
    @Field(() => Int)
    total_pages: number;
}
