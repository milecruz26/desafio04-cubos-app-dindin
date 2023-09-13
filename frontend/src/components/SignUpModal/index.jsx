import './styles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setItem } from '../../localStorage/localStorage'


export const SignUpModal = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const { name, email, password } = form


  const handleSubmitForm = (event) => {
    event.preventDefault()
    if (form) {
      setItem('name', name);
      setItem('email', email);
      setItem('password', password);
      navigate('/login')

    }
  }
  const handleChangeForm = (event) => {
    const value = event.target.value
    setForm({ ...form, [event.target.id]: value })
  }

  const handleClickSubmit = () => {
    if (form.password !== form.passwordConfirm) {
      alert('As senhas digitas não coincidem')
    }
    if (form.password.length < 8) {
      alert('A senha deve possuir mais do que 8 caracteres')
    }
  }


  return (

    <div className='cadastro'>

      <h3>Cadastre-se</h3>
      <form className='form-signup' onSubmit={handleSubmitForm}>

        <label htmlFor="name">Nome</label>
        <input
          id='name'
          value={form.name}
          type="text"
          onChange={(event) => handleChangeForm(event)}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id='email'
          value={form.email}
          type="email"
          onChange={(event) => handleChangeForm(event)}
          required
        />

        <label htmlFor="password">Senha</label>
        <input
          id='password'
          value={form.password}
          type="password"
          onChange={(event) => handleChangeForm(event)}
          required
        />

        <label htmlFor="passwordConfirm">Confirmação de senha</label>
        <input
          id='passwordConfirm'
          value={form.passwordConfirm}
          type="password"
          onChange={(event) => handleChangeForm(event)}
          required
        />

        <button type="submit" onClick={handleClickSubmit}>Cadastrar</button>
      </form>
      <p>Já tem cadastro? <span onClick={() => navigate('/login')}>Clique aqui</span></p>

    </div>

  )
}