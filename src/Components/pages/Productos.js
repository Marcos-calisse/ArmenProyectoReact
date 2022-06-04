import { useParams } from 'react-router-dom'

const Productos = () => {

    const { categoria} = useParams()
    console.log('useParams: ', categoria)

    return(
        <div>
            <h2> Seccion Productos</h2>
        </div>
    )
}

export default Productos