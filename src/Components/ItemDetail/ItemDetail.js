import './itemDetail.css'
import ItemCount from '../Cards/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {

    const [cantidad, setCantidad] = useState(1)

    const [showButton, setShowButton] = useState(false)

    const addToCart = () => {
        
        setShowButton(true)
        setCantidad(1)
    }

    return(
        <div className="containerDetalleProducto">

            <div className="containerImagenDetalleProducto">
                <img src={`/${data.image}`} alt="" className="imagenProducto" />
            </div>
            <div className="containerInfoDetalle">
                <h2 className="tituloDetalleProducto">{data.nombre}</h2>
                <span className="infoPrecioProducto">{`$ ${data.precio}`}</span>
                <p className="descripcionProducto">{data.descripcion}</p>
                <label className="labelSelector">Seleccione el talle</label>
                <select className="selector">
                    <option></option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
                <label className="labelSelector">Seleccione Cantidad</label>
                <ItemCount className="countDelProducto" modificarCantidad={setCantidad} cantidad={cantidad} stock = {5}/>
                
                <button className="buttonCardDetalle" onClick={addToCart}>Agregar al carrito</button>
                {showButton && 
                <button className='buttonLink'><Link to='/cart' className='linkButton'>Ir al carrito</Link></button>
                }
                
            </div>
            

        </div>
    )
}

export default ItemDetail