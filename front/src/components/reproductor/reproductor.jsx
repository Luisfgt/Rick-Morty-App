import { useState } from 'react'
import style from '../reproductor/reproductor.module.css'
import reproductor from '../reproductor/TV.png'
import videoTv from '../reproductor/VideoTV.mp4'

function Reproductor({reproductor}) {

    return <>
        <div className={style.contenedorTV}>
            <video className={style.video} src={videoTv} controls autoPlay muted loop></video>
            <img className={style.reproductor} src={reproductor} alt="" contr />
        </div>
    </>

}

export default Reproductor;