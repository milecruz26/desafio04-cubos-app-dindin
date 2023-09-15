import { useState, useEffect } from 'react';
import './styles.css'


export const ResumeTable = ({ transacao }) => {
  const [entrada, setEntrada] = useState(0);
  const [exit, setExit] = useState(0);
  const saldo = (entrada - exit);


  useEffect(() => {
    let totalEntrada = 0
    let totalSaida = 0

    transacao.forEach(transacao => {
      if (!transacao.saida) {
        totalEntrada += Number(transacao.valor);
      }
      if (transacao.saida) {
        totalSaida += Number(transacao.valor);
      }
    });
    setEntrada(totalEntrada.toFixed(2));
    setExit(totalSaida.toFixed(2));
  }, [transacao])



  return (

    <div className='resume'>
      <table className='table-resume'>
        <h2>Resumo</h2>
        <tr>
          <th scope='row'>Entradas</th>
          <td className='entrace'>R${entrada}</td>
        </tr>

        <tr>
          <th scope='row' >Saídas</th>
          <td className='exit'>R$ {exit}</td>
        </tr>
        <hr />
        <tr>
          <th scope='row' className='balance-txt'>Saldo</th>
          <td className='balance'>R${saldo.toFixed(2)}</td>
        </tr>
      </table>
    </div>

  )
}