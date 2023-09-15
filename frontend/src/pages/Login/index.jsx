import '../../global.css'
import './styles.css'
import { HeaderLogo } from '../../components/HeaderLogo'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getItem } from '../../localStorage/localStorage'


export const Login = ({ setIsAuthenticated }) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [erro, setErro] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    setErro('');

    if (!form.email) {
      setErro('E-mail precisa ser fornecido')
      return
    }
    if (!form.password) {
      setErro('Senha precisa ser fornecida')
      return
    }
    if (form.email === getItem('email') && form.password === getItem('password')) {
      setIsAuthenticated(true)
      navigate("/home")
    } else {
      alert('Usuário e senha incorretos')
    }
  }

  const handleChangeForm = (event) => {
    const value = event.target.value

    setForm({ ...form, [event.target.id]: value })
  }

  return (
    <div className='body-login-signup'>

      <HeaderLogo isLoggedIn={false} />

      <main>

        <div className='texto-principal'>
          <h1>Controle suas <strong>finanças</strong>, sem planilha chata.</h1>
          <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.</p>
          <button
            onClick={() => navigate('/sign-up')}
            style={{ cursor: 'pointer' }}
          >
            Cadastre-se
          </button>
        </div>

        <div className='area-login'>
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              id='email'
              type="text"
              value={form.email}
              onChange={(event) => handleChangeForm(event)}
            />

            <label htmlFor="password">Password</label>
            <input
              id='password'
              type="password"
              value={form.password}
              onChange={(event) => handleChangeForm(event)}
            />

            {erro && <span className='erroMensagem'>{erro}</span>}

            <button type='submit'>Entrar</button>
          </form>
        </div>

      </main>
    </div>
  )
}