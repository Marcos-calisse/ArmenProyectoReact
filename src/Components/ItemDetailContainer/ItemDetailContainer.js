import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import dataBase from '../utilidades/firebaseConfig'

const ItemDetailContainer = () => {

    const { id } = useParams({})

    const [product, setProduct] = useState({})

    const getDetailProductFireBase = async () => {
        const productRef = doc(dataBase, 'productos', id)
        const productSnapshot = await getDoc(productRef)
        let detalleProducto = productSnapshot.data()
        detalleProducto.id = productSnapshot.id
        return detalleProducto
    }

    useEffect(() => {
        getDetailProductFireBase()
        .then((response) => {
            return response
        })
        .then((data) => {
            setProduct(data)
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return(
        <div>
            <ItemDetail data={product}/>
        </div>
    )
}

export default ItemDetailContainer