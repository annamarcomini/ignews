
import {query as q} from 'faunadb'
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {fauna} from '../../../services/fauna';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    ],
  
   callbacks: { // função do nextauth
    async signIn({ user, account, profile}) {
     const {email} = user
     
     await fauna.query( //metodo de fazer inserção no banco de dados fauna
      q.Create(
       q.Collection('user'), // a coleção 
       {data: {email}} //data é  onde fica o email do usario
       
      )
     )
     
      return true
    },
   },
  }

export default NextAuth(authOptions)
