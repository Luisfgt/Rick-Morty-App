import style from './VistaPrevisa/VistaPrevia.module.css'
import Caset from "./Caset";
import miImagen from './VistaPrevisa/assets/Recurso 4.png'
import miImagen2 from './VistaPrevisa/assets/Recurso 6.png'
import miImagen3 from './VistaPrevisa/assets/Recurso 7.png'
import miImagen4 from './VistaPrevisa/assets/Recurso 8.png'


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
    let caseteIndex = 0;
    const imagenCombinada = characters.map(({ id, image, name }) => {
        const caseteImage = casetes[caseteIndex];
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
        <div >
            {imagenCombinada.map((images, index) => {
                return <div
                    key={index} className={style.container}>
                    <Caset
                        image={images.image}
                    />
                    <img src={images.caseteImage} alt="no se pudo :(" className={style.miImagen} />
                    <h1 className={style.texto}>{images.name}</h1>
                    <button className={style.borrar} onClick={() => onClose(images.id)}>X</button>
                </div>
            })}
        </div>
    );
};

export default Casetes;