import React, { useContext } from 'react'
import './shop.css'
import { PRODUCTS } from '../../Products'
import ShopItems from './ShopItems'
import { ShopContext } from '../../context/ShopContext'
import { useFilterContext } from '../../context/FilterContext'
import { useSingleContext } from '../../context/SingleProductContext'

const Shop = () => {
  // const {products} = useContext(ShopContext)
  const {products} = useSingleContext()

  return (
    <div className='shop'>
      <div className="shopTitle">
        <h2>Shop your favorite product</h2>
      </div>
      <div className="shopItems">
        {
          products.map((item, index) => {
            if(item.featured === true) { return <ShopItems key={index} data={item} /> }
            // return <ShopItems key={index} data={item} />
          })
        }
      </div>
    </div>
  )
}

export default Shop
