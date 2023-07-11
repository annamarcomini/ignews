import React from "react";
import styles from './home.module.scss';
import Head from 'next/head';
import { SubscribeButton } from "../components/SubscribeButton";
import { GetStaticProps } from "next"; 
import {stripe} from "../services/stripe";


interface HomeProps{
 product: {
  priceId: string;
  amount: number;
 }
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        {/*faz com que seja transportado esse title para o head do document */}{" "}
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          {/*span por dentro do react pois ele tera cor diferente na letra */}
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId= {product.priceId}/> {/*para definir qual produto sera atribuido ao botao  */}
        </section>
        <img src="/avatar.svg" alt="Girl coding"></img>
      </main>
    </>
  )
  }


export const getStaticProps: GetStaticProps = async () => { // server side ficaria recarregando a pagina sempre tempo real e o client side demanda menos tempo ainda de performance
 const price  = await stripe.prices.retrieve('price_1NGtlTCsKvsWBmPsYnGiiK4C', {
  expand: ['product'] //expandindo para acessar todas as informações do produto
 }) //colocar as requisiçoes para a api do stripe

 const product = {
  priceId: price.id,
  amount: new Intl.NumberFormat ('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price.unit_amount / 100),
 }
  return {
  props: {
    product,
  },
  revalidate: 60*60*24, //quanto tempo essa pagina ficara sem precisar ser reconstruída o html, ali está calculando 24 horas
 }
}