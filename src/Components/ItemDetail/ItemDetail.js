import './itemDetail.css'
import ItemCount from '../Cards/ItemCount'


const ItemDetail = ({data}) => {

    return(
        <div className="containerDetalleProducto">

            <div className="containerImagenDetalleProducto">
                <img src={`./${data.image}`} alt="" className="imagenProducto" />
            </div>
            <div className="containerInfoDetalle">
                <h2 className="tituloDetalleProducto">{data.nombre}</h2>
                <span className="infoPrecioProducto">{`$ ${data.precio}`}</span>
                <ItemCount className="countDelProducto" />
                <p className="descripcionProducto">{data.descripcion}</p>
                <button className="buttonCard">Agregar al carrito</button>
            </div>
           

        </div>
    )
}

export default ItemDetail