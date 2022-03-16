/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DiscoverMovieSortBy } from "./globalTypes";

// ====================================================
// GraphQL query operation: DiscoverMovies
// ====================================================

export interface DiscoverMovies_Media_results {
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

export interface DiscoverMovies_Media {
  __typename: "DiscoverMovie";
  page: number;
  total_pages: number;
  results: DiscoverMovies_Media_results[];
}

export interface DiscoverMovies {
  Media: DiscoverMovies_Media;
}

export interface DiscoverMoviesVariables {
  page?: number | null;
  withGenres?: string | null;
  sortBy?: DiscoverMovieSortBy | null;
  voteCountGte?: number | null;
  voteAverageGte?: number | null;
}
