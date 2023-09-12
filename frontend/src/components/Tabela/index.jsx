
import './styles.css'
import '../../../src/global.css'
import EditIcon from '../../assets/icons-8-editar-3.svg'
import TrashIcon from '../../assets/icons-8-lixo-1.svg'
import { useEffect, useState } from 'react'



export const Tabela = ({ transacao, setTransacao, setEditRegister, currentRegister, setCurrentRegister }) => {
  const [idTransacao, setIdTransacao] = useState(null)

  const handleData = data => {
    const date = new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    return date
  }


  const handleGetDay = data => {

    try {

      const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'sábado', 'Domingo'];
      const date = new Date(data);

      let day = date.getDay();

      return daysOfWeek[day];

    } catch (error) {
      return error.message;
    }
  };

  const handleDeleteItem = (event) => {
    setIdTransacao(event)
    if (idTransacao !== null) {
      setTransacao(transacao.filter((transacao) => transacao.id !== idTransacao
      ));
      setIdTransacao(null)
    }
  };

  const handleEditRegister = (event) => {
    setIdTransacao(event);
    setEditRegister(true);

    if (idTransacao !== null) {
      setCurrentRegister(transacao.find((t) => t.id === event));
    }

  }

  // useEffect(() => {
  //   if (idTransacao !== null) {
  //     setTransacao(transacao.filter((transacao) => transacao.id !== idTransacao
  //     ));
  //     setIdTransacao(null)
  //   }


  // }, [idTransacao, setTransacao])

  return (

    <div className='table'>
      <table>
        <colgroup>
          <col className='datas' />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope='col'>Data</th>
            <th>Dia da Semana</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th style={{ width: '5rem' }}></th>
            <th style={{ width: '5rem' }}></th>
          </tr>
        </thead>
        <tbody>
          {transacao.map((transacao) => (
            <tr key={transacao.id}>
              <td>{handleData(transacao.data)}</td>
              <td>{handleGetDay(transacao.data)}</td>
              <td className='table-description'>{transacao.descricao}</td>
              <td className='table-category'>{transacao.categoria}</td>
              <td className='table-value'
                style={transacao.saida ? { color: '#FA8C10' } : { color: '#7B61FF' }}
              >R$ {transacao.valor}</td>
              <td className='edit-icon'>
                <img src={EditIcon} alt="editar"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleEditRegister(transacao.id)}
                />
                <img src={TrashIcon} alt="deletar"
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