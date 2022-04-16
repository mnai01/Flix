import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation Login($password: String!, $email: String!) {
        Login(password: $password, email: $email) {
            accessToken
        }
    }
`;

export const ADD_WATCHED = gql`
    mutation AddToWatched($type: String!, $tmdb: String!, $posterPath: String!) {
        AddToWatched(type: $type, tmdb: $tmdb, poster_path: $posterPath)
    }
`;
