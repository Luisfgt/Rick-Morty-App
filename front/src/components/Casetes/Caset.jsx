import style from '../VistaPrevisa/VistaPrevia.module.css'
const Caset = ({image, setLoad}) => {

    return(
        <img
        src={image}
        alt=""
        className={style.personaje}
        onLoad={setLoad}
        />
    )
}

export default Caset;