import style from '../ContenedorPrincipal/Contenedor.module.css'
import Casetes from '../Casetes/Casetes'
import ReproductorDetail from '../Detail/ReproductorDetail'
import reproductorTv from '../reproductor/TV.png'
import { useState } from 'react'



const VistaPreviaDetail = ({ characters, onClose, changeTv }) => {


    return (
        <>
            <Casetes
                characters={characters}
                onClose={onClose}
                changeTv={changeTv}
            />
        </>
    )
}

export default VistaPreviaDetail;
