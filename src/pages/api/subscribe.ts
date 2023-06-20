import { NextApiRequest, NextApiResponse } from "next";
import {query as q} from 'faunadb'
import {fauna} from '../../services/fauna'
import {getSession} from 'next-auth/react';
import {stripe} from "../../services/stripe";


export default async (req: NextApiRequest, res: NextApiResponse) => {
 if (req.method === "POST") { // se a requisição for do tipo post e se for do tipo post eu crio uma seção do stripe
  const session = await getSession({req }) //ele pega a session e os dados dela, email que preciso ali no stripe costumer


   const stripeCustomer = await stripe.customers.create({
    email: session.user.email
   })
   
   const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: stripeCustomer.id,  //usando o  cliente criado no stripe 
    payment_method_types: ["card"],
     billing_address_collection: "required",
     line_items: [
      { price: "price_1NGtlTCsKvsWBmPsYnGiiK4C", quantity: 1 } //preço e quantidade
     ],
     mode: 'subscription', //pagamento recorrente
     allow_promotion_codes: true, //cupom d desconto
     success_url: process.env.STRIPE_SUCCESS_URL, //quando voltar sucesso  para onde o usuário vai, a página c o conteudo 
     cancel_url:process.env.STRIPE_CANCEL_URL, // se ele cancelar a operação de pagamento volta para a page home/index
   })
   return res.status(200).json({sessionId: stripeCheckoutSession.id})
  } else {
   res.setHeader("Allow", "POST")
   res.status(405).end("Method not allowed") }
  }
