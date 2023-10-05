import style from './Contenedor.module.css'
import VistaPrevia from '../VistaPrevisa/VistaPrevia';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import axios from 'axios'
import Reproductor from '../reproductor/reproductor';

const ContenedorPadre = ({characters, onClose}) => {
    console.log(characters);
    return (
        <>
            <div className={style.containerPadre}>
               
                <div className={style.container}>
                    <div className={style.contenedorTarjetas}>
                        <div className={style.tarjetas}>
                            <VistaPrevia
                                characters={characters}
                                onClose={onClose} />
                        </div>
                    </div>
                    <div className={style.containerTv}>
                        <Reproductor />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContenedorPadre;