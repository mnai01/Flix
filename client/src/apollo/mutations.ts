import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation Login($password: String!, $email: String!) {
        login(password: $password, email: $email) {
            accessToken
        }
    }
`;

export const ADD_WATCHED = gql`
    mutation AddToWatched($type: String!, $tmdb: String!, $posterPath: String!) {
        addToWatched(type: $type, tmdb: $tmdb, poster_path: $posterPath)
    }
`;
