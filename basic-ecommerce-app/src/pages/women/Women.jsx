import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import './women.css'
import WomenItems from './WomenItems'
import { ShopContext } from '../../context/ShopContext'

const Women = () => {
  const {products} = useContext(ShopContext)
  return (
    <div className='women'>
      <div className="womenTitle">
        <h2>Women's Clothing</h2>
      </div>
      <div className="womenItems">
        {
          products.map((item, index) => {
            if(item.productTitle == "Women's Clothing") {
              return <WomenItems key={index} data={item} />
            }
          })
        }
      </div>
    </div>
  )
}

export default Women
