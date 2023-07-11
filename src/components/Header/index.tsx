import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
 
 return (
   //terá o header o quadro que pega a tela toda e a div que sera o quadro conteudo do header
   <header className={styles.headerContainer}>
     {/*classes para importar a estilização do header e da div do styles */}
     <div className={styles.headerContent}>
       <img src="/logo.svg" alt="ignews"></img>
       <nav>
         <ActiveLink activeClassName={styles.active} href="/" legacyBehavior>
           <a>Home</a>
         </ActiveLink>
         {/* active é pra fazer o botao amarelo mostrando a ativação das pages*/}

         <ActiveLink
           activeClassName={styles.active} href="/posts" legacyBehavior>
           {/*link foi para otimizar o  carregando */}
           <a>Posts</a>
         </ActiveLink>
       </nav>
       <SignInButton /> {/*componente do botao no Header */}
     </div>
   </header>
 )
}