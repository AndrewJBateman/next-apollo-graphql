import gql from "graphql-tag";

export const AllFruits_QUERY = gql`
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

// export const CHARACTERS_QUERY = gql`
//   query characters($page: Int, $filter: FilterCharacter) {
//     characters(page: $page, filter: $filter) {
//       info {
//         count
//         pages
//         next
//         prev
//       }
//       results {
//         id
//         image
//         name
//         gender
//         species
//         episode {
//           id
//           episode
//           air_date
//         }
//         origin {
//           dimension
//           id
//         }
//       }
//     }
//   }
// `;

// export const CHARACTER_QUERY = gql`
//   query character($id: ID!) {
//     character(id: $id) {
//       id
//       image
//       name
//       gender
//       species
//       origin {
//         dimension
//         id
//       }
//     }
//   }
// `;
