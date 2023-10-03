import style from './Contenedor.module.css'
import VistaPrevia from '../VistaPrevisa/VistaPrevia';
import Nav from '../Nav';
import { useState } from 'react';
import axios from 'axios'

const ContenedorPadre = () => {

    
    const [characters, setCharacters] = useState([])
    const onSearch = (id) => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-luisfgt`).then(
            ({ data }) => {
                if (data.name) {
                    const characterExiste = characters.some((character) => character.id === data.id)
                    if(!characterExiste) setCharacters((oldChars) => [...oldChars, data]);
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


        return (
            <div className={style.container}>
                <Nav onSearch={onSearch}/>
                <VistaPrevia
                characters={characters}
                onClose={onClose}/>
            </div>
        )
    }

    export default ContenedorPadre;