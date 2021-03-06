import CardItem from '../Cards/Card'
import Container from 'react-bootstrap/Container'
import './cardList.css'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import dataBase from '../../Components/utilidades/firebaseConfig';
import Loader from '../ItemDetailContainer/LoaderDetail'



const CardList = ({titulo}) => {
    
    const [ products, setProductos] = useState([])
    const [ loader, setLoader ] = useState(false)
    

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
            
            setTimeout(()=>{ 
                setLoader(true) 
                setProductos(response)
            },1000)
            
        })
        .catch((error) =>{
            console.log("error de carga de datos", error)
        })
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
    
   

    return(
        <>
            <h2>{titulo}</h2>
            {loader ? 
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
            : 
                <div className="containerLoader">
                    <Loader sx={{ display: 'flex', flexDirection: 'row' }}/>
                </div>
            }
            
            
        </>
    )
}
export default CardList