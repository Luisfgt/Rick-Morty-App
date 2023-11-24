import style from '../VistaPrevisa/VistaPrevia.module.css'
import Caset from "./Caset";
import miImagen from '../VistaPrevisa/assets/Recurso 4.png'
import miImagen2 from '../VistaPrevisa/assets/Recurso 6.png'
import miImagen3 from '../VistaPrevisa/assets/Recurso 7.png'
import miImagen4 from '../VistaPrevisa/assets/Recurso 8.png'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import favCasete from '../VistaPrevisa/assets/CassFav.png'
import CasetFinal from './CasetFinal';


const casetes = [
    miImagen,
    miImagen2,
    miImagen3,
    miImagen4,
]
//Acá empecé la función Casete con un map para que con cada posición del array de characters,
//se use un diferente casete de 'casetes', el array de arriba que tiene las rutas de imágenes de los diseños de los casetes
//que diseñé.

const Casetes = ({ characters, onClose, changeTv, loadChar }) => {


    //Escuchar el array de favoritos
    const charactersFav = useSelector((state) => state.myFavorites)

    let caseteIndex = 0;
    const imagenCombinada = characters.map(({ id, image, name }) => {

        const caseteImage = charactersFav.some((favorito) => favorito.id === id) ? favCasete : casetes[caseteIndex];
        caseteIndex = (caseteIndex + 1) % casetes.length;
        return {
            image: image,
            caseteImage: caseteImage,
            name: name,
            id: id
        };
    });

    // if (characters.length > casetes.length) {
    //     caseteIndex = 0;
    // }
    return (
        <>

            {imagenCombinada.map((images, index) => {
                return (
                    <CasetFinal
                        loadChar={loadChar}
                        images={images}
                        index={index}
                        onClose={onClose}
                        changeTv={changeTv}
                    />
                )
            })}
        </>
    );
};

export default Casetes;