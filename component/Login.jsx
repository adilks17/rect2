import React from 'react'
import { Button, TextField } from '@mui/material';
const login = () => {
  return (
    <div>
    <TextField label="username" variant='standard'></TextField><p/><p/>
    <TextField label="password" variant='standard' type="password"></TextField><p/><p/>
    <Button variant='contained'>login</Button>
    </div>
  )
}

export default login
