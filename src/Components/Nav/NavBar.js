import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMove = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    return(
        
        <Navbar  className="navBar">
            
            <Link to='/'>
                <div className="containerLogoMarca">
                    <img src="/logoArmen.jpeg" className='imagenLogo' alt="logo"/>
                </div>
            </Link>
            <ul className='navList'>
                <li>
                    <Link to='/nosotros' className='componentesLink'>Nosotros</Link>
                </li>
                <li>
                    <Button
                        className='subNav'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onMouseMove={handleMove}
                        
                    >
                        Productos
                    </Button>
                    <Menu
                        className='subCategorias'
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        
                    >
                        <MenuItem onClick={handleClose}><Link to={`/productos/Boxers`} className='componentesLink'>Boxers</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={`/productos/Gorras`} className='componentesLink'>Gorras</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={`/productos/Cintos`} className='componentesLink'>Cintos</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={`/productos/Billeteras`} className='componentesLink'>Billeteras</Link></MenuItem>
                    </Menu>
                </li>
                <li>
                    <Link to='/contacto' className='componentesLink'>Contacto</Link>
                </li>
            </ul>
            <div className="cartContainer">
                <CartWidget />
            </div>
            
        </Navbar>
    )
}

export default NavBar;