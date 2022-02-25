/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindMovieByTMDB
// ====================================================

export interface FindMovieByTMDB_FindMovieByTMDB_genres {
  __typename: "GenresEntity";
  name: string;
  id: number;
}

export interface FindMovieByTMDB_FindMovieByTMDB_videos_results {
  __typename: "MovieVideosResults";
  name: string;
  key: string;
  site: string;
  id: string;
}

export interface FindMovieByTMDB_FindMovieByTMDB_videos {
  __typename: "MovieVideosByTMDB";
  results: FindMovieByTMDB_FindMovieByTMDB_videos_results[] | null;
}

export interface FindMovieByTMDB_FindMovieByTMDB_similar_results {
  __typename: "SimilarMovieResults";
  adult: boolean;
  poster_path: string;
  title: string;
}

export interface FindMovieByTMDB_FindMovieByTMDB_similar {
  __typename: "SimilarMovie";
  page: number;
  results: FindMovieByTMDB_FindMovieByTMDB_similar_results[] | null;
}

export interface FindMovieByTMDB_FindMovieByTMDB {
  __typename: "FindMovieByTMDB";
  adult: boolean;
  backdrop_path: string | null;
  genres: FindMovieByTMDB_FindMovieByTMDB_genres[] | null;
  imdb_id: string;
  runtime: number;
  title: string;
  vote_average: number;
  release_date: string;
  vote_count: number;
  videos: FindMovieByTMDB_FindMovieByTMDB_videos;
  similar: FindMovieByTMDB_FindMovieByTMDB_similar;
}

export interface FindMovieByTMDB {
  FindMovieByTMDB: FindMovieByTMDB_FindMovieByTMDB;
}

export interface FindMovieByTMDBVariables {
  movieId: string;
}
