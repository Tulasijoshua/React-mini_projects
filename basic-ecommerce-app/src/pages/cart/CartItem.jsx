import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import FormatPrice from '../../components/FormatPrice'

const CartItem = ({data}) => {
    const {id, productTitle, productName, productBrand, price, productImage} = data
    const {cartItems, addToCart, removeFromCart, getCartUpdate} = useContext(ShopContext)

  return (
    <div className='cartItem'>
        {/* <h2 className='cartItem-heading'>Cart {cartItems[id] > 0 && <>({cartItems[id]})</> }</h2> */}
      <div className="cartItem-box">
        <div className="cartItem-boxLeft">
            <div className="cartItem-img">
                <img src={productImage} />
            </div>
            <div className="cartItem-description">
                <div>Item: <b>{productName}</b></div>
                <div>Brand: <b>{productBrand}</b></div>
                <div>Price: <FormatPrice price={price} /></div>
                <div className='express'>Shein Express</div>
            </div>
        </div>
        <div className="cartItem-boxRight">
            <div className="cartMenu">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => getCartUpdate(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
