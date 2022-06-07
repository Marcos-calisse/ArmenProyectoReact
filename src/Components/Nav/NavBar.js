import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'


const NavBar = () => {

    const categorias = ['Boxers', 'Gorras'];
    
    categorias.map((cat) =>{
        return cat
    })

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
                    
                    <Dropdown className='subNav'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Productos    
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to={`/productos/:categoria`} className='componentesLink'>Boxers</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={`/productos/:categoria`} className='componentesLink'>Gorras</Link></Dropdown.Item>  
                        </Dropdown.Menu>
                    </Dropdown>
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