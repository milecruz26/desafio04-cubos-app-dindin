import './styles.css'
import FilterIcon from '../../assets/icons-8-filtro-481.svg'


export const FilterButton = () => {
  return (
    <div className='filter-button'>
      <img src={FilterIcon} alt="filtro" />
      <strong>Filtrar</strong>
    </div>

  )
}