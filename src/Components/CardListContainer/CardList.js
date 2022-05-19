import CardItem from '../Cards/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const CardList = ({titulo}) => {
    return(
        <>
            <h2>{titulo}</h2>
            <Container>
                <Row>
                    <Col>
                        <CardItem titulo='Boxer Armour' precio={1500} image={'boxer-Armound.jpg'} />
                    </Col>
                    <Col>
                        <CardItem titulo='Gorras' precio={2200} image={'gorras.jpg'} />
                    </Col>
                    <Col>
                        <CardItem titulo='Boxer Tommy' precio={2000} image={'boxer-tommy.jpg'} />
                    </Col>

                </Row>

            </Container>
        </>
    )
}
export default CardList