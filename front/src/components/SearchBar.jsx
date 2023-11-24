import { useState } from "react";
import style from './Nav/Nav.module.css'
const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
      validarNumero(event)
      errorNumerico(event)

   }
   const validarNumero = (event) => {
      var numerosValidos = event.target.value.replace(/[^0-9]/g, '')
      event.target.value = numerosValidos
   }

   const handleSearch = () => {
      onSearch(id);
      setId(''); // Establece el estado del input a una cadena vacía
   };

   const handlesKeyPress = (event) => {
      if (event.key === 'Enter') {
         handleSearch();
      }
   }

   return (
      <div className={style.searchBar}>
         <input onKeyDown={handlesKeyPress} value={id} placeholder="Introduce un número del 1 al 826" className={style.input} type='search' onChange={handleChange} />
         <div className={style.buttonContain}>
            <div className={style.buttonAdd} onClick={handleSearch}></div>
         </div>
      </div >
   );
}

export default SearchBar