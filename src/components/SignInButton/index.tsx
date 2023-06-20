import { FaGithub } from "react-icons/fa" //biblioteca react-icons
import { FiX } from "react-icons/fi" // icon de x de fechar o button
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./styles.module.scss"

export function SignInButton() {
  const session = useSession()
  const isAuthenticated = session.status === "authenticated"
  // estado do botao
  
  return isAuthenticated ? ( // se o usuario estiver logado
    <button className={styles.signInButton} 
     type="button"
     onClick={()=> signOut()}
     >
      <FaGithub color="#04d361" /> {/*para colocar o icon do github no botão */}
      {session.data.user.name}
      {/*nome de usuário de acordo com retorno do git da pessoa */}
      <FiX color="#737380" className={styles.closeIcon} />
      {/*colocar o icon do x no botao */}
    </button>
  ) : (
    // se não estiver logado
    <button
      className={styles.signInButton}
      type="button"
      onClick={() => signIn("github")}
    >
      <FaGithub /> {/*para colocar o icon do github no botão */}
      Sign in with Github
    </button>
  )
}
