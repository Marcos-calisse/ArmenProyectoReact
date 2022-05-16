import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" className="nav-bar">

            <img src="./logo-marca.jpg" className="logo-marca" />

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
           
        </Navbar>
    )
}

export default NavBar;