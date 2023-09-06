
import './styles.css'
import EditIcon from '../../assets/icons-8-editar-3.svg'
import TrashIcon from '../../assets/icons-8-lixo-1.svg'


export const Tabela = ({ transacao }) => {
  // const { data, descricao, categoria, valor } = regis
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
              <td>{transacao.descricao}</td>
              <td>{transacao.categoria}</td>
              <td>R$ {transacao.valor}</td>
              <td className='edit-icon'>
                <img src={EditIcon} alt="editar"
                  style={{ cursor: 'pointer' }} />
                <img src={TrashIcon} alt="deletar"
                  style={{ marginLeft: '13px', cursor: 'pointer' }} />
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>

  )
}