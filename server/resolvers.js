const resolvers = {
  Query: {
    users(_, args) {
      return [
        { name: 'Jack' },
        { name: 'Michael' }
      ]
    },
  },
}

export default resolvers
