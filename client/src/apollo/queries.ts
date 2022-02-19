import { gql } from '@apollo/client';

export const BYE = gql`
    query Bye {
        bye
    }
`;

export const SEARCH_VIDEOS_QUERY = gql`
    query SearchVideos($query: String!) {
        SearchVideos(query: $query) {
            page
            results {
                name
                title
                id
                poster_path
            }
        }
    }
`;

export const GET_GENRES = gql`
    query Genres {
        Genres {
            tv {
                name
                id
            }
            movies {
                name
                id
            }
        }
    }
`;

export const GET_MOVIES_BY_GENRE = gql`
    query DiscoverMovies($withGenres: String) {
        DiscoverMovies(with_genres: $withGenres) {
            results {
                poster_path
                id
                title
            }
        }
    }
`;

export const GET_TV_BY_GENRE = gql`
    query DiscoverTV($withGenres: String) {
        DiscoverTV(with_genres: $withGenres) {
            results {
                id
                name
                poster_path
            }
        }
    }
`;
