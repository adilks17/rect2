import { CardMedia } from '@mui/material'
import React from 'react'

const Card = () => {
  return (
    <div>
      <CardMedia 
      component="img"
      height="194"
      image="/static/images/cards/paella.jpg"
      alt="paella dish"/>
    </div>
  )
}

export default Card
