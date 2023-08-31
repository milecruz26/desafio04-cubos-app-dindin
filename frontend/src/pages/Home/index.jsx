import './styles.css'
import { Tabela } from '../../components/Tabela'
import { ResumeTable } from '../../components/ResumeTable'
import { FilterButton } from '../../components/FilterButton'
import { Header } from '../../components/Header'

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