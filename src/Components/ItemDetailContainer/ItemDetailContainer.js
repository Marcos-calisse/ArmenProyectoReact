import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import dataBase from '../utilidades/firebaseConfig'
import './itemDetailContainer.css'
import Loader from './LoaderDetail'

const ItemDetailContainer = () => {

    const { id } = useParams({})

    const [product, setProduct] = useState({})

    const [loading, setLoading] = useState(false)

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
            
            setTimeout(() => {
                setLoading(true)
                setProduct(data)
            },1000)
            
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return(
        <div className='containerDetail'>
            {loading ? <ItemDetail data={product}/> : <Loader />}
        </div>
    )
}

export default ItemDetailContainer