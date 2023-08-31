import Logo from '../../assets/logo.svg'
import './styles.css'

export const Home = () => {
  return (
    <div className='body'>
      <header className='container'>
        <img src={Logo} alt="logo" />
      </header>

      <main>


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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/09/21</td>
                <td>Quarta</td>
                <td>Venda dos brigadeiros</td>
                <td>Pix</td>
                <td>R$ 100,00</td>
              </tr>
              <tr>
                <td>01/09/21</td>
                <td>Quarta</td>
                <td>Venda dos brigadeiros</td>
                <td>Pix</td>
                <td>R$ 100,00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='resume'>
          resume
        </div>
      </main>
    </div>
  )
}