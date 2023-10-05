import { useEffect, useState } from 'react'
import style from '../reproductor/reproductor.module.css'
import reproductor from '../reproductor/TV.png'
import videoTv from '../reproductor/VideoTV.mp4'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ReproductorDetail() {

    const id = useParams()
    const [characters, setCharacters] = useState([])

    useEffect(
        function NewCharacter() {
            axios(`https://rym2.up.railway.app/api/character/${id.id}?key=pi-luisfgt`).then(
                ({ data }) => {
                    if (data.name) {
                        setCharacters([data])
                    }
                }
            )
            console.log(characters)
        }
        , [id.id])


    return <>
        <div className={style.contenedorTV}>
            <div className={style.info}>
                <div className={style.cuadroInfo}>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{characters[0]?.name}</h3>
                        <h4 className={style.textoInfo}>Name</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{characters[0]?.species}</h3>
                        <h4 className={style.textoInfo}>Specie</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{characters[0]?.gender}</h3>
                        <h4 className={style.textoInfo}>Gender</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{characters[0]?.status}</h3>
                        <h4 className={style.textoInfo}>Status</h4>
                    </div>
                </div>
                <img className={style.image} src={characters[0]?.image} alt="" />
            </div>
            <img className={style.reproductor} src={reproductor} alt="" />
        </div>
    </>

}

export default ReproductorDetail;
