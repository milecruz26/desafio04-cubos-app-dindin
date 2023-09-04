import './styles.css'
import '../../global.css'
import { Tabela } from '../../components/Tabela'
import { ResumeTable } from '../../components/ResumeTable'
import { FilterButton } from '../../components/FilterButton'
import { HeaderLogo } from '../../components/HeaderLogo'

export const Home = () => {


  return (

    <div className='background'>

      <HeaderLogo isLoggedIn={true} />

      <main className='main-home'>
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