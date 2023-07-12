import React, { createContext, useEffect, useState } from 'react'
import { PRODUCTS } from '../Products'
import { useSingleContext } from './SingleProductContext'

export const ShopContext = createContext(null)

const getDafaultCart = () => {
    let cart = {}
    for(let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = ({children}) => {
    const { products } = useSingleContext()
    const [cartItems, setCartItems] = useState(getDafaultCart)
    // const [products, setProducts] = useState(products)
    const [data, setData] = useState([])


    useEffect(() => {
        setData([... new Set(products.map((data) => data.productName))])
    },[])

    const getSubtotalCart = () => {
        let totalAmount = 0
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                const itemInfo = PRODUCTS.find((product) => product.id === Number(item) )
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const getCartUpdate = (totalCount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: totalCount}))
    }

    const cartValues = {cartItems, 
                        addToCart, 
                        removeFromCart, 
                        getCartUpdate, 
                        getSubtotalCart, 
                        products,
                        data
                    }

  return (
    <ShopContext.Provider value={cartValues}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider