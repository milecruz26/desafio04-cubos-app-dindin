import './styles.css'
import Logo from '../../assets/logo.svg'
import ProfileIcon from '../../assets/profile-icon.svg'
import ExitIcon from '../../assets/logout-icon.svg'
import { ModalPerfilEdit } from '../ModalPerfilEdit'
import { useState } from 'react'


export const Header = () => {
  const [editPerfil, setEditPerfil] = useState(false)
  return (

    <header>
      <img src={Logo} alt="logo" />
      <div className='profile-area'>
        <img src={ProfileIcon}
          alt="Perfil"
          onClick={() => setEditPerfil(true)}
        />
        <strong>Jamile</strong>
        <img src={ExitIcon} alt="Sair" />
      </div>
      <ModalPerfilEdit
        editPerfil={editPerfil}
        setEditPerfil={setEditPerfil} />
    </header>

  )
}