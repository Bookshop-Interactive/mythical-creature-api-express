import { gql } from 'apollo-server';
export default gql`
  type Query {
    mythics: [Mythic!]!
    mythic(name: String): Mythic!
  }

  type Mutation {
    summon(
      name: String!
      description: String!
      country: String!
      powers: [String!]!
      weaknesses: [String!]!
      rank: Int!
    ): Boolean!
    banish(name: String!): Boolean!
  }

  type Mythic {
    id: String!
    name: String!
    description: String!
    country: String!
    powers: [String!]!
    weaknesses: [String!]!
    rank: Int!
  }
`;
