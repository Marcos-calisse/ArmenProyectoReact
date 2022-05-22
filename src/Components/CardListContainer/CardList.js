import CardItem from '../Cards/Card'
import Container from 'react-bootstrap/Container'
import './cardList.css'

const CardList = ({titulo}) => {
    return(
        <>
            <h2>{titulo}</h2>
            <Container className="containerCards">
                <CardItem titulo='Boxer Armour' precio={1500} image={'boxer-Armound.jpg'} />

                <CardItem titulo='Gorras' precio={2299} image={'gorras.jpg'} />

                <CardItem titulo='Boxer Tommy' precio={2000} image={'boxer-tommy.jpg'} />

            </Container>
        </>
    )
}
export default CardList