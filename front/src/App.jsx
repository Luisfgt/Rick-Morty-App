import './App.css'
import { Route, Routes } from 'react-router-dom';
import ContenedorPadre from './components/ContenedorPrincipal/Contenedor';
import Nav from './components/Nav/Nav';
import Detail from './views/Detail';
import About from './views/About';
import style from './styles.module.css'
import { useState } from 'react';
import axios from 'axios';
import ContenedorPadreDetail from './components/Detail/ContenedorPadreDetail';

function App() {

  const [characters, setCharacters] = useState([])
  console.log(characters);
  const onSearch = (id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-luisfgt`).then(
      ({ data }) => {
        if (data.name) {
          const characterExiste = characters.some((character) => character.id === data.id)
          if (!characterExiste) setCharacters((oldChars) => [...oldChars, data]);
          else {
            window.alert('¡Este personaje ya está en la lista!')
          }
        } else {
          window.alert('¡Este id no existe!');
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  const propiedadesPadre = {
    characters:characters,
    onClose:onClose
  }



  return (
    <div className={style.contenedor}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/home' element={<ContenedorPadre {...propiedadesPadre}/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail {...propiedadesPadre}/>} />
      </Routes>
    </div>
  )
}

export default App
