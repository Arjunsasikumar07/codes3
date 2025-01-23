import { TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
        <h1>Arjun s</h1>
        <input type="text" placeholder='username' />
        <button>OK</button>
        <br></br><br></br>
        <Typography variant='h1'>ARJUN</Typography>
        <TextField label="usename" variant='outlined'/>
        <br></br>
        <TextField label="usename" variant='filled'/>
        <br></br>
        <TextField label="usename" variant='standard'/><br></br>
        <button variant="text">text</button><br></br>
        <button variant="contained">contained</button><br></br>
        <button variant="outlined">outlined</button>
    </div>
  )
}

export default First
