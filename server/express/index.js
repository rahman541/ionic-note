require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import graphQLSchema from './graphQLSchema'

const app = express()

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphiqlExpress({ schema: graphQLSchema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(process.env.EXPRESS_PORT, () => console.log(`Server started at http://127.0.0.1:${process.env.EXPRESS_PORT}`))
