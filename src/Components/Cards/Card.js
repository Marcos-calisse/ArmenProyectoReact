import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './card.css'

const CardItem = ({titulo, precio, image}) => {
    return (
        <Card border="dark" style={{ width: '18rem' }}>
            <div className="conteiner-img">
                <img src={`./${image}`} alt="" />
            </div>
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {`$ ${precio}`}
                </Card.Text>
                <Button variant={'dark'}>Detalle</Button>
            </Card.Body>
        </Card>
    )
}

export default CardItem