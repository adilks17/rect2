import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const State1 = () => {
    var[fname,setfname]= useState("Tiya")
    const changename=() =>{
        setfname('mridula')
    }
  return (
    <div>
      <Typography variant='h4'>Welcome {fname}</Typography>
      <Button variant='contained' color='primary' onClick={changename}> change name</Button>
      
    </div>
  )
}

export default State1
