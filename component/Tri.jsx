import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
const Tri = () => {
  var [pagename,setpagename]=useState("page1")
  var[plink,setplink]=useState("https://th.bing.com/th/id/OIP.jX2diB9aezqQFufUUsyhgQHaEJ?pid=ImgDet&rs=1")
  const gpage =()=>{
    setpagename("gallary page")
    setplink("https://thumbs.dreamstime.com/b/gallery-gallery-concept-word-blackboard-background-110888889.jpg")
  }
  const hpage=() =>{
    setpagename('home page')
    setplink("https://th.bing.com/th/id/OIP.g54RNLctrjwIe7ZhR5Wr9QAAAA?pid=ImgDet&rs=1")
  }
  const cpage=() =>{
    setpagename('contact page')
    setplink("https://th.bing.com/th/id/OIP.rydGLOc_2E5gu7kaKvH2XgHaDl?pid=ImgDet&rs=1")
  }

  return (
    <div>
        <Button color='primary' variant='contained'onClick={hpage}>Home page</Button>
      <Button color='error' variant='contained'onClick={gpage}>Gallary</Button>
      <Button color='success' variant='contained' onClick={cpage}>contact page</Button>
      <Typography>Welcome to {pagename}</Typography><br></br>
      <Typography>i am jerin</Typography>
      <img src={plink}
width="50%" height="50%"
alt="Geeksforgeeks.org"></img>
    </div>
  )
}

export default Tri
