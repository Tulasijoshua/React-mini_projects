import React, { useState } from 'react'

const Color = ({colors}) => {

    const [colored, setColored] = useState(colors[0])
  return (
    <div className='single_productColors'>
        <h3>Colours Available</h3>
        <div className='single_productColors-btn'>
            {
                colors.map((curColor, index) => {
                    return (
                        <div key={index} className={colored === curColor ? "colorBtn colorBtn_active" : "colorBtn"}>
                            <button style={{background: curColor}}
                                className={colored === curColor ? 'btnStyle active' : 'btnStyle'} 
                                onClick={() => setColored(curColor)}>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Color