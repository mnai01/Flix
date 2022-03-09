/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DiscoverTV
// ====================================================

export interface DiscoverTV_DiscoverTV_results {
  __typename: "TVListResultObject";
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  popularity: number;
  vote_count: number;
  overview: string;
}

export interface DiscoverTV_DiscoverTV {
  __typename: "DiscoverTV";
  page: number;
  total_pages: number;
  results: DiscoverTV_DiscoverTV_results[];
}

export interface DiscoverTV {
  DiscoverTV: DiscoverTV_DiscoverTV;
}

export interface DiscoverTVVariables {
  page?: number | null;
  withGenres?: string | null;
}
