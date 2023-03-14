import { Button, ButtonBase, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counters = () => {
    var [n,setn]=useState(0)
    const add =()=> {
        setn(++n)
    }
    const min =() =>
{
    setn(--n)
}
 
  return (
    <div>
     <Typography>{n}</Typography> 
     <Button variant='contained' color='success' onClick={add}>PLUS</Button>
     <Button variant='contained' color='error'onClick={min} >MINUS</Button>
    </div>
      )
}

export default Counters
