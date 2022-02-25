import { ArgsType, Field, ObjectType, Int, Float } from 'type-graphql';
import { Country } from './Countries';

@ArgsType()
export class SearchParams {
    @Field({ nullable: false })
    'query': string;
    @Field(() => Boolean, { nullable: true })
    'include_adult': boolean = false;
    @Field(() => Country, { nullable: true })
    'region': Country = Country['UnitedStates'];
}
@ObjectType()
export class SearchResults {
    @Field(() => String, { nullable: true })
    poster_path: string;
    @Field(() => Int, { nullable: false })
    id: number;
    @Field({ nullable: false })
    media_type: string;
    @Field({ nullable: true })
    vote_average: string;
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
}
@ObjectType()
export class Search {
    // it can infer string but not number so we need to specify
    @Field(() => Int)
    page: number;
    @Field(() => [SearchResults])
    results: SearchResults[];
    @Field(() => Int)
    total_results: number;
    @Field(() => Int)
    total_pages: number;
}
