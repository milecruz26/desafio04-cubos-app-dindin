import './styles.css'

export const SignUpModal = () => {
  return (
    <div className='cadastro'>
      <h3>Cadastre-se</h3>
      <form action="" className='form-signup'>
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
    </div>)
}