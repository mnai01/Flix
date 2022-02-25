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
            genres {
                name
                id
            }
            imdb_id
            runtime
            title
            vote_average
            release_date
            vote_count
            videos {
                results {
                    name
                    key
                    site
                    id
                }
            }
            similar {
                page
                results {
                    adult
                    poster_path
                    title
                }
            }
        }
    }
`;

export const GET_TV_FROM_TMDB = gql`
    query FindTVByTMDB($tvShowId: String!) {
        FindTVByTMDB(tv_show_id: $tvShowId) {
            backdrop_path
            created_by {
                profile_path
            }
            episode_run_time
            id
            genres {
                name
                id
            }
            number_of_seasons
            popularity
            vote_average
            first_air_date
            name
            last_air_date
            seasons {
                name
                poster_path
                season_number
                episode_count
                air_date
            }
            videos {
                results {
                    name
                    site
                    key
                    published_at
                }
            }
            external_ids {
                imdb_id
            }
            similar {
                page
                results {
                    adult
                    genre_ids
                    name
                    poster_path
                    vote_average
                    first_air_date
                }
            }
        }
    }
`;

export const GET_SEASON_DETAILS = gql`
    query FindEpisodeByTMDB($tvShowId: String!, $seasonNumber: Int!) {
        FindEpisodeByTMDB(tv_show_id: $tvShowId, season_number: $seasonNumber) {
            episodes {
                name
                overview
                season_number
                still_path
                episode_number
                air_date
            }
            season_number
        }
    }
`;
