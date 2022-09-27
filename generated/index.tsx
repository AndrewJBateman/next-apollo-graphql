// THIS IS A GENERATED FILE, use `run run codegen` to regenerate
/* tslint:disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Fruit = {
  __typename?: "Fruit";
  bloom?: Maybe<Scalars["String"]>;
  climatic_zone?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  family?: Maybe<Scalars["String"]>;
  fruit_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  life_cycle?: Maybe<Scalars["String"]>;
  maturation_fruit?: Maybe<Scalars["String"]>;
  origin?: Maybe<Scalars["String"]>;
  producing_countries?: Maybe<Array<Maybe<Countries>>>;
  scientific_name?: Maybe<Scalars["String"]>;
  tree_name?: Maybe<Scalars["String"]>;
};

export type Fruits = {
  __typename?: "Fruits";
  bloom?: Maybe<Scalars["String"]>;
  climatic_zone?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  family?: Maybe<Scalars["String"]>;
  fruit_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  life_cycle?: Maybe<Scalars["String"]>;
  maturation_fruit?: Maybe<Scalars["String"]>;
  origin?: Maybe<Scalars["String"]>;
  producing_countries?: Maybe<Array<Maybe<Countries>>>;
  scientific_name?: Maybe<Scalars["String"]>;
  tree_name?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addFruit: Fruits;
  deleteFruit: Fruits;
  updateFruit: Fruits;
};

export type MutationAddFruitArgs = {
  bloom: Scalars["String"];
  climatic_zone: Scalars["String"];
  description: Scalars["String"];
  family: Scalars["String"];
  fruit_name: Scalars["String"];
  id: Scalars["ID"];
  life_cycle: Scalars["String"];
  maturation_fruit: Scalars["String"];
  origin: Scalars["String"];
  scientific_name: Scalars["String"];
  tree_name: Scalars["String"];
};

export type MutationDeleteFruitArgs = {
  id: Scalars["ID"];
};

export type MutationUpdateFruitArgs = {
  bloom: Scalars["String"];
  climatic_zone: Scalars["String"];
  description: Scalars["String"];
  family: Scalars["String"];
  fruit_name: Scalars["String"];
  id: Scalars["ID"];
  life_cycle: Scalars["String"];
  maturation_fruit: Scalars["String"];
  origin: Scalars["String"];
  scientific_name: Scalars["String"];
  tree_name: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  filterFruitsFam?: Maybe<Array<Maybe<Fruits>>>;
  filterFruitsOri?: Maybe<Array<Maybe<Fruits>>>;
  fruit?: Maybe<Fruit>;
  fruits?: Maybe<Array<Maybe<Fruits>>>;
};

export type QueryFilterFruitsFamArgs = {
  family: Scalars["String"];
};

export type QueryFilterFruitsOriArgs = {
  origin: Scalars["String"];
};

export type QueryFruitArgs = {
  id: Scalars["ID"];
};

export type Countries = {
  __typename?: "countries";
  country?: Maybe<Scalars["String"]>;
};

export type AllFruitsQueryVariables = Exact<{ [key: string]: never }>;

export type AllFruitsQuery = {
  __typename?: "Query";
  fruits?: Array<{
    __typename?: "Fruits";
    id?: string | null;
    scientific_name?: string | null;
    fruit_name?: string | null;
    description?: string | null;
    producing_countries?: Array<{
      __typename?: "countries";
      country?: string | null;
    } | null> | null;
  } | null> | null;
};

export const AllFruitsDocument = gql`
  query allFruits {
    fruits {
      id
      scientific_name
      fruit_name
      description
      producing_countries {
        country
      }
    }
  }
`;

/**
 * __useAllFruitsQuery__
 *
 * To run a query within a React component, call `useAllFruitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFruitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFruitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFruitsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllFruitsQuery, AllFruitsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllFruitsQuery, AllFruitsQueryVariables>(
    AllFruitsDocument,
    options
  );
}
export function useAllFruitsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllFruitsQuery,
    AllFruitsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllFruitsQuery, AllFruitsQueryVariables>(
    AllFruitsDocument,
    options
  );
}
export type AllFruitsQueryHookResult = ReturnType<typeof useAllFruitsQuery>;
export type AllFruitsLazyQueryHookResult = ReturnType<
  typeof useAllFruitsLazyQuery
>;
export type AllFruitsQueryResult = Apollo.QueryResult<
  AllFruitsQuery,
  AllFruitsQueryVariables
>;
