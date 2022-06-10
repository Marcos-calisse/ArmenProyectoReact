import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [productsCart, setProductsCart] = useState([])
    

    const addProductToCart = (product) =>{
        setProductsCart(productsCart => [...productsCart, product])
    }

    const data = {
        productsCart,
        addProductToCart,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext }
export default CartProvider