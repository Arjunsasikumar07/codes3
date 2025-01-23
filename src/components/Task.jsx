import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Task = () => {
    var[val,setVal]=useState("")
    const changetoH =()=>{
        setVal("Home")
    }
    const changetoG =()=>{
        setVal("Gallery")
    }
    const changetoC =()=>{
        setVal("Contact")
    }
  return (
    <div style={{textAlign:'center', marginTop:'5%'}}>
        <Typography variant="h3">Welcome to {val}</Typography>
        <br />
        <Button variant="contained" onClick={changetoH}>Home</Button>
        <Button variant="contained" onClick={changetoG}>Gallery</Button>
        <Button variant="contained" onClick={changetoC}>Contact</Button>
        </div>



  )
}

export default Task