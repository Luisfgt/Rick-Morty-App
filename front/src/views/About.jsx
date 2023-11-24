import style from '../styles.module.css'
import luisImagen from '../components/About/Luis.png'
import TransitionComponent from '../components/TransitionComponent/transitionComponent'


const About = () => {
    return (
        <div className={style.about}>
            <div className={style.fondoAbout}>
                <TransitionComponent>
                        <div className={style.cuadroCompleto}>
                            <div className={style.mensajeTexto}>"Hello! I am Luis Gonzalez, a dedicated frontend developer and designer! Within this charming application, you'll witness a glimpse of my skills! May your experience here be delightful! Warmest regards."</div>
                            <img className={style.mensajeImg} src={luisImagen} alt="" />
                    </div>
                </TransitionComponent>
            </div>
        </div>
    )
}

export default About;