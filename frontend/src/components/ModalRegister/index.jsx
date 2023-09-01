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
                <button type="button" style={{ backgroundColor: '#3A9FF1' }}>
                  Entrada
                </button>
                <button type="button" style={{
                  backgroundColor: "#FF576B",
                }}>
                  Saída
                </button>
              </div>
              <form action="" className='form-register'>
                <label htmlFor="">Valor</label>
                <input type="text" />

                <label htmlFor="categoria">Categoria</label>
                <select className='categoria'>
                  <option value="alimentacao">Alimentação</option>
                  <option value="assinaturas">Assinaturas e Serviços</option>
                  <option value="casa">Casa</option>
                  <option value="compras">Compras</option>
                  <option value="cuidados_pessoais">Cuidados pessoais</option>
                  <option value="educacao">Educação</option>
                </select>

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