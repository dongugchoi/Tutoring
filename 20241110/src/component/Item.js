import React from 'react'

const Item = ({sub}) => {
  return (
    <div>
                {sub.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
    </div>
  )
}

export default Item
