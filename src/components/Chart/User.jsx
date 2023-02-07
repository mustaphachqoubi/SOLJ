import React from 'react'
import Card from './Card/Card'

const USER = 'Mustapha'

const User = () => {
  return (
    <Card classname={'user card'} text={USER === '' ? 'Anonymous' : USER} />
  )
}

export default User