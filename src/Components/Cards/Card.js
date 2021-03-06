import './card.css'
import { Link } from 'react-router-dom'


const CardItem = ({titulo, precio, image, id}) => {

    
    return (
        <div 
            style={{ width: '12rem' }} 
            className="cardContainer"
        >
            <div className="container-img">
                <img src={`/${image}`} alt="" />
            </div>
            <div>
                <h2>{titulo}</h2>
                <div className="containerPrecioProducto">
                    <span className="cardPrecioProducto">
                        {`$ ${precio}`}
                    </span>
                </div>
                
                <div className="containerLink">
                    <Link 
                        to={`/producto/${id}`} 
                        className="linkDetalle">
                        Ver Detalle
                    </Link>
                </div>
                
                
            </div>
        </div>
    )
}

export default CardItem