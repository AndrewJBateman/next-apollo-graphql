import gql from "graphql-tag";

export const AllFruits_QUERY = gql`
  query allFruits {
    fruits {
      id
      scientific_name
      fruit_name
      description
    }
  }
`;

export const OneFruit_QUERY = gql`
  query oneFruit {
    fruit(id: 5) {
      id
      scientific_name
      tree_name
      fruit_name
      family
    }
  }
`;
