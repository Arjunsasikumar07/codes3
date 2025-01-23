import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () =>  {
    // var fname = "Arjun"
    var[fname,setFname]= useState("Arjun");
    const changeName = ()=>{
        setFname("Nandhu")
    }
  return (
    <div style={{textAlign:'center', marginTop:'5%'}}>
        <Typography variant='h3'>Hello {fname}</Typography>
        <Button variant='contained' onClick={changeName}>CHANGE</Button>
      
    </div>
  )
}

export default Statebasics
