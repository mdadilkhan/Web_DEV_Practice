
// when using stand alone this file is enought for connecting the graphql 
import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import {typeDefs} from './schema'
import {resolvers} from './schema'
import config from './config'
import connectDb from './database/db'



const server=new ApolloServer({
    typeDefs,
    resolvers
})



async function connectToDatabase(){
     await connectDb()
}

connectToDatabase()
 startStandaloneServer(server, {
    listen: { port: config.port },
  }).then((res)=>{
     const {url}=res
    console.log(`🚀  Server ready at: ${url}`);
  }).catch((err)=>{
    console.log(err);
  })


