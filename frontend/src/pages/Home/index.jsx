import Logo from '../../assets/logo.svg'
import './styles.css'
import EditIcon from '../../assets/icons-8-editar-3.svg'
import TrashIcon from '../../assets/icons-8-lixo-1.svg'

export const Home = () => {
  return (
    <div className='background'>
      <header>
        <img src={Logo} alt="logo" />
      </header>

      <main>

        <div className='description'>
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
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/09/21</td>
                  <td>Quarta</td>
                  <td>Venda dos brigadeiros</td>
                  <td>Pix</td>
                  <td>R$ 100,00</td>
                  <td className='edit-icon'><img src={EditIcon} alt="" /></td>
                  <td className='delete-icon'><img src={TrashIcon} alt="" /></td>
                </tr>
                <tr>
                  <td>01/09/21</td>
                  <td>Quarta</td>
                  <td>Venda dos brigadeiros</td>
                  <td>Pix</td>
                  <td>R$ 100,00</td>
                  <td className='edit-icon'><img src={EditIcon} alt="" /></td>
                  <td className='delete-icon'><img src={TrashIcon} alt="" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='container'>
            <div className='resume'>
              <table className='table-resume'>
                <h2>Resumo</h2>
                <tr>
                  <th scope='row'>Entradas</th>
                  <td>R$200</td>
                </tr>

                <tr>
                  <th scope='row'>Saídas</th>
                  <td>R$70,00</td>
                </tr>
                <hr />
                <tr>
                  <th scope='row' className='saldo'>Saldo</th>
                  <td>R$529,00</td>
                </tr>
              </table>
            </div>
            <button>Adicionar Registro</button>
          </div>
        </div>
      </main>
    </div>
  )
}