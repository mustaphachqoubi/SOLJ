import React from 'react'
import './Card.css'
const Card = ({classname, text}) => {
  return (
    <div className={classname}>
      {text}
    </div>
  )
}

export default Card