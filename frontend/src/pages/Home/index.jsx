import './styles.css'
import '../../global.css'

import { Tabela } from '../../components/Tabela'
import { ModalRegister } from '../../components/ModalRegister';
// import { ResumeTable } from '../../components/ResumeTable'
import { FilterButton } from '../../components/FilterButton'
import { HeaderLogo } from '../../components/HeaderLogo'

import { useState } from 'react';

export const Home = () => {
  const [addRegister, setAddRegister] = useState(false)
  const [transacao, setTransacao] = useState([])

  return (

    <div className='background'>

      <HeaderLogo isLoggedIn={true} />

      <main className='main-home'>
        <div className='container-description'>
          <FilterButton />

          <div className='description'>
            {/* {transacao.map((regis) => (
              <Tabela
                key={regis.id}
                regis={regis}
              />

            )
            )} */}

            <Tabela transacao={transacao} />
            <div className='container-resume'>
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
              <button
                onClick={() => setAddRegister(true)}
              >Adicionar Registro</button>
              <ModalRegister
                addRegister={addRegister}
                setAddRegister={setAddRegister}
                transacao={transacao}
                setTransacao={setTransacao}
              />
            </div>
            {/* <ResumeTable /> */}
          </div>
        </div>
      </main >
    </div >
  )
}