import React from 'react'
import Card from './Card/Card'


const User = ({ text, type }) => {
  return (
    <Card classname={'card'} text={text === '' ? 'Anonymous' : text} type={type}/>
  )
}

export default User