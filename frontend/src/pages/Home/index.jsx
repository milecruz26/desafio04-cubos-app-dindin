import './styles.css'
import { Tabela } from '../../components/Tabela'
import { ResumeTable } from '../../components/ResumeTable'
import { FilterButton } from '../../components/FilterButton'
import { Header } from '../../components/Header'
import { ModalRegister } from '../../components/ModalRegister'
import { useState } from 'react'

export const Home = () => {


  return (

    <div className='background'>

      <Header />

      <main>
        <div className='container-description'>
          <FilterButton />

          <div className='description'>
            <Tabela />
            <ResumeTable />
          </div>
        </div>
      </main >
    </div >
  )
}