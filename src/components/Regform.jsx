import { TextField, Typography } from '@mui/material'
import React from 'react'

const Regform = () => {
  return (
    <div>
    <Typography variant='h1'>Registration form</Typography>
    <TextField label='Name' varient='outlined'/><br></br>
    <TextField label='Place' varient='outlined'/><br></br>
    <TextField label='Age' varient='outlined'/><br></br>
    <TextField label='Address' varient='outlined'/><br></br>
    <TextField label='Username' varient='outlined'/><br></br>
    <TextField label='Password' varient='outlined'/><br></br>
    

        
      
    </div>
  )
}

export default Regform


