import './styles.css'
import '../../global.css'
import Logo from '../../assets/logo.svg'
import ProfileIcon from '../../assets/profile-icon.svg'
import ExitIcon from '../../assets/logout-icon.svg'
import { ModalPerfilEdit } from '../ModalPerfilEdit'
import { getItem, removeItem } from '../../localStorage/localStorage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




export const HeaderLogo = ({ isLoggedIn }) => {
  const [editPerfil, setEditPerfil] = useState(false);
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate()
  const name = getItem('name')
  const user = ['name', 'password', 'email']

  useEffect(() => {
    if (logout) {
      removeItem('user')
      user.forEach((key) => {
        removeItem(key);
      });
      return navigate('/')
    }
  }, [logout])

  return (

    <header>
      <img src={Logo} alt="logo" style={{ width: '169px', height: '45px' }} />

      {isLoggedIn ? <div className='profile-area'>
        <img src={ProfileIcon}
          alt="Perfil"
          onClick={() => setEditPerfil(true)}
        />
        <strong>{name}</strong>
        <img
          src={ExitIcon} alt="Sair"
          onClick={() => setLogout(true)}
        />
      </div> : null}


      <ModalPerfilEdit
        editPerfil={editPerfil}
        setEditPerfil={setEditPerfil} />

    </header>

  )
}