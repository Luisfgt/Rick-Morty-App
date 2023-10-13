import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ContenedorPadre from './components/ContenedorPrincipal/Contenedor';
import Nav from './components/Nav/Nav';
import Detail from './views/Detail';
import About from './views/About';
import style from './styles.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/About/Form/Form';
import FavoritesView from './views/FavoritesView';




function App() {
  
  // !Hooks
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    !access && navigate ('/')
  }, [access])

  //Credenciales Fake

  const username = 'luisft@gmail.com'
  const password = 'luis1234'

  function login(userData) {
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }else{
      alert('Credenciales incorrectas')
    }
  }

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

  const location = useLocation();

  return (
    <div className={style.contenedor}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/home' element={<ContenedorPadre {...propiedadesPadre}/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail {...propiedadesPadre}/>} />
        <Route path='/Favorites' element={<FavoritesView/>} />
        <Route path='/' element={<Form login={login}/>} />
      </Routes>
    </div>
  )
}

export default App
