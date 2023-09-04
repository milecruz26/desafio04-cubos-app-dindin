import '../../global.css'
import './styles.css'
import { HeaderLogo } from '../../components/HeaderLogo'
import { SignUpModal } from '../../components/SignUpModal'

export const SignUp = () => {
  return (
    <div className='body-login-signup'>

      <HeaderLogo isLoggedIn={false} />

      <main>
        <SignUpModal />
      </main>
    </div>
  )
}