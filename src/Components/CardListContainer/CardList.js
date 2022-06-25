import CardItem from '../Cards/Card'
import Container from 'react-bootstrap/Container'
import './cardList.css'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import dataBase from '../../Components/utilidades/firebaseConfig';



const CardList = ({titulo}) => {
    
    const [products, setProductos] = useState([])
    

    const getProductsFireBase = async () => {
        const querySnapshot = await getDocs(collection(dataBase, "productos"));
        const productsFireBase = querySnapshot.docs.map((doc) => {
            let producto = doc.data();
            producto.id = doc.id
            return producto
        });
        return(productsFireBase)
    }

    

    useEffect(() => {
        getProductsFireBase()
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
                                <CardItem titulo={producto.nombre} precio={producto.precio} image={producto.image} id={producto.id} />
                            </div>
                        )
                    })
                }
            </Container>
        </>
    )
}
export default CardList