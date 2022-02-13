/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Country } from "./globalTypes";

// ====================================================
// GraphQL query operation: SearchVideos
// ====================================================

export interface SearchVideos_SearchVideos {
  __typename: "SearchResults";
  name: string | null;
  title: string | null;
  id: number;
  poster_path: string | null;
}

export interface SearchVideos {
  SearchVideos: SearchVideos_SearchVideos[];
}

export interface SearchVideosVariables {
  query: string;
  includeAdult?: boolean | null;
  region?: Country | null;
}
