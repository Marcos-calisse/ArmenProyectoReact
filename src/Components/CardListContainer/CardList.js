import CardItem from '../Cards/Card'
import Container from 'react-bootstrap/Container'
import './cardList.css'
import { useEffect, useState } from 'react'

const CardList = ({titulo}) => {
    
    const [products, setProductos] = useState([])

    const productos = [
        {
            id: 1,
            nombre: "Boxer Armour",
            precio: 1500,
            stock: 10,
            image: './boxer-Armound.jpg'
        },
        {
            id: 2,
            nombre: "Gorras",
            precio: 2299,
            stock: 20,
            image: './gorras.jpg'
        },
        {
            id: 3,
            nombre: "Boxer Tommy",
            precio: 2000,
            stock: 15,
            image: './boxer-tommy.jpg'
        }
    ]

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
    },[])
   

    return(
        <>
            <h2>{titulo}</h2>
            <Container className="containerCards">
                {
                    products.map((producto) => {
                        console.log('id actual:', producto)
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