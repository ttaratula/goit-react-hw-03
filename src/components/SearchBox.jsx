import css from './SearchBox.module.css'



export default function SearchBox({ filter, onFilterChange }) {
    return (

<>
  <p className={css.label}>Find contacts by name</p>
  <input
    className={css.searchbox}
    type="text"
    value={filter}
    onChange={e => onFilterChange(e.target.value)}
   
  />
</>


    );
  }
  