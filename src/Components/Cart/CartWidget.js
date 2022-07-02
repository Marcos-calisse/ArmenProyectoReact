import './cart.css'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom'




const CartWidget = () => {

    const {productsCart, removeItem} = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return(
        <>  
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <>
                    <div className="containerCartWidget">
                        <span className='countCartWidget'>
                            {
                                productsCart.length === 0 ? 0 : productsCart.length
                            }
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </div>
                    
                </>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='containerGeneralCartWidget'>
                    {productsCart.length === 0 && (
                        <>  
                            <div className='containerCarritoVacio'>
                                <p> Su Carrito Esta Vacío</p>
                                <Link to="/" className='linkCarritoVacio'>"Empezar a comprar"</Link>
                            </div>
                        </>
                    )}
                    {productsCart.map( (item) => {
                        return(
                        <div key={item.id} className='containeritemsCartWidget'>
                            <div className='imgProdCartWidget'>
                                <img src={`/${item.image}`} alt="prod carrito" />
                            </div>
                            <div>
                                <p>{item.nombre}</p>
                            </div>
                            <div className='botonQuitar' onClick={()=> removeItem(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </div>
                        </div>
                        )
                    })}
                    <div className='containerLinkTerminarCompra'>
                        <Link to="/cart">
                            <button style={{cursor: 'pointer'}} onClick={handleClose}>Terminar compra</button>
                        </Link>
                    </div>
                    
                </div>
            </Menu>
        </>
    )
}

export default CartWidget
