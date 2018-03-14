import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

const QueryRootType = new GraphQLObjectType({
  name: 'QueryRoot',
  fields: {
    gretting: {
      type: GraphQLString,
      resolve: () => 'hello ~'
    }
  }
})

export default new GraphQLSchema({
  query: QueryRootType
})
