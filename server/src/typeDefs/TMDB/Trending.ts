import { ArgsType, Field, ObjectType, Int, Float, registerEnumType } from 'type-graphql';
import { Country } from './Countries';

enum MediaType {
    all = 'movie|tv',
    movie = 'movie',
    tv = 'tv',
}

enum TimeType {
    day = 'day',
    week = 'week',
}

registerEnumType(MediaType, {
    name: 'MediaType', // this one is mandatory
    description: 'Media Type', // this one is optional
});

registerEnumType(TimeType, {
    name: 'Time', // this one is mandatory
    description: 'Time window', // this one is optional
});

@ArgsType()
export class TrendingParams {
    @Field(() => Boolean, { nullable: true })
    'include_adult': boolean = false;
    @Field(() => Country, { nullable: true })
    'region': Country = Country['UnitedStates'];
    @Field(() => MediaType, { nullable: true })
    'media_type': MediaType = MediaType['all'];
    @Field(() => TimeType, { nullable: true })
    'time': TimeType = TimeType['week'];
    @Field(() => Int, { nullable: true })
    'page': number;
}

@ObjectType()
export class TrendingResults {
    @Field(() => String, { nullable: true })
    poster_path: string;
    @Field(() => Int, { nullable: false })
    id: number;
    @Field(() => String, { nullable: false })
    media_type: string;
    @Field(() => Float, { nullable: true })
    vote_average: number;
    @Field(() => Float, { nullable: true })
    popularity: number;
    @Field(() => Int, { nullable: true })
    vote_count: number;
    @Field(() => String, { nullable: true })
    title: string | null;
    @Field(() => String, { nullable: true })
    name: string | null;
    @Field(() => [Int], { nullable: true })
    genre_ids: number[];
    @Field(() => String, { nullable: true })
    release_date: string;
    @Field(() => String, { nullable: true })
    first_air_date: string;
}

@ObjectType()
export class Trending {
    // it can infer string but not number so we need to specify
    @Field(() => Int)
    page: number;
    @Field(() => [TrendingResults])
    results: TrendingResults[];
    @Field(() => Int)
    total_results: number;
    @Field(() => Int)
    total_pages: number;
}
