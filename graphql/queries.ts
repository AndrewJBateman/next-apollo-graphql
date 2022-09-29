import gql from "graphql-tag";

export const GET_FRUITS = gql`
  query GET_FRUITS {
    fruits {
      id
      scientific_name
      fruit_name
      description
    }
  }
`;

export const GET_FRUIT = gql`
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
