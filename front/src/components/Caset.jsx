import style from './VistaPrevisa/VistaPrevia.module.css'
const Caset = ({image}) => {
    return(
        <img src={image} alt="" className={style.personaje}/>
    )
}

export default Caset;