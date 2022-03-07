/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTrending
// ====================================================

export interface GetTrending_GetTrending_results {
  __typename: "TrendingResults";
  id: number;
  media_type: string;
  vote_average: number | null;
  title: string | null;
  name: string | null;
  release_date: string | null;
  first_air_date: string | null;
  poster_path: string | null;
}

export interface GetTrending_GetTrending {
  __typename: "Trending";
  results: GetTrending_GetTrending_results[];
}

export interface GetTrending {
  GetTrending: GetTrending_GetTrending;
}
