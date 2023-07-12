import React, { useContext } from 'react'
import './children.css'
import { ShopContext } from '../../context/ShopContext'
import ChildrenItem from './ChildrenItem'
import { useSingleContext } from '../../context/SingleProductContext'

const Children = () => {
  const {products} = useSingleContext()
  return (
    <div className='children'>
      <div className="childrenTitle">
        <h2>Children's Clothing</h2>
      </div>
      <div className="childrenItems">
        {
          products.map((item) => {
            if(item.productTitle == "Kid's Clothing") {
              return <ChildrenItem key={item.id} data={item} />
            }
          })
        }
      </div>
    </div>
  )
}

export default Children
