import './card.css'
import ItemCount from './ItemCount'

const CardItem = ({titulo, precio, image}) => {
    
    return (
        <div style={{ width: '12rem' }}>
            <div className="container-img">
                <img src={`./${image}`} alt="" />
            </div>
            <div>
                <h2>{titulo}</h2>
                <span>
                    {`$ ${precio}`}
                </span>
                <ItemCount />
                <button className="buttonCard">Ver Detalle</button>
                <button className="buttonCard">Comprar</button>
            </div>
        </div>
    )
}

export default CardItem