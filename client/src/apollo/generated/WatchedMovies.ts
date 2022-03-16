/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WatchedMovies
// ====================================================

export interface WatchedMovies_WatchedMovies {
  __typename: "WatchedMovies";
  uuid: number;
  id: string;
  type: string;
  created_at: any;
  poster_path: string;
}

export interface WatchedMovies {
  WatchedMovies: WatchedMovies_WatchedMovies[];
}
