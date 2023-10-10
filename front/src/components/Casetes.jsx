import style from './VistaPrevisa/VistaPrevia.module.css'
import Caset from "./Caset";
import miImagen from './VistaPrevisa/assets/Recurso 4.png'
import miImagen2 from './VistaPrevisa/assets/Recurso 6.png'
import miImagen3 from './VistaPrevisa/assets/Recurso 7.png'
import miImagen4 from './VistaPrevisa/assets/Recurso 8.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addFav, removeFav } from '../redux/actions';
import favCasete from './VistaPrevisa/assets/CassFav.png'


const casetes = [
    miImagen,
    miImagen2,
    miImagen3,
    miImagen4,
]
//Acá empecé la función Casete con un map para que con cada posición del array de characters,
//se use un diferente casete de 'casetes', el array de arriba que tiene las rutas de imágenes de los diseños de los casetes
//que diseñé.

const Casetes = ({ characters, onClose }) => {

    
    //Escuchar el array de favoritos
    const charactersFav = useSelector((state) => state.myFavorites)
    console.log(charactersFav);



    let caseteIndex = 0;
    const imagenCombinada = characters.map(({ id, image, name }) => {
        const caseteImage = charactersFav.some((favorito) => favorito.id === id ) ? favCasete : casetes[caseteIndex];
        console.log(charactersFav.some((favorito) => {console.log(favorito.id);}), typeof id);
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
                    <Link to={`/detail/${images.id}`}>
                        <div

                            key={index} className={style.container}>
                            <Caset
                                image={images.image}
                            />
                            <img src={images.caseteImage} alt="no se pudo :(" className={style.miImagen} />
                            <h1 className={style.texto}>{images.name}</h1>
                            <button className={style.borrar} onClick={() => onClose(images.id)}>X</button>
                        </div>
                    </Link>
                )

            })}
        </>
    );
};

export default Casetes;