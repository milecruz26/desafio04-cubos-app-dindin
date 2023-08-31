import './styles.css'
import CloseIcon from '../../assets/close-icon.svg'

export const ModalRegister = ({ addRegister, setAddRegister }) => {


  return (
    <>
      {addRegister &&
        <div className='container-modal'>

          <div className='container-form'>
            <div className='formulario'>

              <div className='line-title'>
                <h1>Adicionar Registro</h1>
                <img src={CloseIcon} alt="fechar"
                  style={{
                    width: '23px',
                    height: '23px',
                    cursor: 'pointer'
                  }}
                  onClick={() => setAddRegister(false)}
                />
              </div>
              <div className='buttons-register'>
                <button type="button">Entrada</button>
                <button type="button"> Saída</button>
              </div>
              <form action="">
                <label htmlFor="">Valor</label>
                <input type="text" />

                <label htmlFor="">Categora</label>
                <input type="text" />

                <label htmlFor="">Data</label>
                <input type="text" />

                <label htmlFor="">Descrição</label>
                <input type="text" />

                <button type="submit">Confirmar</button>
              </form>
            </div>
          </div>

        </div >
      }
    </>
  )
}