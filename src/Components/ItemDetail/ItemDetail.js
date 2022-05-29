import './itemDetail.css'
import ItemCount from '../Cards/ItemCount'


const ItemDetail = ({data}) => {

    return(
        <div className="containerDetalleProducto">
            <h2 className="tituloDetalleProducto">{data.nombre}</h2>
            <span className="infoPrecioProducto">{`$ ${data.precio}`}</span>
            <ItemCount className="countDelProducto" />
            <div className="containerImagenDetalleProducto">
                <img src={`./${data.image}`} alt="" className="imagenProducto" />
            </div>
            <p className="descripcionProducto">{data.descripcion}</p>

        </div>
    )
}

export default ItemDetail