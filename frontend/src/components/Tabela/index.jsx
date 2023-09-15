
import './styles.css'
import '../../../src/global.css'
import EditIcon from '../../assets/icons-8-editar-3.svg'
import TrashIcon from '../../assets/icons-8-lixo-1.svg'
import Triangulo from '../../assets/triangulo.svg'
import { useEffect, useState } from 'react'



export const Tabela = ({ transacao, setTransacao, setEditRegister, setCurrentRegister }) => {
  const [idTransacao, setIdTransacao] = useState(null)
  const [idEditTransacao, setIdEditTransacao] = useState(null)

  const handleData = data => {
    const date = new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    return date
  }

  const handleGetDay = data => {

    const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'sábado', 'Domingo'];
    const date = new Date(data);

    let day = date.getDay();

    return daysOfWeek[day];
  };

  const handleDeleteItem = (event) => {
    setIdTransacao(event)
  };

  const handleEditRegister = (event) => {
    setIdEditTransacao(event);
    setEditRegister(true);
  }

  useEffect(() => {
    if (idTransacao !== null) {
      setTransacao(transacao.filter((transacao) => transacao.id !== idTransacao
      ));
      setIdTransacao(null)
    }

    if (idEditTransacao !== null) {
      setCurrentRegister(transacao.find((transacao) => transacao.id === idEditTransacao));
    }

  }, [idTransacao, setTransacao, setCurrentRegister, idEditTransacao])

  return (

    <div className='container-table'>
      <table>
        <thead>
          <tr>
            <th scope='col'
              className='data-th-txt'>
              Data
              <img
                src={Triangulo}
                alt='icone reorganizar por data' />
            </th>

            <th>Dia da Semana</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transacao.map((transacao) => (
            <tr key={transacao.id}>
              <td>{handleData(transacao.data)}</td>
              <td>{handleGetDay(transacao.data)}</td>
              <td className='table-description'>{transacao.descricao}</td>
              <td className='table-category'>{transacao.categoria}</td>
              <td
                className='col-value'
                style={!transacao.saida ? { color: '#7B61FF' } : { color: '#FA8C10' }}>
                R$ {transacao.valor}
              </td>
              <td className='edit-icon'>
                <img src={EditIcon} alt="ícone de editar"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleEditRegister(transacao.id)}
                />
                <img src={TrashIcon} alt="ícone de deletar"
                  style={{ marginLeft: '13px', cursor: 'pointer' }}
                  onClick={() => handleDeleteItem(transacao.id)} />
              </td>
            </tr>

          ))}

        </tbody>
      </table>
    </div>

  )
}