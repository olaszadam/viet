import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import logoKep from '../../images/Header/logo/botcolor.png'  
import logoKep2 from '../../images/Header/logo/felirat_red.png'  
import '../mainpages/pages.css'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                {/* <li><Link to="/create_product">Jegy hozzáadása</Link></li>
                <li><Link to="/category">Kategóriák</Link></li> */}
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <span style={{fontWeight: 'bold',fontSize: '20px'}}>
                <li><Link to="/eventsbel">#ITTHON</Link></li>
                <li><Link to="/eventskul">#KÜLFÖLD</Link></li>
                <li><Link to="/zenek">#ZENÉK</Link></li>
                <li><Link to="/" onClick={logoutUser}>Kijelentkezés</Link></li>
                </span>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 
                    <>
                    <img className="logokep" src={logoKep} alt="logo1" />
                    <img className="logokep2" src={logoKep2} alt="logo2" /> 
                    </>
                    : 
                    <>
                    <img className="logokep" src={logoKep} alt="logo1" />
                    <img className="logokep2" src={logoKep2} alt="logo2" /> 
                    </>}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <span style={{fontWeight: 'bold',fontSize: '20px'}}><li><Link to="/login">Bejelentkezés</Link></li></span>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>
            
        </header>
    )
}

export default Header
