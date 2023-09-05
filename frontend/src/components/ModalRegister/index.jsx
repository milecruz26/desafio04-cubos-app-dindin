import './styles.css'
import CloseIcon from '../../assets/close-icon.svg'
import { useState } from 'react'

export const ModalRegister = ({ addRegister, setAddRegister }) => {
  const [click, setClick] = useState(false)
  const [registro, setRegistro] = useState({
    valor: 0,
    categoria: '',
    data: '',
    descricao: ''
  })


  const handleClickButtonRegister = () => {
    if (!click) {
      return setClick(true)

    }
    if (click) {
      return setClick(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if ({ ...registro }) {
      return console.log({ ...registro })
    }
  }

  const handleChangeForm = (event, campo) => {
    const value = event.target.value
    setRegistro({ ...registro, [campo]: value })

  }


  return (
    <>
      {addRegister &&
        <div className='container-modal'>

          <div className='container-form'>
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
              <button
                type="button" style={click ? { backgroundColor: '#B9B9B9' } : { backgroundColor: '#3A9FF1' }}
                onClick={handleClickButtonRegister}>
                Entrada
              </button>
              <button type="button"
                style={!click ? { backgroundColor: '#B9B9B9' } : { backgroundColor: "#FF576B" }}
                onClick={handleClickButtonRegister}>
                Saída
              </button>
            </div>

            <form onSubmit={handleSubmit}
              className='form-register'>
              <label htmlFor="valor">Valor</label>
              <input
                type="number"
                id='valor'
                value={registro.valor}
                onChange={(event) => handleChangeForm(event, 'valor')} />

              <label htmlFor="categoria">Categoria</label>
              <select
                id='categoria'
                className='categoria'
                value={registro.categoria}
                onChange={(event) => handleChangeForm(event, 'categoria')}>
                <option
                  value="alimentacao">
                  Alimentação</option>

                <option
                  value="assinaturas">
                  Assinaturas e Serviços</option>

                <option
                  value="casa">
                  Casa</option>

                <option
                  value="compras">
                  Compras</option>

                <option
                  value="cuidados_pessoais">
                  Cuidados pessoais</option>

                <option
                  value="educacao">
                  Educação</option>
              </select>

              <label htmlFor="data" >Data</label>
              <input
                id='data'
                type="text"
                value={registro.data} onChange={(event) => handleChangeForm(event, 'data')} />

              <label htmlFor="descricao">Descrição</label>
              <input
                id='descricao'
                type="text"
                value={registro.descricao} onChange={(event) => handleChangeForm(event, 'descricao')} />

              <button type="submit">Confirmar</button>
            </form>
          </div>

        </div >
      }
    </>
  )
}