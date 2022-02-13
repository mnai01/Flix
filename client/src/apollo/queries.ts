import { gql } from '@apollo/client';

export const HELLO = gql`
    query Hello {
        hello
    }
`;

export const BYE = gql`
    query Bye {
        bye
    }
`;

export const SearchVideosQuery = gql`
    query SearchVideos($query: String!, $includeAdult: Boolean, $region: Country) {
        SearchVideos(query: $query, include_adult: $includeAdult, region: $region) {
            name
            title
            id
            poster_path
        }
    }
`;
