import { ArgsType, Field, Float, Int, ObjectType } from 'type-graphql';
import { MovieListResultObject } from './Reusable/MovieListResultObject';

@ArgsType()
export class FindMovieByTMDBParams {
    @Field()
    movie_id: string;
}

@ObjectType()
export class GenresEntity {
    @Field(() => Int)
    id: number;
    @Field()
    name: string;
}
@ObjectType()
export class MovieProductionCompany {
    @Field(() => Int)
    id: number;
    @Field(() => String, { nullable: true })
    logo_path?: string | null;
    @Field()
    name: string;
    @Field()
    origin_country: string;
}
@ObjectType()
export class MovieProductionCountry {
    @Field()
    iso_3166_1: string;
    @Field()
    name: string;
}
@ObjectType()
export class SpokenLanguage {
    @Field()
    english_name: string;
    @Field()
    iso_639_1: string;
    @Field()
    name: string;
}

@ObjectType()
export class MovieVideosByTMDB {
    @Field(() => [MovieVideosResults], { nullable: true })
    results?: MovieVideosResults[] | null;
}

@ObjectType()
export class MovieExternalIds {
    @Field()
    imdb_id: string;
    @Field()
    facebook_id: string;
    @Field()
    instagram_id: string;
    @Field()
    twitter_id: string;
}

@ObjectType()
export class SimilarMovie {
    @Field(() => Int)
    page: number;
    @Field(() => [MovieListResultObject], { nullable: true })
    results?: MovieListResultObject[] | null;
    @Field(() => Int)
    total_pages: number;
    @Field(() => Int)
    total_results: number;
}

@ObjectType()
export class MovieVideosResults {
    @Field()
    iso_639_1: string;
    @Field()
    iso_3166_1: string;
    @Field()
    name: string;
    @Field()
    key: string;
    @Field()
    site: string;
    @Field(() => Int)
    size: number;
    @Field()
    type: string;
    @Field(() => Boolean)
    official: boolean;
    @Field()
    published_at: string;
    @Field()
    id: string;
}
@ObjectType()
export class FindMovieByTMDB {
    @Field(() => Boolean)
    adult: boolean;
    @Field(() => String, { nullable: true })
    backdrop_path: string | null;
    @Field(() => String, { nullable: true })
    belongs_to_collection?: null;
    @Field(() => Int)
    budget: number;
    @Field(() => [GenresEntity], { nullable: true })
    genres?: GenresEntity[] | null;
    @Field()
    homepage: string;
    @Field(() => Int)
    id: number;
    @Field()
    imdb_id: string;
    @Field()
    original_language: string;
    @Field()
    original_title: string;
    @Field()
    overview: string;
    @Field(() => Float)
    popularity: number;
    @Field(() => String, { nullable: true })
    poster_path?: string;
    @Field(() => [MovieProductionCompany], { nullable: true })
    production_companies?: MovieProductionCompany[] | null;
    @Field(() => [MovieProductionCountry], { nullable: true })
    production_countries?: MovieProductionCountry[] | null;
    @Field()
    release_date: string;
    @Field(() => Int)
    revenue: number;
    @Field(() => Int)
    runtime: number;
    spoken_languages?: SpokenLanguage[] | null;
    @Field()
    status: string;
    @Field()
    tagline: string;
    @Field()
    title: string;
    video: boolean;
    @Field(() => Float)
    vote_average: number;
    @Field(() => Int)
    vote_count: number;
    @Field(() => MovieVideosByTMDB)
    videos: MovieVideosByTMDB;
    @Field(() => MovieExternalIds)
    external_ids: MovieExternalIds;
    @Field(() => SimilarMovie)
    similar: SimilarMovie;
}
