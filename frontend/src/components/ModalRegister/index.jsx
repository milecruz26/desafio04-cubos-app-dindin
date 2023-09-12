import './styles.css'
import CloseIcon from '../../assets/close-icon.svg'
import { useState } from 'react'


export const ModalRegister = ({ addRegister, setAddRegister, transacao, setTransacao }) => {
  const defaultRegister = {
    id: 0,
    valor: 0,
    categoria: '',
    data: '',
    descricao: '',
    saida: false
  }
  const [form, setForm] = useState({
    ...defaultRegister,
  })

  const { valor, categoria, data, descricao, saida } = form;


  //funcao de submit com preventDefault:
  const handleSubmit = (event) => {
    event.preventDefault();

  }

  //funcao de click para mudar o setTransacao:

  const handleClickFormAddRegister = () => {
    setTransacao([...transacao,
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      valor,
      categoria,
      data,
      descricao,
      saida
    }])
    setForm({ ...defaultRegister })
    console.log(transacao)
  }

  //funcao de onChange do formulario:


  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
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
                type="button"
                style={form.saida ? { backgroundColor: '#B9B9B9' } : { backgroundColor: '#3A9FF1' }}
                onClick={() => setForm({ ...form, saida: false })}>
                Entrada
              </button>
              <button type="button"
                style={!form.saida ? { backgroundColor: '#B9B9B9' } : { backgroundColor: "#FF576B" }}
                onClick={() => setForm({ ...form, saida: true })}>
                Saída
              </button>
            </div>

            <form onSubmit={handleSubmit}
              className='form-register'>

              <label htmlFor="valor">Valor</label>
              <input
                name='valor'
                type="number"
                value={valor}
                onChange={handleChangeForm} />

              <label htmlFor="categoria">Categoria</label>
              <select
                name='categoria'
                className='categoria'
                value={form.categoria}
                onChange={(event) => handleChangeForm(event, 'categoria')}>
                <option
                  value="Alimentação">
                  Alimentação
                </option>

                <option
                  value="Assinaturas">
                  Assinaturas e Serviços
                </option>

                <option
                  value="Casa">
                  Casa
                </option>

                <option
                  value="Compras">
                  Compras
                </option>

                <option
                  value="Cuidados Pessoais">
                  Cuidados pessoais
                </option>

                <option
                  value="Educação">
                  Educação
                </option>
              </select>

              <label htmlFor="data" >Data</label>
              <input
                name='data'
                type="date"
                value={form.data}
                onChange={(event) => handleChangeForm(event, 'data')} />

              <label htmlFor="descricao">Descrição</label>
              <input
                name='descricao'
                type="text"
                value={form.descricao}
                onChange={(event) => handleChangeForm(event, 'descricao')} />

              <button
                type='submit'
                onClick={handleClickFormAddRegister}
              >
                Confirmar
              </button>
            </form>
          </div>

        </div >
      }
    </>
  )
}