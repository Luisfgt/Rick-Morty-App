import Caset from "./Caset"
import style from '../VistaPrevisa/VistaPrevia.module.css'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFav, removeFav } from "../../redux/actions";
import LoaderCard from "../LoaderCard/LoaderCard";




const CasetFinal = ({images, index, onClose, changeTv}) => {

    const [isFav, setIsFav] = useState(false)
    console.log(images);

    const [loading, setLoading] = useState(false)

    const location = useLocation().pathname
    const dispatch = useDispatch()

    const handleFavorite = (character) => {
        if (isFav) {
            setIsFav(false)
            dispatch(removeFav(character.id))
        }
    
        else {
            setIsFav(true)
            dispatch(addFav(character))
        }
    
    }

  


    return (
        <>
            {!loading && <div className={style.loaderComp}> 
                <LoaderCard/>
                </div>}
            
            <div className={!loading && style.noneDis}>
                <Link to={`/detail/${images.id}`}>
                    <div

                        key={index} className={style.container}>
                        <Caset
                            setLoad={() => setLoading(true)}
                            image={images.image}
                        />
                        <img
                        src={images.caseteImage}
                        alt="no se pudo :("
                        className={style.miImagen}
                        />
                        <h1 className={style.texto}>{images.name}</h1>
                        <button className={style.borrar} onClick={() => onClose(images.id)}>X</button>
                    </div>
                </Link>
                {location === `/detail/${images.id}` &&

                    <div className={style.buttonFav}>
                        <div onClick={() => {
                            handleFavorite(images)
                            changeTv()
                        }} className={style.buttonFavChild}></div>
                    </div>
                }
            </div>
        </>
    )
}

export default CasetFinal;