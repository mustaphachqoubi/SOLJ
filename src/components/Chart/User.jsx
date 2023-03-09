import React from 'react'
import Card from './Card/Card'


const User = ({ text, type, isWantToRegester}) => {
  return (
    <Card classname={'card'} text={text === '' || isWantToRegester === false ? 'Anonymous' : text} type={type}/>
  )
}

export default User