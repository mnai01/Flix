import { ArgsType, Field, ObjectType } from 'type-graphql';

@ArgsType()
export class GenreParams {
    // it can infer string but not number so we need to specify
    @Field(() => String, { nullable: false })
    type: 'tv' | 'movie';
}

@ObjectType()
export class Genre {
    // it can infer string but not number so we need to specify
    @Field()
    id: string;
    @Field()
    name: string;
}

@ObjectType()
export class GenreResult {
    @Field(() => [Genre])
    tv: Genre[];
    @Field(() => [Genre])
    movies: Genre[];
}
