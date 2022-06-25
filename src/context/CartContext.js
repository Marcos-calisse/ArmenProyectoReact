import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [productsCart, setProductsCart] = useState([])

    const addProductToCart = (product) =>{
        let productoEncontrado = productsCart.find(itemCart => itemCart.id === product.id)
        let productoEnCarrito = productsCart.includes(productoEncontrado)
        productoEnCarrito ? productoEncontrado.cantidad++ : setProductsCart(productsCart => [...productsCart, product])
    }
    

    const totalCarrito = () => {
        let sumaTotal =  productsCart.reduce((acc, product) => (acc + (product.precio * product.cantidad)), 0)
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
        removeItem,
        setProductsCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext }
export default CartProvider