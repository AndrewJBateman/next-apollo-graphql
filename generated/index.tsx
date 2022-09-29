// THIS IS A GENERATED FILE, use `run run codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Fruit = {
  __typename?: 'Fruit';
  bloom?: Maybe<Scalars['String']>;
  climatic_zone?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  fruit_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  life_cycle?: Maybe<Scalars['String']>;
  maturation_fruit?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  producing_countries?: Maybe<Array<Maybe<Countries>>>;
  scientific_name?: Maybe<Scalars['String']>;
  tree_name?: Maybe<Scalars['String']>;
};

export type Fruits = {
  __typename?: 'Fruits';
  bloom?: Maybe<Scalars['String']>;
  climatic_zone?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  fruit_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  life_cycle?: Maybe<Scalars['String']>;
  maturation_fruit?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  producing_countries?: Maybe<Array<Maybe<Countries>>>;
  scientific_name?: Maybe<Scalars['String']>;
  tree_name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFruit: Fruits;
  deleteFruit: Fruits;
  updateFruit: Fruits;
};


export type MutationAddFruitArgs = {
  bloom: Scalars['String'];
  climatic_zone: Scalars['String'];
  description: Scalars['String'];
  family: Scalars['String'];
  fruit_name: Scalars['String'];
  id: Scalars['ID'];
  life_cycle: Scalars['String'];
  maturation_fruit: Scalars['String'];
  origin: Scalars['String'];
  scientific_name: Scalars['String'];
  tree_name: Scalars['String'];
};


export type MutationDeleteFruitArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateFruitArgs = {
  bloom: Scalars['String'];
  climatic_zone: Scalars['String'];
  description: Scalars['String'];
  family: Scalars['String'];
  fruit_name: Scalars['String'];
  id: Scalars['ID'];
  life_cycle: Scalars['String'];
  maturation_fruit: Scalars['String'];
  origin: Scalars['String'];
  scientific_name: Scalars['String'];
  tree_name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  filterFruitsFam?: Maybe<Array<Maybe<Fruits>>>;
  filterFruitsOri?: Maybe<Array<Maybe<Fruits>>>;
  fruit?: Maybe<Fruit>;
  fruits?: Maybe<Array<Maybe<Fruits>>>;
};


export type QueryFilterFruitsFamArgs = {
  family: Scalars['String'];
};


export type QueryFilterFruitsOriArgs = {
  origin: Scalars['String'];
};


export type QueryFruitArgs = {
  id: Scalars['ID'];
};

export type Countries = {
  __typename?: 'countries';
  country?: Maybe<Scalars['String']>;
};

export type Get_FruitsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_FruitsQuery = { __typename?: 'Query', fruits?: Array<{ __typename?: 'Fruits', id?: string | null, scientific_name?: string | null, fruit_name?: string | null, description?: string | null } | null> | null };

export type Get_FruitQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Get_FruitQuery = { __typename?: 'Query', fruit?: { __typename?: 'Fruit', id?: string | null, scientific_name?: string | null, tree_name?: string | null, fruit_name?: string | null, family?: string | null } | null };


export const Get_FruitsDocument = gql`
    query GET_FRUITS {
  fruits {
    id
    scientific_name
    fruit_name
    description
  }
}
    `;

/**
 * __useGet_FruitsQuery__
 *
 * To run a query within a React component, call `useGet_FruitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_FruitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_FruitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_FruitsQuery(baseOptions?: Apollo.QueryHookOptions<Get_FruitsQuery, Get_FruitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_FruitsQuery, Get_FruitsQueryVariables>(Get_FruitsDocument, options);
      }
export function useGet_FruitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_FruitsQuery, Get_FruitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_FruitsQuery, Get_FruitsQueryVariables>(Get_FruitsDocument, options);
        }
export type Get_FruitsQueryHookResult = ReturnType<typeof useGet_FruitsQuery>;
export type Get_FruitsLazyQueryHookResult = ReturnType<typeof useGet_FruitsLazyQuery>;
export type Get_FruitsQueryResult = Apollo.QueryResult<Get_FruitsQuery, Get_FruitsQueryVariables>;
export const Get_FruitDocument = gql`
    query GET_FRUIT($id: ID!) {
  fruit(id: $id) {
    id
    scientific_name
    tree_name
    fruit_name
    family
  }
}
    `;

/**
 * __useGet_FruitQuery__
 *
 * To run a query within a React component, call `useGet_FruitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_FruitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_FruitQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGet_FruitQuery(baseOptions: Apollo.QueryHookOptions<Get_FruitQuery, Get_FruitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_FruitQuery, Get_FruitQueryVariables>(Get_FruitDocument, options);
      }
export function useGet_FruitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_FruitQuery, Get_FruitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_FruitQuery, Get_FruitQueryVariables>(Get_FruitDocument, options);
        }
export type Get_FruitQueryHookResult = ReturnType<typeof useGet_FruitQuery>;
export type Get_FruitLazyQueryHookResult = ReturnType<typeof useGet_FruitLazyQuery>;
export type Get_FruitQueryResult = Apollo.QueryResult<Get_FruitQuery, Get_FruitQueryVariables>;