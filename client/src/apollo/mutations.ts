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

export const REGISTER = gql`
    mutation Register($token: String!, $password: String!, $email: String!, $lastName: String!, $firstName: String!) {
        Register(token: $token, password: $password, email: $email, lastName: $lastName, firstName: $firstName)
    }
`;
