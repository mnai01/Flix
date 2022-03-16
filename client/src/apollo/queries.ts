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
    query DiscoverMovies($page: Int, $withGenres: String, $sortBy: DiscoverMovieSortBy, $voteCountGte: Int, $voteAverageGte: Int) {
        Media: DiscoverMovies(page: $page, with_genres: $withGenres, sort_by: $sortBy, vote_countGte: $voteCountGte, vote_averageGte: $voteAverageGte) {
            page
            total_pages
            results {
                poster_path
                id
                title
                backdrop_path
                vote_average
                popularity
                vote_count
                overview
                release_date
            }
        }
    }
`;

export const GET_TV_BY_GENRE = gql`
    query DiscoverTV($page: Int, $withGenres: String, $sortBy: DiscoverTVSortBy, $voteCountGte: Int, $voteAverageGte: Int) {
        Media: DiscoverTV(page: $page, with_genres: $withGenres, sort_by: $sortBy, vote_countGte: $voteCountGte, vote_averageGte: $voteAverageGte) {
            page
            total_pages
            results {
                id
                name
                poster_path
                backdrop_path
                vote_average
                popularity
                vote_count
                overview
            }
        }
    }
`;

export const GET_MOVIE_FROM_TMDB = gql`
    query FindMovieByTMDB($movieId: String!) {
        FindMovieByTMDB(movie_id: $movieId) {
            id
            poster_path
            adult
            overview
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
                    id
                    adult
                    poster_path
                    title
                    vote_average
                    genre_ids
                }
            }
        }
    }
`;

export const GET_TV_FROM_TMDB = gql`
    query FindTVByTMDB($tvShowId: String!) {
        FindTVByTMDB(tv_show_id: $tvShowId) {
            id
            poster_path
            overview
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
                    id
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

// export const TOP_RATED_MOVIES = gql`
//     query TopRatedMovies($page: Int!) {
//         TopRatedMovies(page: $page) {
//             page
//             total_results
//             results {
//                 backdrop_path
//                 title
//                 vote_average
//                 genre_ids
//                 id
//                 release_date
//                 overview
//             }
//         }
//     }
// `;

export const GET_TRENDING = gql`
    query GetTrending($page: Int!) {
        Media: GetTrending(page: $page) {
            page
            total_pages
            results {
                id
                media_type
                vote_average
                title
                name
                release_date
                first_air_date
                poster_path
            }
        }
    }
`;

export const GET_WATCHED_MOVIES = gql`
    query WatchedMovies {
        WatchedMovies {
            uuid: id
            id: tmdb
            type
            created_at
            poster_path
        }
    }
`;
