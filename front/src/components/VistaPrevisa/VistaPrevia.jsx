import style from './VistaPrevia.module.css'
import Casetes from '../Casetes'




const VistaPrevia = ({ characters, onClose }) => {

    return (
        <Casetes
            characters={characters}
            onClose={onClose}
        />
    )
}

export default VistaPrevia;


