import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   function handleChange(event){
      let valor = event.target.value;
      setId(valor)
   }
   function handleSearch(value){
      onSearch(value)
      setId('')
   }

   return (
      <div className={styles.slideRight}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={ () => handleSearch(id) }>Agregar</button>
      </div>
      
   );
}

