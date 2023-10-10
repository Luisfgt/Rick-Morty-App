import { useEffect, useState } from 'react'
import style from '../reproductor/reproductor.module.css'
import reproductor from '../reproductor/TV.png'
// import reproductor2 from '../reproductor/TV2.png'
import videoTv from '../reproductor/VideoTV.mp4'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFav, removeFav } from '../../redux/actions'

function ReproductorDetail() {

    //Hooks
    const id = useParams()
    const [character, setCharacter] = useState({})
    const [isFav, setIsFav] = useState(false)
    const dispatch = useDispatch();
    useEffect(
        function NewCharacter() {
            axios(`https://rym2.up.railway.app/api/character/${id.id}?key=pi-luisfgt`).then(
                ({ data }) => {
                    if (data.name) {
                        setCharacter(data)
                    }
                }
            )
            console.log(character)
        }
        , [id.id])

    //Funciones

    const handleFavorite = () => {
        console.log(character);
        if (isFav) {
            setIsFav(false)
            dispatch(removeFav(character.id))
        }

        else {
            setIsFav(true)
            dispatch(addFav(character))
        }

    }

    return <>
        <div className={style.contenedorTV}>
            <div className={style.info}>
                <div className={style.cuadroInfo}>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{character?.name}</h3>
                        <h4 className={style.textoInfo}>Name</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{character?.species}</h3>
                        <h4 className={style.textoInfo}>Specie</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{character?.gender}</h3>
                        <h4 className={style.textoInfo}>Gender</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{character?.status}</h3>
                        <h4 className={style.textoInfo}>Status</h4>
                    </div>
                </div>
                <img className={style.image} src={character?.image} alt="" />
            </div>
            <img className={style.reproductor} src={reproductor} alt="" />
            <div onClick={() => handleFavorite()} className={style.botonFav}></div>
        </div>
    </>

}

export default ReproductorDetail;
