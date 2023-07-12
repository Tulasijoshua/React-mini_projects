import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../../components/FormatPrice'

const ChildrenItem = ({data}) => {
    const {id, productTitle, productName, productBrand, price, productImage} = data
    const {cartItems, addToCart} = useContext(ShopContext)
  return (
    <div className='childrenItem'>
      <NavLink to={`/singleproduct/${id}`}>
      <div className="childrenItem-img">
        <img src={productImage} />
      </div>
      </NavLink>
      <div className="itemDescription">
        <div className="itemTitle">
            <div className="itemName">{productName} </div>
            <div className="itemBrand">{productBrand} </div>
        </div>
        <div className="cartBtn">
          <div className="itemPrice-box">
              <div className="itemPrice"><FormatPrice price={price} /></div>
          </div>
          <button onClick={() => addToCart(id)}>
            Add to cart {cartItems[id] > 0 && <>({cartItems[id]}) </> }
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChildrenItem
