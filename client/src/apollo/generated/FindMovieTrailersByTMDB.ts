/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindMovieTrailersByTMDB
// ====================================================

export interface FindMovieTrailersByTMDB_FindMovieTrailersByTMDB_results {
  __typename: "FindMovieTrailersByTMDBResults";
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  id: string;
  published_at: string;
}

export interface FindMovieTrailersByTMDB_FindMovieTrailersByTMDB {
  __typename: "FindMovieTrailersByTMDB";
  id: number;
  results: FindMovieTrailersByTMDB_FindMovieTrailersByTMDB_results[] | null;
}

export interface FindMovieTrailersByTMDB {
  FindMovieTrailersByTMDB: FindMovieTrailersByTMDB_FindMovieTrailersByTMDB;
}

export interface FindMovieTrailersByTMDBVariables {
  movieId: string;
}
