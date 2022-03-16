/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTrending
// ====================================================

export interface GetTrending_Media_results {
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

export interface GetTrending_Media {
  __typename: "Trending";
  page: number;
  total_pages: number;
  results: GetTrending_Media_results[];
}

export interface GetTrending {
  Media: GetTrending_Media;
}

export interface GetTrendingVariables {
  page: number;
}
