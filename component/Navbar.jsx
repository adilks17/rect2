import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='h6'>Twitter</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
