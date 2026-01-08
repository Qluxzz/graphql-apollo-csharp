/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Actor($actorId: Int!) {\n    actor(where: { id: { eq: $actorId } }) {\n      id\n      firstName\n      lastName\n      movies {\n        id\n        name\n      }\n    }\n  }\n": typeof types.ActorDocument,
    "\n  query Movies {\n    movies(order: { released: DESC }) {\n      id\n      name\n      released\n      actors {\n        id\n      }\n    }\n  }\n": typeof types.MoviesDocument,
    "\n  query Movie($movieId: Int!) {\n    movie(where: { id: { eq: $movieId } }) {\n      id\n      name\n      genre\n      released\n      actors {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": typeof types.MovieDocument,
};
const documents: Documents = {
    "\n  query Actor($actorId: Int!) {\n    actor(where: { id: { eq: $actorId } }) {\n      id\n      firstName\n      lastName\n      movies {\n        id\n        name\n      }\n    }\n  }\n": types.ActorDocument,
    "\n  query Movies {\n    movies(order: { released: DESC }) {\n      id\n      name\n      released\n      actors {\n        id\n      }\n    }\n  }\n": types.MoviesDocument,
    "\n  query Movie($movieId: Int!) {\n    movie(where: { id: { eq: $movieId } }) {\n      id\n      name\n      genre\n      released\n      actors {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.MovieDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Actor($actorId: Int!) {\n    actor(where: { id: { eq: $actorId } }) {\n      id\n      firstName\n      lastName\n      movies {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Actor($actorId: Int!) {\n    actor(where: { id: { eq: $actorId } }) {\n      id\n      firstName\n      lastName\n      movies {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Movies {\n    movies(order: { released: DESC }) {\n      id\n      name\n      released\n      actors {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Movies {\n    movies(order: { released: DESC }) {\n      id\n      name\n      released\n      actors {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Movie($movieId: Int!) {\n    movie(where: { id: { eq: $movieId } }) {\n      id\n      name\n      genre\n      released\n      actors {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  query Movie($movieId: Int!) {\n    movie(where: { id: { eq: $movieId } }) {\n      id\n      name\n      genre\n      released\n      actors {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;