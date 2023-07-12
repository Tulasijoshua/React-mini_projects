import React from 'react'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import { AiOutlineStar } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";


const Stars = ({stars, reviews}) => {

    const ratingStar = Array.from({length: 5}, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 
                    ? <FaStar className="icon" /> 
                    : stars >= number
                    ? <FaStarHalfAlt className="icon" /> 
                    : <AiOutlineStar className="icon" />
                }
            </span>
        )
    })
  return (
    <div className='single_productStars'>
        <div className='single_productStars-rating'>
            {ratingStar} 
            <span className='spStars'>{stars} </span> 
        </div>

        <div className='single_productStars-message'>
            <div>{reviews}</div> 
            <BiMessageDots className='message-icon' /> 
            <div>comments</div>
        </div>
    </div>
  )
}

export default Stars