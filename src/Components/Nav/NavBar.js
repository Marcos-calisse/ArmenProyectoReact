import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <Navbar  className="nav-bar">
            
            <Link to='/'>
                <div className="containerLogoMarca">
                    <img src="/logoArmen.jpeg" className='imagenLogo' alt="logo"/>
                </div>
            </Link>

            <ul className='nav-list'>
                <li>
                    <Link to='/nosotros' className='componentesLink'>Nosotros</Link>
                </li>
                <li>
                    <Link to='/productos' className='componentesLink'>Productos</Link>
                </li>
                <li>
                    <Link to='/contacto' className='componentesLink'>Contacto</Link>
                </li>
            </ul>
            <div className="cartContainer">
                <Cart />
            </div>
            
           
        </Navbar>
    )
}

export default NavBar;