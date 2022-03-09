import { MovieListResultObject } from './Reusable/MovieListResultObject';
import { ArgsType, Field, Int, ObjectType } from 'type-graphql';

@ArgsType()
export class PopularMoviesParams {
    @Field(() => Int)
    page: number;
}

@ObjectType()
export class PopularMovies {
    @Field(() => Int)
    page: number;
    @Field(() => [MovieListResultObject], { nullable: true })
    results?: MovieListResultObject[] | null;
    @Field(() => Int)
    total_pages: number;
    @Field(() => Int)
    total_results: number;
}
