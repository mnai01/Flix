/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DiscoverTVSortBy } from "./globalTypes";

// ====================================================
// GraphQL query operation: DiscoverTV
// ====================================================

export interface DiscoverTV_Media_results {
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

export interface DiscoverTV_Media {
  __typename: "DiscoverTV";
  page: number;
  total_pages: number;
  results: DiscoverTV_Media_results[];
}

export interface DiscoverTV {
  Media: DiscoverTV_Media;
}

export interface DiscoverTVVariables {
  page?: number | null;
  withGenres?: string | null;
  sortBy?: DiscoverTVSortBy | null;
  voteCountGte?: number | null;
  voteAverageGte?: number | null;
}
