/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateContent
// ====================================================

export interface CreateContent_createContent {
  __typename: "Content";
  id: string;
  content: string;
}

export interface CreateContent {
  createContent: CreateContent_createContent;
}

export interface CreateContentVariables {
  content: string;
}
