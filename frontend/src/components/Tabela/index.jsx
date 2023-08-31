
import './styles.css'
import EditIcon from '../../assets/icons-8-editar-3.svg'
import TrashIcon from '../../assets/icons-8-lixo-1.svg'


export const Tabela = () => {
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
          <tr>
            <td>01/09/21</td>
            <td>Quarta</td>
            <td>Venda dos brigadeiros</td>
            <td>Pix</td>
            <td>R$ 100,00</td>
            <td className='edit-icon'>
              <img src={EditIcon} alt="editar"
                style={{ cursor: 'pointer' }} />
              <img src={TrashIcon} alt="deletar"
                style={{ marginLeft: '13px', cursor: 'pointer' }} />
            </td>
          </tr>
          <tr>
            <td>01/09/21</td>
            <td>Quarta</td>
            <td>Venda dos brigadeiros</td>
            <td>Pix</td>
            <td>R$ 100,00</td>
            <td className='edit-icon'>
              <img src={EditIcon} alt="editar"
                style={{ cursor: 'pointer' }} />
              <img src={TrashIcon} alt="deletar"
                style={{ marginLeft: '13px', cursor: 'pointer' }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}