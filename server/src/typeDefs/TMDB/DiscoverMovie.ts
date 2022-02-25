/* eslint-disable no-unused-vars */
import { ArgsType, Field, Float, Int, ObjectType, registerEnumType } from 'type-graphql';
import { Country } from './Countries';

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
}
@ObjectType()
export class DiscoverMovieResults {
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
@ObjectType()
export class DiscoverMovie {
    // it can infer string but not number so we need to specify
    @Field(() => Int)
    page: number;
    @Field(() => [DiscoverMovieResults])
    results: DiscoverMovieResults[];
    @Field(() => Int)
    total_results: number;
    @Field(() => Int)
    total_pages: number;
}
