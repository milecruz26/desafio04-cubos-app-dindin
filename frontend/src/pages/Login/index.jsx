import Logo from '../../assets/logo.svg'
import './styles.css'

export const Login = () => {
  return (
    <div className='body'>
      <header className='container'>
        <img src={Logo} alt="logo" />
      </header>

      <main>

        <div className='texto-principal'>
          <h1>Controle suas <span>finanças</span>, sem planilha chata.</h1>
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