import Style from './Nav.module.css'
import SearchBar from "../SearchBar"
import { Link } from "react-router-dom";
const Nav = ({ onSearch }) => {
    return (
        <div className={Style.navBar}>
            <SearchBar onSearch={onSearch} />
            <Link to='/about'>
                <button className={Style.buttons}>About</button>
            </Link>
            <Link to='/home'>
                <button className={Style.buttons}>Home</button>
            </Link>

            <Link to='/Favorites'>
                <button className={Style.buttons}>Favorites</button>
            </Link>

            <Link to='/'>
                <button className={Style.buttonsLogout}>Log-Out</button>
            </Link>
        </div>
    )
}

export default Nav;