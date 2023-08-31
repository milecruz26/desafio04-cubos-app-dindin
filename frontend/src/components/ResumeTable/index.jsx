import './styles.css'


export const ResumeTable = () => {
  return (

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

  )
}