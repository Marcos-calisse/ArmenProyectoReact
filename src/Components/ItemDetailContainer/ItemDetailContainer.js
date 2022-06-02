import ItemDetail from '../ItemDetail/ItemDetail'
import productos  from '../utilidades/products'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { id } = useParams({})

    const [product, setProduct] = useState({})

    // const getItem = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() =>{
    //             resolve(productos)
    //         })
    //     })
    // }

    useEffect(() => {
        // getItem()
        // .then((response) => {
        //     return response
        // })
        // .then((data) => {
        //     setProduct(data)
        // })

        setProduct(productoEncontrado)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const productoEncontrado = productos.find( (producto) =>{
        
        return producto.id == id
    })

    return(
        <div>
            <ItemDetail data={product}/>
        </div>
    )
}

export default ItemDetailContainer