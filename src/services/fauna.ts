import {Client} from 'faunadb'

export const fauna= new Client ({ // acesso ao banco de dados
 secret: process.env.FAUNA_KEY
})