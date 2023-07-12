import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import { useSingleContext } from '../../context/SingleProductContext'

const Cart = () => {
  const { products } = useSingleContext()
    const {cartItems, getSubtotalCart} = useContext(ShopContext)
    const totalAmount = getSubtotalCart()

    const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cartTitle">
        <h2>Your cart items</h2>
      </div>
      <div className="cartItems-main">
        { 
          totalAmount > 0 ? 
          <div className="cartItems">
            {
                products.map((item, index) => {
                    if(cartItems[item.id] !== 0){
                        return <CartItem key={index} data={item} />
                    } 
                })
            }
          </div>
        : <h1 style={{textAlign: 'center', justifyContent: 'center'}}>Your cart is Empty</h1>
        }
        <div className="checkout">
          <div className="checkoutHeading">
            <h3>Cart summary</h3>
          </div>
          <div className="checkoutAmount">
            <div className="checkoutAmount-box">
              <div className="checkoutAmount-total">
                <div className="checkout-Sub">Subtotal</div>
                <div className="checkoutAmount-totalMoney">GH¢: {totalAmount}</div>
              </div>
            </div>
            <div className="checkoutAmount-delivery">
              <p>Delivery fee not included yet</p>
            </div>
          </div>
          <div className="checkoutDelivery-fee">
            <div className="checkoutFree-deliverybox">
              <div className="checkoutFree-deliveryHeading">Free Delivery</div>
              <div className="checkoutFree-detail">Shein <span><i>express</i> </span></div>
              <div className="checkoutFree-writing">Shein express are eligible for free delivery</div>
            </div>
          </div>
          <div className="checkout-btn">
              <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cart
