import './styles.css'
import Logo from '../../assets/logo.svg'
import ProfileIcon from '../../assets/profile-icon.svg'
import ExitIcon from '../../assets/logout-icon.svg'


export const Header = () => {
  return (

    <header>
      <img src={Logo} alt="logo" />
      <div className='profile-area'>
        <img src={ProfileIcon} alt="Perfil" />
        <strong>Jamile</strong>
        <img src={ExitIcon} alt="Sair" />
      </div>
    </header>

  )
}