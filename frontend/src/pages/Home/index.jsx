import Logo from '../../assets/logo.svg'
import './styles.css'
import { Tabela } from '../../components/Tabela'
import { ResumeTable } from '../../components/ResumeTable'
import { FilterButton } from '../../components/FilterButton'

export const Home = () => {
  return (
    <div className='background'>
      <header>
        <img src={Logo} alt="logo" />
      </header>

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