import './styles.css'
import '../../global.css'

import { Tabela } from '../../components/Tabela'
import { ModalRegister } from '../../components/ModalRegister';
import { FilterButton } from '../../components/FilterButton'
import { HeaderLogo } from '../../components/HeaderLogo'

import { useState } from 'react';
import { ResumeTable } from '../../components/ResumeTable';


export const Home = () => {
  const [addRegister, setAddRegister] = useState(false)
  const [transacao, setTransacao] = useState([])



  // Codigo correto para somar, nao apagar:
  // const entrada = transacao.reduce((acumulador, valores) => acumulador + Number(valores.valor), 0);


  return (

    <div className='background'>

      <HeaderLogo isLoggedIn={true} />

      <main className='main-home'>
        <div className='container-description'>
          <FilterButton />

          <div className='description'>
            <Tabela
              transacao={transacao}
              setTransacao={setTransacao}

            />
            <div className='container-resume'>
              <ResumeTable
                transacao={transacao}
              />
              {/* <div className='resume'>
                <table className='table-resume'>
                  <h2>Resumo</h2>
                  <tr>
                    <th scope='row'>Entradas</th>
                    <td className='entrace'>R$0</td>
                  </tr>

                  <tr>
                    <th scope='row' >Saídas</th>
                    <td className='exit'>R$ 0</td>
                  </tr>
                  <hr />
                  <tr>
                    <th scope='row' className='balance-txt'>Saldo</th>
                    <td className='balance'>R$0</td>
                  </tr>
                </table>
              </div> */}
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
          </div>
        </div>
      </main >
    </div >
  )
}