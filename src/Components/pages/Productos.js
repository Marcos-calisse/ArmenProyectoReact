import { collection, getDocs, query, where } from 'firebase/firestore'
import dataBase from '../utilidades/firebaseConfig'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardItem from '../Cards/Card'
import Container from 'react-bootstrap/Container'

const Productos = () => {

    const { categoria} = useParams()
    
    const [productoFiltrado, setProductoFiltrado] = useState([])

    const getProductFiltrado = async () => {
        
        const q = query(collection(dataBase, "productos"), where("categoria", "==", categoria));
        
        const querySnapshot = await getDocs(q);
        const productoFiltradoFireBase = querySnapshot.docs.map((doc) => {
            let productoFiltrado = doc.data()
            productoFiltrado.id = doc.id
            return productoFiltrado  
        });
        return(productoFiltradoFireBase)
    } 
    
    
    useEffect(() => {
        getProductFiltrado()
        .then((response) =>{
            setProductoFiltrado(response)
        })
        .catch((error) =>{
            console.log("error de carga de datos", error)
        })
    },[categoria]) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
            <h2>{categoria}</h2>
            <Container className="containerCards">
                {
                    productoFiltrado.map((producto) => {
                        return(
                            <div>
                                <CardItem titulo={producto.nombre} precio={producto.precio} image={producto.image} id={producto.id} />
                            </div>
                        )
                    })
                }
            </Container>
        </>
        
    )
}

export default Productos