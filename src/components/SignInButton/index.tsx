import {FaGithub} from 'react-icons/fa' //biblioteca react-icons
import {FiX} from 'react-icons/fi' // icon de x de fechar o button
import styles from './styles.module.scss'

export function SignInButton () {
 const isUserLoggedIn= true; // estado do botao

 return isUserLoggedIn ? ( // se o usuario estiver logado
   <button className={styles.signInButton} type="button">
     <FaGithub color="#04d361"/> {/*para colocar o icon do github no botão */}
     Anna julia marcomini
     <FiX color="#737380" className={styles.closeIcon}/> {/*colocar o icon do x no botao */}
   </button>
 ) 
 : ( // se não estiver logado
   <button className={styles.signInButton} type="button">
     <FaGithub /> {/*para colocar o icon do github no botão */}
     Sign in with Github
   </button>
 )
}