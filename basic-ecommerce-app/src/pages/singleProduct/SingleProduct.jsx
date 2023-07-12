import React, { useContext, useEffect, useState } from 'react'
import './singleproduct.css'
import { PRODUCTS } from '../../Products'
import { useParams } from 'react-router-dom';
import { useSingleContext } from '../../context/SingleProductContext';
import SingleProductItem from './SingleProductItem';


const SingleProduct = () => {
    const { id } = useParams();

    const {getSingleProduct, singleProduct} = useSingleContext();


    
    useEffect(() => {
      getSingleProduct(PRODUCTS);
  }, [])

  return (
    <div className='singleProduct'>
      <div className='singleProduct_container'>
        <h1>Product Details</h1>
          {
            singleProduct.map((item, index) => { if(item.id === parseInt(id)) {
              return <SingleProductItem key={index} data={item} />
            }})
          }
      </div>
    </div>
  )
}

export default SingleProduct