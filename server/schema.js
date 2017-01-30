const myGraphQLSchema = `
  type User {
    name: String,
  }

  type Query {
    users: [User],
  }

  type schema {
    query: Query,
  }
`

export default [myGraphQLSchema]
