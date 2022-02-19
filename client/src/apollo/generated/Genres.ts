/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Genres
// ====================================================

export interface Genres_Genres_tv {
  __typename: "Genre";
  name: string;
  id: string;
}

export interface Genres_Genres_movies {
  __typename: "Genre";
  name: string;
  id: string;
}

export interface Genres_Genres {
  __typename: "GenreResult";
  tv: Genres_Genres_tv[];
  movies: Genres_Genres_movies[];
}

export interface Genres {
  Genres: Genres_Genres;
}
