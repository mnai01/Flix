import { ArgsType, Field, Float, Int, ObjectType } from 'type-graphql';
import { MovieListResultObject } from './Reusable/MovieListResultObject';

@ArgsType()
export class FindMediaByIMDBParams {
    @Field()
    imdb_id: string;
}

@ObjectType()
export class FindMediaByIMDB {
    @Field(() => [MovieListResultObject], { nullable: true })
    movie_results?: MovieListResultObject[] | null;
    @Field(() => [FindByIMDBTVResults], { nullable: true })
    tv_results?: FindByIMDBTVResults[] | null;
    // Dont need type since I am not returning them
    tv_episode_results?: null[] | null;
    tv_season_results?: null[] | null;
    person_results?: null[] | null;
}

@ObjectType()
export class FindByIMDBTVResults {
    @Field()
    original_language: string;
    @Field(() => String, { nullable: true })
    first_air_date: string;
    @Field(() => String, { nullable: true })
    poster_path: string | null;
    @Field(() => Float)
    vote_average: number;
    @Field()
    overview: string;
    @Field(() => Int)
    vote_count: number;
    @Field()
    name: string;
    @Field()
    original_name: string;
    @Field(() => String, { nullable: true })
    backdrop_path: string;
    @Field(() => [String], { nullable: true })
    origin_country?: string[] | null;
    @Field(() => [Int], { nullable: true })
    genre_ids?: number[] | null;
    @Field(() => Int)
    id: number;
    @Field(() => Float)
    popularity: number;
}
