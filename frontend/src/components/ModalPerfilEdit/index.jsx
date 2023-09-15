import './styles.css'
import CloseIcon from '../../assets/close-icon.svg'
import { getItem } from '../../localStorage/localStorage'
import { setItem } from '../../localStorage/localStorage'
import { useState } from 'react'



export const ModalPerfilEdit = ({ editPerfil, setEditPerfil }) => {

  const user = ['name', 'email', 'password', 'passwordConfirm']
  const userData = {}
  user.forEach((key) => {
    userData[key] = getItem(key)
  })

  const [form, setForm] = useState({
    name: userData.name,
    email: userData.email,
    password: userData.password,
    passwordConfirm: userData.passwordConfirm
  })
  const { name, email, password, passwordConfirm } = form

  setItem

  const handleSubmitForm = (event) => {
    event.preventDefault()
    if (form) {
      setItem('name', name);
      setItem('email', email);
      setItem('password', password);
      setItem('passwordConfirm', passwordConfirm);
      setEditPerfil(false)
    }
  }
  const handleClickSubmit = () => {
    if (form.password !== form.passwordConfirm) {
      alert('As senhas digitas não coincidem')
      return
    }
    if (form.password.length < 8) {
      alert('A senha deve possuir mais do que 8 caracteres')
      return
    }
  }

  const handleChangeForm = (event) => {
    const value = event.target.value
    setForm({ ...form, [event.target.id]: value })
  }
  return (
    <>
      {editPerfil &&
        <div className='container-background'>

          <div className='container-form-edit'>
            <div className='line-title'>
              <h1>Editar Perfil</h1>
              <img src={CloseIcon} alt="fechar"
                style={{
                  width: '23px',
                  height: '23px',
                  cursor: 'pointer'
                }}
                onClick={() => setEditPerfil(false)}
              />
            </div>
            <form className='form-edit' onSubmit={handleSubmitForm}>
              <label htmlFor="name">Nome</label>
              <input
                id='name'
                value={form.name}
                type="text"
                onChange={(event) => handleChangeForm(event)}
              />

              <label htmlFor="email">E-mail</label>
              <input
                id='email'
                value={form.email}
                type="email"
                onChange={(event) => handleChangeForm(event)} />

              <label htmlFor="password">Senha</label>
              <input
                id='password'
                value={form.password}
                type="password"
                onChange={(event) => handleChangeForm(event)} />

              <label htmlFor="passwordConfirm">Confirmação de senha</label>
              <input
                id='passwordConfirm'
                value={form.passwordConfirm}
                type="password"
                onChange={(event) => handleChangeForm(event)} />

              <button type="submit" onClick={handleClickSubmit}>Confirmar</button>
            </form>
          </div>

        </div >
      }
    </>
  )
}