const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }

  # Queries enable clients to fetch data, but not to modify data.
  # To enable clients to modify data, our schema needs to define some mutations.
  #
  # The Mutation type is a special type that's similar in structure
  # to the Query type.

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # login token
  }

  # A mutation's return type is entirely up to you,
  # but we recommend defining special object types specifically
  # for mutation responses.

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;
