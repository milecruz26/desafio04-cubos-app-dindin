import '../ModalRegister/styles.css'
import '../../global.css'

import CloseIcon from '../../assets/close-icon.svg'
import { useEffect, useState } from 'react'
import { categories } from '../../categories/categories'


export const ModalEditRegister = ({ editRegister, setEditRegister, transacao, setTransacao, currentRegister }) => {
  const defaultRegister = {
    id: 0,
    valor: 0,
    data: '',
    descricao: '',
    saida: false
  }

  const [form, setForm] = useState({
    ...currentRegister,
  })
  const [select, setSelect] = useState({ id: categories[0].id, name: categories[0].name })

  const { valor, categoria, data, descricao, saida } = form;

  useEffect(() => {
    if (editRegister && currentRegister.id) {

      const transacaoToEdition = transacao.find((transacoes) => {
        return transacoes.id === currentRegister.id
      }
      )
      return setForm({
        valor: transacaoToEdition.valor,
        categoria: transacaoToEdition.categoria,
        data: transacaoToEdition.data,
        descricao: transacaoToEdition.descricao,
        saida: transacaoToEdition.saida
      })
    }
    setForm({ ...defaultRegister })

  }, [editRegister, currentRegister, transacao])

  const handleSubmit = (event) => {
    event.preventDefault();

  }


  const handleClickEditRegister = () => {

    const updatedTransaction = {
      ...currentRegister,
      valor,
      categoria,
      data,
      descricao,
      saida,
    };

    const newTransaction = transacao.map((transaction) => {
      if (transaction.id === currentRegister.id) {
        return updatedTransaction;
      }
      return transaction;
    });

    setTransacao(newTransaction);
    setEditRegister(false);

  }


  const handleChangeSelect = (event) => {
    const selectedCategoryId = Number(event.target.value);
    const selectedCategory = categories.find((item) => item.id === selectedCategoryId);

    setSelect({ id: selectedCategoryId, name: selectedCategory.name });
    setForm({ ...form, categoria: selectedCategory.name });
  }


  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <>
      {editRegister &&
        <div className='container-modal'>

          <div className='container-form'>
            <div className='line-title'>
              <h1>Editar Registro</h1>
              <img src={CloseIcon} alt="fechar"
                style={{
                  width: '23px',
                  height: '23px',
                  cursor: 'pointer'
                }}
                onClick={() => setEditRegister(false)}
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
                type='button'
                onClick={handleClickEditRegister}
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