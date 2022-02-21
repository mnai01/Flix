/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindMovieByTMDB
// ====================================================

export interface FindMovieByTMDB_FindMovieByTMDB_production_companies {
  __typename: "ProductionCompaniesEntity";
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface FindMovieByTMDB_FindMovieByTMDB_genres {
  __typename: "GenresEntity";
  id: number;
  name: string;
}

export interface FindMovieByTMDB_FindMovieByTMDB_production_countries {
  __typename: "ProductionCountriesEntity";
  iso_3166_1: string;
  name: string;
}

export interface FindMovieByTMDB_FindMovieByTMDB {
  __typename: "FindMovieByTMDB";
  adult: boolean;
  backdrop_path: string | null;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
  production_companies: FindMovieByTMDB_FindMovieByTMDB_production_companies[] | null;
  genres: FindMovieByTMDB_FindMovieByTMDB_genres[] | null;
  production_countries: FindMovieByTMDB_FindMovieByTMDB_production_countries[] | null;
}

export interface FindMovieByTMDB {
  FindMovieByTMDB: FindMovieByTMDB_FindMovieByTMDB;
}

export interface FindMovieByTMDBVariables {
  movieId: string;
}
