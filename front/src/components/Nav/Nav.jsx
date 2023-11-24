import Style from './Nav.module.css'
import SearchBar from "../SearchBar"
import { Link, useLocation, redirect } from "react-router-dom";
import logo from '../../assets/gifRick.gif'



const Nav = ({ onSearch, logOut}) => {

    const location = useLocation().pathname;
    console.log(location);
    return (
        <div className={location === '/about' || location === '/Favorites' ? Style.navBarAbout : Style.navBar}>
            <Link to='/home'>
                <img src={logo} alt="" className={Style.logo} />
            </Link>
            <div className={Style.links}>
                <Link to='/about'>
                    <div className={location === '/about' ? Style.selectedButtons : Style.buttons}>About</div>
                </Link>
                <Link to='/home'>
                    <div className={location === '/home' ? Style.selectedButtons : Style.buttons}>Home</div>
                </Link>

                <Link to='/Favorites'>
                    <div className={location === '/Favorites' ? Style.selectedButtons : Style.buttons}>Favorites</div>
                </Link>

            </div>
            <div className={location === '/about' || location === '/Favorites' ? Style.logoutAndButtonOff : Style.logoutAndButton}>
                <div className={Style.add}>
                    <SearchBar onSearch={onSearch} />
                </div>
                <Link to='/'>
                    <div onClick={() => logOut()} className={Style.buttonsLogout}>Log-Out</div>
                </Link>
            </div>

        </div>
    )
}

export default Nav;