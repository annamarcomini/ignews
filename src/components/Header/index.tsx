import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
 return (
   //terá o header o quadro que pega a tela toda e a div que sera o quadro conteudo do header
   <header className={styles.headerContainer}>
     {/*classes para importar a estilização do header e da div do styles */}
     <div className={styles.headerContent}>
       <img src="/logo.svg" alt="ignews"></img>
       <nav>
         <a className={styles.active} href="">
           Home
         </a>{" "}
         {/* active é pra fazer o botao amarelo mostrando a ativação das pages*/}
         <a href="">Posts</a>
       </nav>
       <SignInButton /> {/*componente do botao no Header */}
     </div>
   </header>
 )
}