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
}

export interface DiscoverTV_DiscoverTV {
  __typename: "DiscoverTV";
  results: DiscoverTV_DiscoverTV_results[];
}

export interface DiscoverTV {
  DiscoverTV: DiscoverTV_DiscoverTV;
}

export interface DiscoverTVVariables {
  withGenres?: string | null;
}
