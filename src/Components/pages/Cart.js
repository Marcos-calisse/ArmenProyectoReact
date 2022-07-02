import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './detailCart.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { addDoc, collection } from 'firebase/firestore'
import dataBase from '../utilidades/firebaseConfig'


const Cart = () => {

    // info cartContext
    const {productsCart, totalCarrito, vaciarCarrito, removeItem, setProductsCart} = useContext(CartContext)

    // estados del formulario
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setProductsCart([])
        totalCarrito(0)
    };
    
    const [valoresForm, setVarloresForm] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })

    // estado de la fecha
    const [ date, setDate] = useState()

    // estado de la orden
    const [orden, setOrden] = useState({
        comprador: {},
        itemsCompra: productsCart.map((item) =>{
            return{
                id: item.id,
                nombre: item.nombre,
                precio: item.precio
            }
        }),
        totalCompra: totalCarrito(),
    })

    const [mostrarOrden, setMostrarOrden] = useState()


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrden({...orden, comprador: valoresForm})
        enviarData({...orden, comprador: valoresForm})
        setDate(new Date().toLocaleString())
        
    }

    const handleChange = (e) => {
        setVarloresForm({...valoresForm, [e.target.name] : e.target.value})
    }

    const enviarData = async (nuevaOrden) => {
        const ordenFireBase = collection(dataBase, 'ordenes');
        const ordenDoc = await addDoc(ordenFireBase, nuevaOrden)
        setMostrarOrden(ordenDoc.id)
    }

    
    return(
        <>  
            <div className="containerItemsCart">
                {
                    productsCart.length === 0 ?
                    <>
                        <div className='carritoVacio'>
                            <h3>Su carrito esta vacío</h3>
                            <Button size="large" variant="outlined" className='buttonCart'>
                                <Link to='/' className='componenteLinkCarrito'>Los mejores productos te esperan</Link>
                            </Button>
                        </div>
                    </>
                    :
                    <>
                        {productsCart.map((item) =>{
                            return(
                                <div className="itemCart">
                                    <div className="contenidoInfoProducto">
                                        {`cantidad ${item.cantidad}`}
                                    </div>
                                    <div className="imgProducto">
                                        <img src={`/${item.image}`} alt=''/>
                                    </div>
                                    <div className="contenidoInfoProducto">
                                        <p>{item.nombre}</p>
                                    </div>
                                    <div className="contenidoInfoProducto">
                                        <span>$ {item.precio}</span>
                                    </div>
                                    <div className='botonQuitar' onClick={()=> removeItem(item.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg>
                                    </div>
                                </div>
                            )}
                        )}
                        <div className="containerCheckout">
                            <div className='containerTotalCarrito'>
                                <p className='tituloTotalCarrito'>El total de tu compra es: {`$${totalCarrito()}`}</p>
                            </div>
                            <Button size="large" variant="outlined" className='buttonContinueBuying' onClick={handleOpen}>
                                Finalizar Compra
                            </Button>
                            <Button variant="outlined" color="error" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                        </div>
                        <div className='containerModalFomr'>
                            
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    className='modalForm'
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            {mostrarOrden ? 'Compra exitosa' : ' Completar Formulario'}
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            {mostrarOrden ? (
                                                <div className='containerOrden'>
                                                    <div>
                                                        <p>Orden Generada!!!</p>
                                                    </div>
                                                    <div>
                                                        <p>Nro de orden: <span>{mostrarOrden}</span></p>
                                                        <p>Fecha y hora de su compra: {date}</p>
                                                    </div>
                                                    
                                                </div>
                                            ) 
                                            : 
                                            (
                                                    <form onSubmit={handleSubmit} className='formCompra'>
                                                        <TextField 
                                                            id="filled-basic" 
                                                            label="Nombre y Apellido" 
                                                            variant="filled"
                                                            name= 'nombre'
                                                            onChange={handleChange}
                                                            value={valoresForm.nombre}
                                                        />
                                                        <TextField 
                                                            id="filled-basic" 
                                                            label="Telefono" 
                                                            variant="filled"
                                                            name= 'telefono'
                                                            onChange={handleChange}
                                                            value={valoresForm.telefono}
                                                        />
                                                        <TextField 
                                                            id="filled-basic" 
                                                            label="Email" 
                                                            variant="filled"
                                                            name= 'email'
                                                            onChange={handleChange}
                                                            value={valoresForm.email} 
                                                        />
                                                        <Button type='submit'>
                                                            Enviar
                                                        </Button>
                                                </form>
                                            )}
                                            
                                        </Typography>
                                    </Box>
                                    
                                </Modal>
                            
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Cart