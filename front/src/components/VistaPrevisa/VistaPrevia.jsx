import style from './VistaPrevia.module.css'
import style2 from '../ContenedorPrincipal/Contenedor.module.css'
import Casetes from '../Casetes/Casetes'
import ReproductorDetail from '../Detail/ReproductorDetail'



const VistaPrevia = ({ characters, onClose, loadChar }) => {
    console.log(loadChar);
    return (
        <>
            <Casetes
                loadChar={loadChar}
                characters={characters}
                onClose={onClose}
            />

        </>
    )
}

export default VistaPrevia;


