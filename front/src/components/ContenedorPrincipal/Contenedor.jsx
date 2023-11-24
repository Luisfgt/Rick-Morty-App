import style from './Contenedor.module.css'
import VistaPrevia from '../VistaPrevisa/VistaPrevia';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import axios from 'axios'
import Reproductor from '../reproductor/reproductor';
import TransitionComponent from '../TransitionComponent/transitionComponent';
import reproductorTv from '../reproductor/TV.png'
import Loader from '../Loader/Loader';


const ContenedorPadre = ({ characters, onClose, loading, loadChar}) => {
    console.log(loadChar);

   
    return (
        <>
            <div className={style.containerPadre}>
                <TransitionComponent>
                    <div className={style.container}>
                        <div className={style.contenedorTarjetas}>
                            <div className={style.tarjetas}>
                                <VistaPrevia
                                    loadChar={loadChar}
                                    characters={characters}
                                    onClose={onClose} />
                            </div>
                        </div>
                        <div className={style.containerTv}>
                            <Reproductor
                            reproductor={reproductorTv}
                            />
                        </div>
                    </div>
                </TransitionComponent>

            </div>
        </>
    )
}

export default ContenedorPadre;