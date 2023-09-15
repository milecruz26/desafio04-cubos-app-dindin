import './styles.css'
import CloseIcon from '../../assets/close-icon.svg'

export const ModalPerfilEdit = ({ editPerfil, setEditPerfil }) => {


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
            <form action="" className='form-edit'>
              <label htmlFor="">Nome</label>
              <input type="text" />

              <label htmlFor="">E-mail</label>
              <input type="email" />

              <label htmlFor="">Senha</label>
              <input type="password" />

              <label htmlFor="">Confirmação de senha</label>
              <input type="password" />

              <button type="submit">Confirmar</button>
            </form>
          </div>

        </div >
      }
    </>
  )
}