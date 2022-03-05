import { MovieListResultObject } from './Reusable/MovieListResultObject';
import { Field, Int, ObjectType } from 'type-graphql';
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
