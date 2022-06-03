import productos from '../utilidades/products'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../CardListContainer/CardList'

const Productos = () => {

    const { categoria } = useParams()
    //const [product, setProduct] = useState()

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productos)
            })
        })
    }

    useEffect(() => {
        getItem()
        .then((response) => {
            console.log(response)
        })
        

    },[categoria]) // eslint-disable-line react-hooks/exhaustive-deps

    // const productoFiltrado =  (array) => {
        
    //     return array.filter( (producto) => {
    //         if(producto.categoria === categoria){
    //             return setProduct(producto)
    //         }
    //     })
    // }
    // console.log('producto filtrado', productoFiltrado())
    return(
        <div>
            <h2> Seccion Productos</h2>
            <CardList />
        </div>
    )
}

export default Productos