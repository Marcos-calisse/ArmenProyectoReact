import CardItem from '../Cards/Card'
import Container from 'react-bootstrap/Container'
import './cardList.css'
import { useEffect, useState } from 'react'
import productos from '../utilidades/products'

const CardList = ({titulo}) => {
    
    const [products, setProductos] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productos)
            }, 2000)
        })
    }

    useEffect(() => {
        getProducts()
        .then((response) =>{
            setProductos(response)
        })
        .catch((error) =>{
            console.log("error de carga de datos", error)
        })
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
    
   

    return(
        <>
            <h2>{titulo}</h2>
            <Container className="containerCards">
                {
                    products.map((producto) => {
                        return(
                            <div>
                                <CardItem titulo={producto.nombre} precio={producto.precio} image={producto.image} /> 
                            </div>
                        )
                    })
                }
            </Container>
        </>
    )
}
export default CardList