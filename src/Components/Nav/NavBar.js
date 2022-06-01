import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" className="nav-bar">

            <img src="/logoArmen.jpeg" className="logo-marca" alt="logo"/>

            <ul className='nav-list'>
                <li>
                    <a href="./index.html">Nosotros</a>
                </li>
                <li>
                    <a href="./index.html">Productos</a>
                </li>
                <li>
                    <a href="./index.html">Contacto</a>
                </li>
            </ul>
            <div className="cartContainer">
                <Cart />
            </div>
            
           
        </Navbar>
    )
}

export default NavBar;