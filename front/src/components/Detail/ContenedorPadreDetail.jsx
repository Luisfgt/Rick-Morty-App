import style from '../ContenedorPrincipal/Contenedor.module.css'
import VistaPrevia from '../VistaPrevisa/VistaPrevia';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import axios from 'axios'
import ReproductorDetail from './ReproductorDetail';
import reproductorTv from '../reproductor/TV.png'
import reproductorTvClick from '../reproductor/TV.2.png'
import VistaPreviaDetail from './VistaPreviaDetail';

const ContenedorPadreDetail = ({ characters, onClose }) => {
    console.log(characters);

    const [reproductor, setReproductor] = useState(reproductorTv)

    const changeTv = () => {
        setReproductor(reproductorTvClick)
        setTimeout(() => {
            setReproductor(reproductorTv)
        }, 100);
    }


    return (
        <>
            <div className={style.containerPadre}>

                <div className={style.container}>
                    <div className={style.contenedorTarjetas}>
                        <div className={style.tarjetas}>
                            <VistaPreviaDetail
                                characters={characters}
                                onClose={onClose}
                                changeTv={changeTv}
                                />
                        </div>
                    </div>
                    <div className={style.containerTv}>
                        <ReproductorDetail
                            reproductor={reproductor}
                            characters={characters}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContenedorPadreDetail;