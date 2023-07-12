import React from 'react'
import './men.css'
import MenItem from './MenItem'
import { useSingleContext } from '../../context/SingleProductContext'

const Men = () => {
  const {products} = useSingleContext()
  return (
    <div className='men'>
      <div className="menTitle">
        <h2>Men's Clothing</h2>
      </div>
      <div className="menItems">
        {
          products.map((item) => {
            if(item.productTitle == "Men's Clothing") {
              return <MenItem key={item.id} data={item} />
            }
          })
        }
      </div>
    </div>
  )
}

export default Men
