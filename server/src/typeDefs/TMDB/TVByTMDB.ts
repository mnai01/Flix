import { Field, Int, ObjectType, ArgsType, Float } from 'type-graphql';
import { Genre } from './Genres';

@ArgsType()
export class TVByTMDBParams {
    @Field()
    tv_show_id: string;
}

@ObjectType()
export class LastEpisodeToAir {
    @Field(() => String, { nullable: true })
    air_date: string;
    @Field(() => Int)
    episode_number: number;
    @Field(() => Int)
    id: number;
    @Field()
    name: string;
    @Field()
    overview: string;
    @Field()
    production_code: string;
    @Field(() => Int)
    season_number: number;
    @Field()
    still_path: string;
    @Field(() => Float)
    vote_average: number;
    @Field(() => Int)
    vote_count: number;
}

@ObjectType()
export class CreatedBy {
    @Field(() => Int)
    id: number;
    @Field()
    credit_id: string;
    @Field()
    name: string;
    @Field(() => Int)
    gender: number;
    @Field(() => String, { nullable: true })
    profile_path?: string;
}

@ObjectType()
export class Network {
    @Field()
    name: string;
    @Field(() => Int)
    id: number;
    @Field()
    logo_path: string;
    @Field()
    origin_country: string;
}
@ObjectType()
export class ProductionCompany {
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
export class ProductionCountry {
    @Field()
    iso_3166_1: string;
    @Field()
    name: string;
}
@ObjectType()
export class Season {
    @Field(() => String, { nullable: true })
    air_date: string;
    @Field(() => Int)
    episode_count: number;
    @Field(() => Int)
    id: number;
    @Field()
    name: string;
    @Field()
    overview: string;
    @Field(() => String, { nullable: true })
    poster_path: string;
    @Field(() => Int)
    season_number: number;
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
export class TVEpisodes {
    @Field(() => String, { nullable: true })
    air_date: string;
    @Field(() => [Crew])
    crew: Crew[];
    @Field(() => Int)
    episode_number: number;
    @Field(() => [GuestStar])
    guest_stars: GuestStar[];
    @Field()
    name: string;
    @Field()
    overview: string;
    @Field(() => Int)
    id: number;
    @Field()
    production_code: string;
    @Field(() => Int)
    season_number: number;
    @Field()
    still_path: string;
    @Field(() => Float)
    vote_average: number;
    @Field(() => Int)
    vote_count: number;
}
@ObjectType()
export class Crew {
    @Field(() => Int)
    id: number;
    @Field()
    credit_id: string;
    @Field()
    name: string;
    @Field()
    department: string;
    @Field()
    job: string;
    @Field(() => String, { nullable: true })
    profile_path?: string;
}
@ObjectType()
export class GuestStar {
    @Field(() => Int)
    id: number;
    @Field()
    name: string;
    @Field()
    credit_id: string;
    @Field()
    character: string;
    @Field(() => Int)
    order: number;
    @Field()
    profile_path: string;
}
@ObjectType()
export class Videos {
    @Field(() => [VideosResults], { nullable: true })
    results?: VideosResults[] | null;
}
@ObjectType()
export class VideosResults {
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
export class ExternalIds {
    @Field(() => String, { nullable: true })
    imdb_id: string;
    @Field(() => String, { nullable: true })
    freebase_mid: string;
    @Field(() => String, { nullable: true })
    freebase_id: string;
    @Field()
    tvdb_id: number;
    @Field(() => Int)
    tvrage_id: number;
    @Field(() => String, { nullable: true })
    facebook_id: string;
    @Field(() => String, { nullable: true })
    instagram_id: string;
    @Field(() => String, { nullable: true })
    twitter_id: string;
}
@ObjectType()
export class Similar {
    @Field(() => Int)
    page: number;
    @Field(() => [SimilarResults], { nullable: true })
    results?: SimilarResults[] | null;
    @Field(() => Int)
    total_pages: number;
    @Field(() => Int)
    total_results: number;
}
@ObjectType()
export class SimilarResults {
    @Field(() => Boolean)
    adult: boolean;
    @Field()
    backdrop_path: string;
    @Field(() => [Int], { nullable: true })
    genre_ids?: number[] | null;
    @Field(() => Int)
    id: number;
    @Field()
    name: string;
    @Field(() => [String], { nullable: true })
    origin_country?: string[] | null;
    @Field()
    original_language: string;
    @Field()
    original_name: string;
    @Field()
    overview: string;
    @Field(() => Float)
    popularity: number;
    @Field(() => String, { nullable: true })
    poster_path: string;
    @Field()
    first_air_date: string;
    @Field(() => Float)
    vote_average: number;
    @Field(() => Int)
    vote_count: number;
}
@ObjectType()
export class TVByTMDB {
    @Field(() => String, { nullable: true })
    backdrop_path: string | null;
    @Field(() => [CreatedBy], { nullable: true })
    created_by?: CreatedBy[] | null;
    @Field(() => [Int], { nullable: true })
    episode_run_time: number[] | null;
    @Field()
    first_air_date: string;
    @Field(() => [Genre], { nullable: true })
    genres: Genre[] | null;
    @Field()
    homepage: string;
    @Field(() => Int)
    id: number;
    @Field(() => Boolean)
    in_production: boolean;
    @Field(() => [String], { nullable: true })
    languages: string[] | null;
    @Field(() => String, { nullable: true })
    last_air_date: string | null;
    @Field(() => [LastEpisodeToAir])
    last_episode_to_air: LastEpisodeToAir;
    @Field()
    name: string;
    @Field(() => String, { nullable: true })
    next_episode_to_air: string | null;
    @Field(() => [Network], { nullable: true })
    networks: Network[] | null;
    @Field(() => Int)
    number_of_episodes: number;
    @Field(() => Int)
    number_of_seasons: number;
    @Field(() => [String], { nullable: true })
    origin_country: string[] | null;
    @Field()
    original_language: string;
    @Field()
    original_name: string;
    @Field()
    overview: string;
    @Field(() => Float)
    popularity: number;
    @Field(() => String, { nullable: true })
    poster_path: string;
    @Field(() => [ProductionCompany], { nullable: true })
    production_companies: ProductionCompany[] | null;
    @Field(() => [ProductionCountry], { nullable: true })
    production_countries: ProductionCountry[] | null;
    @Field(() => [Season], { nullable: true })
    seasons: Season[] | null;
    @Field(() => [SpokenLanguage], { nullable: true })
    spoken_languages: SpokenLanguage[] | null;
    @Field()
    status: string;
    @Field()
    tagline: string;
    @Field()
    type: string;
    @Field(() => Float)
    vote_average: number;
    @Field(() => Int)
    vote_count: number;
    @Field(() => Videos)
    videos: Videos;
    @Field(() => ExternalIds)
    external_ids: ExternalIds;
    @Field(() => Similar)
    similar: Similar;
}
