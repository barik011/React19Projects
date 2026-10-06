import React, { useState } from 'react'

const Card = ({data}) => {
    console.log(data);
    return (
        <div className='border border-gray-400 rounded-md p-2 m-2'>
          <div>{data.prod_title}</div>
          <div>{data.prod_price}</div>
          <div>{data.prod_desc}</div>
        </div>
    )
}

export default Card