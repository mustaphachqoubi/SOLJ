import React from 'react'
import Card from './Card/Card'

const Company = ({text, type}) => {
  return (
    <Card classname={'card'} text={text} type={type}/>
  )
}

export default Company