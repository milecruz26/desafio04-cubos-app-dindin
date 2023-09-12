import './styles.css'
import '../../global.css'

import { Tabela } from '../../components/Tabela'
import { ModalRegister } from '../../components/ModalRegister';
import { FilterButton } from '../../components/FilterButton'
import { HeaderLogo } from '../../components/HeaderLogo'

import { useState } from 'react';
import { ResumeTable } from '../../components/ResumeTable';
import { ModalEditRegister } from '../../components/ModalEditRegister';


export const Home = () => {
  const [addRegister, setAddRegister] = useState(false)
  const [editRegister, setEditRegister] = useState(false)

  const [currentRegister, setCurrentRegister] = useState([])

  const [transacao, setTransacao] = useState([])



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
              setCurrentRegister={setCurrentRegister}
              currentRegister={currentRegister}
              setEditRegister={setEditRegister}

            />
            <div className='container-resume'>
              <ResumeTable
                transacao={transacao}
              />
              <button
                onClick={() => setAddRegister(true)}
              >Adicionar Registro</button>
              <ModalRegister
                addRegister={addRegister}
                setAddRegister={setAddRegister}
                transacao={transacao}
                setTransacao={setTransacao}
              />

              <ModalEditRegister
                transacao={transacao}
                setTransacao={setTransacao}
                editRegister={editRegister}
                setEditRegister={setEditRegister}
                currentRegister={currentRegister}
                setCurrentRegister={setCurrentRegister}
              />

            </div>
          </div>
        </div>
      </main >
    </div >
  )
}