/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DiscoverMovies
// ====================================================

export interface DiscoverMovies_discoverMovies_results {
  __typename: "DiscoverMovieResults";
  poster_path: string | null;
  id: number;
  title: string | null;
}

export interface DiscoverMovies_discoverMovies {
  __typename: "DiscoverMovie";
  results: DiscoverMovies_discoverMovies_results[];
}

export interface DiscoverMovies {
  discoverMovies: DiscoverMovies_discoverMovies;
}

export interface DiscoverMoviesVariables {
  withGenres?: string | null;
}
