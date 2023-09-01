import '../../global.css'
import './styles.css'
import { HeaderLogo } from '../../components/HeaderLogo'

export const Login = () => {
  return (
    <div className='body-login-signup'>

      <HeaderLogo />

      <main>

        <div className='texto-principal'>
          <h1>Controle suas <strong>finanças</strong>, sem planilha chata.</h1>
          <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.</p>
          <button>Cadastre-se</button>
        </div>

        <div className='area-login'>
          <h3>Login</h3>
          <form action="">
            <label htmlFor="">E-mail</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <button type="button">Entrar</button>
          </form>
        </div>

      </main>
    </div>
  )
}