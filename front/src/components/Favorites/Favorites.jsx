import { useDispatch, useSelector } from 'react-redux'
import Style from './Favorites.module.css'
import Casetes from '../Casetes/Casetes'
import { filterCards, orderCards } from '../../redux/actions';
import TransitionComponent from '../TransitionComponent/transitionComponent';


const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.myFavorites)
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={Style.Favorites}>
            <TransitionComponent>
                <div className={Style.select}>
                    <select onChange={handleOrder}>
                        <option value="A">Ascendent</option>
                        <option value="D">Descendent</option>
                    </select>
                    <select onChange={handleFilter}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
                </div>
                <div className={Style.CasetesContainer}>
                    <div className={Style.Casetes}>
                        <Casetes characters={favorites} />
                    </div>
                </div>
            </TransitionComponent>
        </div >
    )
}

export default Favorites