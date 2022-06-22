import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [productsCart, setProductsCart] = useState([])
    

    const addProductToCart = (product) =>{
        let productoEncontrado = productsCart.find(itemCart => itemCart.id === product.id)

        let productoEnCarrito = productsCart.includes(productoEncontrado)

        productoEnCarrito ? console.log('Ya agregaste este producto') : setProductsCart(productsCart => [...productsCart, product])
    }
    

    const totalCarrito = () => {

        let sumaTotal =  productsCart.reduce((acc, product) => (acc + product.precio), 0)

        return sumaTotal
    }

    const removeItem = (id) =>{
        const nuevoArray = productsCart.filter((product) => product.id !== id)
        setProductsCart(nuevoArray)
    }
    

    const vaciarCarrito = () => {
        return setProductsCart([])
    }
    

    const data = {
        productsCart,
        addProductToCart,
        totalCarrito,
        vaciarCarrito,
        removeItem
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext }
export default CartProvider