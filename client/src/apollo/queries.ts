import { gql } from '@apollo/client';

export const BYE = gql`
    query Bye {
        bye
    }
`;

export const SEARCH_VIDEOS_QUERY = gql`
    query SearchVideos($region: Country, $query: String!, $includeAdult: Boolean) {
        SearchVideos(region: $region, query: $query, include_adult: $includeAdult) {
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

export const GET_MOVIE_FROM_TMDB = gql`
    query FindMovieByTMDB($movieId: String!) {
        FindMovieByTMDB(movie_id: $movieId) {
            adult
            backdrop_path
            budget
            homepage
            id
            imdb_id
            original_language
            original_title
            overview
            popularity
            poster_path
            release_date
            revenue
            runtime
            status
            tagline
            title
            vote_average
            vote_count
            production_companies {
                id
                logo_path
                name
                origin_country
            }
            genres {
                id
                name
            }
            production_countries {
                iso_3166_1
                name
            }
        }
    }
`;

export const GET_MOVIE_TRAILER_FROM_TMDB = gql`
    query FindMovieTrailersByTMDB($movieId: String!) {
        FindMovieTrailersByTMDB(movie_id: $movieId) {
            id
            results {
                name
                key
                site
                size
                type
                id
                published_at
            }
        }
    }
`;
