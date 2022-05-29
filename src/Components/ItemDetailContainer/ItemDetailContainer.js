import ItemDetail from '../ItemDetail/ItemDetail'
import { producto } from '../utilidades/products'
import { useEffect, useState } from 'react'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(producto)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
        .then((response) => {
            return response
        })
        .then((data) => {
            setProduct(data)
        })
    }, [])

    return(
        <div>
            <h2>Contendedor Item Detail</h2>
            <ItemDetail data={product}/>
        </div>
    )
}

export default ItemDetailContainer