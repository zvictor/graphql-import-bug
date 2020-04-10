const { importSchema } = require('graphql-import')

const target = `directive @embedded on OBJECT

directive @collection(name: String!) on OBJECT

directive @index(name: String!) on FIELD_DEFINITION

directive @resolver(name: String, paginated: Boolean! = false) on FIELD_DEFINITION

directive @relation(name: String) on FIELD_DEFINITION

directive @unique(index: String) on FIELD_DEFINITION

scalar Date

scalar Long

scalar Time

type User {
  username: String! @unique
}

type Query {
  allUsers: [User!]
  sayHello(name: String!): String! @resolver(name: "sayHello")
}`

function run(pattern) {
  console.log('\n===========================', pattern, '===========================')

  try {
    const schema = importSchema(pattern)

    console.log('\n>> FOUND <<\n\n', schema)
    console.log('>> MISSING <<\n', target.replace(schema, ''))
  } catch (e) {
    console.error(e)
  }
}

run(['base.gql', 'User.gql', 'Query.gql'])
run(['base.gql', 'Query.gql'])
run(['base.gql', 'User.gql'])
run('*.gql')
run(['User.gql', 'base.gql'])
run(['Query.gql', 'base.gql'])
run(['Query.gql', 'User.gql', 'base.gql'])
