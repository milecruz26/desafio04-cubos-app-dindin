import './styles.css'
import CloseIcon from '../../assets/close-icon.svg'
import { useState } from 'react'
import { categories } from '../../categories/categories'


export const ModalRegister = ({ addRegister, setAddRegister, transacao, setTransacao }) => {
  const defaultRegister = {
    id: 0,
    valor: 0,
    data: '',
    descricao: '',
    saida: true
  }
  const [form, setForm] = useState({
    ...defaultRegister,
  })

  const [select, setSelect] = useState({ id: categories[0].id, name: categories[0].name })

  const { valor, data, descricao, saida } = form;

  const handleSubmit = (event) => {
    event.preventDefault();

  }


  const handleClickFormAddRegister = () => {
    setTransacao([...transacao,
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      valor,
      categoria: select.name,
      data,
      descricao,
      saida
    }])
    setForm({ ...defaultRegister })
    setSelect({ id: categories[0].id, name: categories[0].name })
  }

  const handleChangeForm = (event) => {

    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleChangeSelect = (event) => {
    const options = [...categories];
    const myOption = options.find((item) => item.id === Number(event.target.value))
    setSelect({ id: myOption.id, name: myOption.name })
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
                style={!form.saida ? { backgroundColor: '#3A9FF1' } : { backgroundColor: '#B9B9B9' }}
                onClick={() => setForm({ ...form, saida: false })}>
                Entrada
              </button>
              <button type="button"
                style={form.saida ? { backgroundColor: "#FF576B" } : { backgroundColor: '#B9B9B9' }}
                onClick={() => setForm({ ...form, saida: true })}>
                Saída
              </button>
            </div>

            <form onSubmit={handleSubmit}
              className='form-register'>

              <label htmlFor="valor">Valor</label>
              <input
                id='valor'
                name='valor'
                type="number"
                value={valor}
                onChange={handleChangeForm} />

              <label htmlFor="categoria">Categoria</label>
              <select
                id='categoria'
                name='categoria'
                className='categoria'
                value={select.id}
                onChange={(event) => handleChangeSelect(event)}>

                {categories.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                ))}
              </select>

              <label htmlFor="data" >Data</label>
              <input
                id='data'
                name='data'
                type="date"
                max="9999-12-31"
                value={form.data}
                onChange={(event) => handleChangeForm(event, 'data')} />

              <label htmlFor="descricao">Descrição</label>
              <input
                id='descricao'
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