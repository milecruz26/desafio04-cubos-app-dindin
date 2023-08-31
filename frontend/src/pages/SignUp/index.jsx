import Logo from '../../assets/logo.svg'
import './styles.css'

export const SignUp = () => {
  return (
    <div className='body'>
      <header className='container'>
        <img src={Logo} alt="logo" />
      </header>

      <main>

        <div className='cadastro'>
          <h3>Cadastre-se</h3>
          <form action="">
            <label htmlFor="">Nome</label>
            <input type="text" />

            <label htmlFor="">E-mail</label>
            <input type="email" />

            <label htmlFor="">Senha</label>
            <input type="password" />

            <label htmlFor="">Confirmação de senha</label>
            <input type="password" />

            <button type="button">Entrar</button>
          </form>
          <p>Já tem cadastro? <span>Clique aqui</span></p>
        </div>

      </main>
    </div>
  )
}