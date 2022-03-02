/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DiscoverMovies
// ====================================================

export interface DiscoverMovies_DiscoverMovies_results {
  __typename: "MovieListResultObject";
  poster_path: string | null;
  id: number;
  title: string | null;
}

export interface DiscoverMovies_DiscoverMovies {
  __typename: "DiscoverMovie";
  results: DiscoverMovies_DiscoverMovies_results[];
}

export interface DiscoverMovies {
  DiscoverMovies: DiscoverMovies_DiscoverMovies;
}

export interface DiscoverMoviesVariables {
  withGenres?: string | null;
}
