import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
 priceId: string;
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
 const session = useSession(); 

 async function handleSubscribe() {
  if(!session){ 
  signIn('github') //se não uma seção ativa redireciona para a autenticação c githuub
  return;
  }

  try {
   const response= await api.post('/subscribe') //redireciona o usuario ao clicar no button subscribe para o pagamento stripe
   const {sessionId} =response.data
   const stripe= await getStripeJs()
   await stripe.redirectToCheckout({sessionId: sessionId})
  } 
  catch(err) {
   alert(err.message);
  }
 }

  return (
    <button type="button" 
    className={styles.subscribeButton}
    onClick= {handleSubscribe}
    >
      Subscribe now
    </button>
  )
}