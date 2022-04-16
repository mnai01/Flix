/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_Login {
  __typename: "LoginResponse";
  accessToken: string;
}

export interface Login {
  Login: Login_Login;
}

export interface LoginVariables {
  password: string;
  email: string;
}
