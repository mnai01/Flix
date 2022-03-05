/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DiscoverMovieSortBy } from "./globalTypes";

// ====================================================
// GraphQL query operation: DiscoverMovies
// ====================================================

export interface DiscoverMovies_DiscoverMovies_results {
  __typename: "MovieListResultObject";
  poster_path: string | null;
  id: number;
  title: string | null;
  backdrop_path: string | null;
  vote_average: number | null;
  popularity: number | null;
  vote_count: number | null;
  overview: string | null;
  release_date: string | null;
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
  sortBy?: DiscoverMovieSortBy | null;
  voteCountGte?: number | null;
  voteAverageGte?: number | null;
}
