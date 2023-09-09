
import './styles.css'
import '../../../src/global.css'
import EditIcon from '../../assets/icons-8-editar-3.svg'
import TrashIcon from '../../assets/icons-8-lixo-1.svg'
import { useEffect, useState } from 'react'



export const Tabela = ({ transacao, setTransacao }) => {
  const [idTransacao, setIdTransacao] = useState(null)

  const handleDeleteItem = (event) => {
    setIdTransacao(event)
  };

  useEffect(() => {
    if (idTransacao !== null) {
      setTransacao(transacao.filter((transacao) => transacao.id !== idTransacao
      ));
      setIdTransacao(null)
    }
  }, [idTransacao, setTransacao, transacao])

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
              <td>{transacao.data}</td>
              <td>Quarta</td>
              <td className='table-description'>{transacao.descricao}</td>
              <td className='table-category'>{transacao.categoria}</td>
              <td className='table-value'
                style={transacao.clickEntraceExit ? { color: '#FA8C10' } : { color: '#7B61FF' }}
              >R$ {transacao.valor}</td>
              <td className='edit-icon'>
                <img src={EditIcon} alt="editar"
                  style={{ cursor: 'pointer' }} />
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