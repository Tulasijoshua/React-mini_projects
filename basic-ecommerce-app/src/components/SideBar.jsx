import React, { useContext, useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import './sideBar.css'
import { useFilterContext } from '../context/FilterContext'
import FormatPrice from './FormatPrice'

const SideBar = () => {

    // Setting sidebar to null on some Routes
    const location = useLocation()
    const hideRoute = ['/cart', ]

    const shouldHideNavbar = hideRoute.includes(location.pathname);

    if (shouldHideNavbar) {
        return null;
      }

      const isSingleProductPage = location.pathname.includes('/singleproduct/');

    if (isSingleProductPage) {
        return null; 
    }

    const { filters: {category, price, minPrice, maxPrice, color},
        all_products, updateFilterValues
    } = useFilterContext();

    // To get the unique data
    const getUniqueData = (data, attr) => {
        let getResults = data.map((curElem) => {
            return curElem[attr];
        })

        if(attr === "colors") {
            // return (getResults = ["All", ...new Set([].concat(...getResults))]);
            getResults = getResults.flat();
          }

        return (getResults = ["all", ...new Set(getResults)])
    }

    const categoryData = getUniqueData(all_products, "category")
    const colorsData = getUniqueData(all_products, "colors")
    // const getFilteredItem = (itemName) => {
    //     const getResult = PRODUCTS.filter((item) => {
    //         return item.productName === itemName;
    //     })
    //     setProducts(getResult)
    //     // console.log(getResult)
    // }

  return (
    <div className='sideBar'>
      <div className="side">
        <div className="sideBar-filter">
            <div className="filterHeader">
                <h2 className='sideBar-header'>Filter</h2>
            </div>
            <div className="filterItems">
                    {categoryData.map((curElem, index) => { 
                        return (
                            <button key={index} type='button' name="category" value={curElem}
                            onClick={updateFilterValues} >{curElem}</button>
                            
                        )
                    } )}
            </div>
        </div>
        <div className="sideBar-price">
            <h2 className='sideBar-header'>Price</h2>
            <div className="sideBar-priceBar">
            <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFilterValues} 
                className='sideBar_rangeBar'/>
            </div>
            <div className="sideBar-priceBtns">
                <button className='sideBar-priceBtn'><FormatPrice price={minPrice} /></button>
                <button className='sideBar-priceBtn'><FormatPrice price={price} /></button>
            </div>
        </div>
        <div className="sideBar-colors">
            <h2 className='sideBar-header'>Colors</h2>
            <div className='sideBar-color'>
                {
                    colorsData.map((curColor, index) => {
                        if (curColor === 'all') {
                            return (
                                <button
                                 key={index}
                                 type='button'
                                 name='color'
                                 value={curColor} 
                                 className="sideBar-colorAll"
                                 onClick={updateFilterValues}
                                > All </button>
                            )
                        }
                        return (
                            <button
                             key={index}
                             type='button'
                             name='color'
                             value={curColor} 
                             style={{background: curColor}}
                             className={color === curColor ? "sideBar-colorBtn_active sideBar-colorBtn" : "sideBar-colorBtn"}
                             onClick={updateFilterValues}
                            > </button>
                        )
                    })
                }
            </div>
        </div>
        <div className="sideBar-size">
            <h2 className='sideBar-header'>Size</h2>
            <div className="sideBar-sizeBoxes">
                <button>XXS</button>
                <button>XL</button>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XXL</button>
                <button>2XL</button>
                <button>4XL</button>
            </div>
        </div>
        <div className="sideBar-style">
            <h2 className='sideBar-header'>Dress Style</h2>
            <div className="sideBar-styleCats">
                <div className="sideBar-styleCat">
                    Casual
                </div>
                <div className="sideBar-styleCat">
                    Classic
                </div>
                <div className="sideBar-styleCat">
                    Classic
                </div>
                <div className="sideBar-styleCat">
                    Classic
                </div>
                <div className="sideBar-styleCat">
                    Classic
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
