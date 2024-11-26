import React from 'react'
import "./Item.css"

const Item = ({ name, width, height, index }) => {
  return (
    <div className='my-div' style={{width: `${width}px`, height: `${height}px`}}>
      {name} {index}
    </div>
  )
}

export default Item