import './itemDetail.css'
import ItemCount from '../Cards/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {
    
    const [showButton, setShowButton] = useState(false)

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
                
                {!showButton ?
                    <>  
                        <label className="labelSelector">Seleccione Cantidad</label>
                        <ItemCount className="countDelProducto" data={data} setShowButton={setShowButton}/>
                    </>
                    :
                    <button className='buttonLink'><Link to='/cart' className='linkButton'>Ir al carrito</Link></button>
                }
            </div>
        </div>
    )
}

export default ItemDetail