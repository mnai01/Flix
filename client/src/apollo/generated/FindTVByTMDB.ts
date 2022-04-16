/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindTVByTMDB
// ====================================================

export interface FindTVByTMDB_FindTVByTMDB_created_by {
  __typename: "CreatedBy";
  profile_path: string | null;
}

export interface FindTVByTMDB_FindTVByTMDB_genres {
  __typename: "Genre";
  name: string;
  id: string;
}

export interface FindTVByTMDB_FindTVByTMDB_seasons {
  __typename: "Season";
  name: string;
  poster_path: string | null;
  season_number: number;
  episode_count: number;
  air_date: string | null;
}

export interface FindTVByTMDB_FindTVByTMDB_videos_results {
  __typename: "VideosResults";
  name: string;
  site: string;
  key: string;
  published_at: string;
  type: string;
}

export interface FindTVByTMDB_FindTVByTMDB_videos {
  __typename: "Videos";
  results: FindTVByTMDB_FindTVByTMDB_videos_results[] | null;
}

export interface FindTVByTMDB_FindTVByTMDB_external_ids {
  __typename: "ExternalIds";
  imdb_id: string | null;
}

export interface FindTVByTMDB_FindTVByTMDB_similar_results {
  __typename: "SimilarResults";
  id: number;
  adult: boolean;
  genre_ids: number[] | null;
  name: string;
  poster_path: string | null;
  vote_average: number;
  first_air_date: string | null;
}

export interface FindTVByTMDB_FindTVByTMDB_similar {
  __typename: "Similar";
  page: number;
  results: FindTVByTMDB_FindTVByTMDB_similar_results[] | null;
}

export interface FindTVByTMDB_FindTVByTMDB {
  __typename: "TVByTMDB";
  id: number;
  poster_path: string | null;
  overview: string;
  backdrop_path: string | null;
  created_by: FindTVByTMDB_FindTVByTMDB_created_by[] | null;
  episode_run_time: number[] | null;
  genres: FindTVByTMDB_FindTVByTMDB_genres[] | null;
  number_of_seasons: number;
  popularity: number;
  vote_average: number;
  first_air_date: string | null;
  name: string;
  last_air_date: string | null;
  seasons: FindTVByTMDB_FindTVByTMDB_seasons[] | null;
  videos: FindTVByTMDB_FindTVByTMDB_videos;
  external_ids: FindTVByTMDB_FindTVByTMDB_external_ids;
  similar: FindTVByTMDB_FindTVByTMDB_similar;
}

export interface FindTVByTMDB {
  FindTVByTMDB: FindTVByTMDB_FindTVByTMDB;
}

export interface FindTVByTMDBVariables {
  tvShowId: string;
}
