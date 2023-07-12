import React, { useContext, useState } from 'react'
import Stars from './Stars'
import Color from './Color'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import FormatPrice from '../../components/FormatPrice';
import { MdOutlinePayments } from "react-icons/md";
import { BsJoystick } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { TbShip } from "react-icons/tb";

const SingleProductItem = ({data}) => {

    const {addToCart} = useContext(ShopContext)

    const {id, productTitle, productName, productBrand, price, productImage, image, stock, stars, reviews, colors} = data

    const [mainImage, setMainImage] = useState(image[0])

  return (
    <div className='single_productItem'>
        <div className='img_section'>
            <div className='small_Section-imgs'>
                {
                    image.map((curImg, index) => {
                        return ( <div key={index} className='small_img'>
                            <img src={curImg.img} alt={curImg.id} onClick={() => setMainImage(curImg)}  />
                        </div>)
                    })
                }
            </div>
            <div className='main_img'>
                <img src={mainImage.img} alt={mainImage.id} />
            </div>
        </div>
        <div className='single_productDetails'>
            <div className='single_productName'>
                <h1>{productName} </h1>
            </div>
            <Stars reviews={reviews} stars={stars} />

            {/* sizes */}
            <div className='single_productSizes'>
                <div className='single_productSizes-size'>
                    <h3>Select Size</h3>
                    <p>Size Guide</p> 
                </div>
                <div className='single_productSizes-btn'>
                    <button className='btn'>xs</button>
                    <button>s</button>
                    <button>m</button>
                    <button>l</button>
                    <button>xl</button>
                </div>
            </div>
            <Color colors={colors} />
            <div className='addToCart_btn'>
                <Link to="/cart" style={{textDecoration: "none"}}>
                    <button className='single_cartBtn' onClick={() =>  addToCart(id)}>
                        <ShoppingCart className='shipCart' size={34} /> 
                        <p>Add to cart</p>
                    </button>
                </Link>
                <button className='amountBtn'>
                    <FormatPrice price={price} />
                </button>
            </div>
            <hr />
            <div className='single_productBtns'>
                <div className='single_productBtn'>
                    <div className='single_productBtn-icon'><MdOutlinePayments  /></div>
                    <div className='single_productBtn-heading'>Secure payment</div>
                </div>
                <div className='single_productBtn'>
                    <div className='single_productBtn-icon'><BsJoystick  /></div>
                    <div className='single_productBtn-heading'>Size & Fit</div>
                </div>
                <div className='single_productBtn'>
                    <div className='single_productBtn-icon'><FaShippingFast  /></div>
                    <div className='single_productBtn-heading'>Free shipping</div>
                </div>
                <div className='single_productBtn'>
                    <div className='single_productBtn-icon'><TbShip  /></div>
                    <div className='single_productBtn-heading'>Free Shipping & Returns</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProductItem