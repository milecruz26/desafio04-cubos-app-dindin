import './styles.css'
import CloseIcon from '../../assets/close-icon.svg'
import { useState } from 'react'


export const ModalRegister = ({ addRegister, setAddRegister, transacao, setTransacao }) => {
  const [clickEntraceExit, setclickEntraceExit] = useState(false)
  const [nextId, setNextId] = useState(1);
  const [registro, setRegistro] = useState({
    valor: 0,
    categoria: '',
    data: '',
    descricao: '',
  })


  const handleClickEntraceExitColor = () => {
    setclickEntraceExit(!clickEntraceExit);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registro)

    setNextId(nextId + 1);
    const registroComId = {
      ...registro,
      id: nextId,
    };


    setTransacao((prevTransacao) => [...prevTransacao, registroComId])

    setRegistro({
      valor: 0,
      categoria: '',
      data: '',
      descricao: '',
    })
    console.log(transacao)
  }

  const handleChangeForm = (event) => {
    setRegistro({ ...registro, [event.target.name]: event.target.value })
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
                type="button" style={clickEntraceExit ? { backgroundColor: '#B9B9B9' } : { backgroundColor: '#3A9FF1' }}
                onClick={handleClickEntraceExitColor}>
                Entrada
              </button>
              <button type="button"
                style={!clickEntraceExit ? { backgroundColor: '#B9B9B9' } : { backgroundColor: "#FF576B" }}
                onClick={handleClickEntraceExitColor}>
                Saída
              </button>
            </div>

            <form onSubmit={handleSubmit}
              className='form-register'>

              <label htmlFor="valor">Valor</label>
              <input
                name='valor'
                type="number"
                value={registro.valor}
                onChange={(event) => handleChangeForm(event, 'valor')} />

              <label htmlFor="categoria">Categoria</label>
              <select
                name='categoria'
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
                name='data'
                type="text"
                value={registro.data} onChange={(event) => handleChangeForm(event, 'data')} />

              <label htmlFor="descricao">Descrição</label>
              <input
                name='descricao'
                type="text"
                value={registro.descricao} onChange={(event) => handleChangeForm(event, 'descricao')} />

              <button
              >Confirmar</button>
            </form>
          </div>

        </div >
      }
    </>
  )
}