Please run:

```js
$ npm i
$ node test.js
```

Expected output:

```graphql
=========================== [ 'base.gql', 'User.gql', 'Query.gql' ] ===========================

>> FOUND <<

 directive @embedded on OBJECT

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

>> MISSING <<

type Query {
  allUsers: [User!]
  sayHello(name: String!): String! @resolver(name: "sayHello")
}

=========================== [ 'base.gql', 'Query.gql' ] ===========================

>> FOUND <<

 directive @embedded on OBJECT

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

>> MISSING <<

type Query {
  allUsers: [User!]
  sayHello(name: String!): String! @resolver(name: "sayHello")
}

=========================== [ 'base.gql', 'User.gql' ] ===========================

>> FOUND <<

 directive @embedded on OBJECT

directive @collection(name: String!) on OBJECT

directive @index(name: String!) on FIELD_DEFINITION

directive @resolver(name: String, paginated: Boolean! = false) on FIELD_DEFINITION

directive @relation(name: String) on FIELD_DEFINITION

directive @unique(index: String) on FIELD_DEFINITION

scalar Date

scalar Long

scalar Time

>> MISSING <<

type User {
  username: String! @unique
}

type Query {
  allUsers: [User!]
  sayHello(name: String!): String! @resolver(name: "sayHello")
}

=========================== *.gql ===========================
Error: Directive resolver: Couldn't find type resolver in any of the schemas.
    at collectDirective (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:655:23)
    at Array.forEach (<anonymous>)
    at collectNode (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:647:25)
    at /Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:590:13
    at Array.forEach (<anonymous>)
    at collectNewTypeDefinitions (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:589:30)
    at completeDefinitionPool (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:527:43)
    at process$1 (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:785:12)
    at processImportSyntaxSync (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:751:12)
    at /Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:1014:43

=========================== [ 'User.gql', 'base.gql' ] ===========================
Error: Directive unique: Couldn't find type unique in any of the schemas.
    at collectDirective (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:655:23)
    at Array.forEach (<anonymous>)
    at collectNode (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:647:25)
    at /Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:590:13
    at Array.forEach (<anonymous>)
    at collectNewTypeDefinitions (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:589:30)
    at completeDefinitionPool (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:527:43)
    at process$1 (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:785:12)
    at processImportSyntaxSync (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:751:12)
    at /Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:1014:43

=========================== [ 'Query.gql', 'base.gql' ] ===========================
Error: Directive resolver: Couldn't find type resolver in any of the schemas.
    at collectDirective (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:655:23)
    at Array.forEach (<anonymous>)
    at collectNode (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:647:25)
    at /Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:590:13
    at Array.forEach (<anonymous>)
    at collectNewTypeDefinitions (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:589:30)
    at completeDefinitionPool (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:527:43)
    at process$1 (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:785:12)
    at processImportSyntaxSync (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:751:12)
    at /Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:1014:43

=========================== [ 'Query.gql', 'User.gql', 'base.gql' ] ===========================
Error: Directive resolver: Couldn't find type resolver in any of the schemas.
    at collectDirective (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:655:23)
    at Array.forEach (<anonymous>)
    at collectNode (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:647:25)
    at /Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:590:13
    at Array.forEach (<anonymous>)
    at collectNewTypeDefinitions (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:589:30)
    at completeDefinitionPool (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:527:43)
    at process$1 (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:785:12)
    at processImportSyntaxSync (/Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:751:12)
    at /Users/zvictor/development/faugra/examples/basic/node_modules/@graphql-toolkit/core/index.cjs.js:1014:43
```
