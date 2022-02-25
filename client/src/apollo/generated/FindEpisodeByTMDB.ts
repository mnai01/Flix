/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindEpisodeByTMDB
// ====================================================

export interface FindEpisodeByTMDB_FindEpisodeByTMDB_episodes {
  __typename: "EpisodesBySeason";
  name: string;
  overview: string;
  season_number: number;
  still_path: string | null;
  episode_number: number;
  air_date: string | null;
}

export interface FindEpisodeByTMDB_FindEpisodeByTMDB {
  __typename: "SeasonByTMDB";
  episodes: FindEpisodeByTMDB_FindEpisodeByTMDB_episodes[] | null;
  season_number: number;
}

export interface FindEpisodeByTMDB {
  FindEpisodeByTMDB: FindEpisodeByTMDB_FindEpisodeByTMDB;
}

export interface FindEpisodeByTMDBVariables {
  tvShowId: string;
  seasonNumber: number;
}
