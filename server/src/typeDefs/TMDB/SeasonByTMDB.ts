import { ArgsType, Field, ObjectType, Int, Float } from 'type-graphql';

@ArgsType()
export class SeasonByTMDBParams {
    @Field()
    tv_show_id: string;
    @Field(() => Int)
    season_number: number;
}

@ObjectType()
export class SeasonByTMDB {
    @Field()
    _id: string;
    @Field(() => String, { nullable: true })
    air_date: string;
    @Field(() => [EpisodesBySeason], { nullable: true })
    episodes?: EpisodesBySeason[] | null;
    @Field()
    name: string;
    @Field()
    overview: string;
    @Field(() => Int)
    id: number;
    @Field()
    poster_path: string;
    @Field(() => Int)
    season_number: number;
}
@ObjectType()
export class EpisodesBySeason {
    @Field(() => String, { nullable: true })
    air_date: string;
    @Field(() => Int)
    episode_number: number;
    @Field(() => [CrewByEpisode], { nullable: true })
    crew?: CrewByEpisode[] | null;
    @Field(() => [GuestStarsByEpisode], { nullable: true })
    guest_stars?: GuestStarsByEpisode[] | null;
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
    @Field(() => String, { nullable: true })
    still_path: string;
    @Field(() => Float)
    vote_average: number;
    @Field(() => Int)
    vote_count: number;
}
@ObjectType()
export class CrewByEpisode {
    @Field()
    job: string;
    @Field()
    department: string;
    @Field()
    credit_id: string;
    @Field(() => Boolean)
    adult: boolean;
    @Field(() => Int)
    gender: number;
    @Field(() => Int)
    id: number;
    @Field()
    known_for_department: string;
    @Field()
    name: string;
    @Field()
    original_name: string;
    @Field(() => Float)
    popularity: number;
    @Field(() => String, { nullable: true })
    profile_path?: string | null;
}
@ObjectType()
export class GuestStarsByEpisode {
    @Field()
    character: string;
    @Field()
    credit_id: string;
    @Field(() => Int)
    order: number;
    @Field(() => Boolean)
    adult: boolean;
    @Field(() => Int)
    gender: number;
    @Field(() => Int)
    id: number;
    @Field()
    known_for_department: string;
    @Field()
    name: string;
    @Field()
    original_name: string;
    @Field(() => Float)
    popularity: number;
    @Field(() => String, { nullable: true })
    profile_path?: string | null;
}
