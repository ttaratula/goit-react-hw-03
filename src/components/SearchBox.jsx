import css from './SearchBox.module.css'



export default function SearchBox({ filter, onFilterChange }) {
    return (
      <>
    <input
      type="text"
      value={filter}
      onChange={e => onFilterChange(e.target.value)}
      placeholder="Search contacts"
    />
      </>
    );
  }
  