import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar()  {
  return (
    <div>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static" style={{backgroundColor:'black'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>my app</Typography>
                <Button color="inherit"><Link to={"/"} style={{ color:"lightgreen"}}>Login</Link>
                </Button>
                <Button>
                    <Link to={"/r"} style={{ color:"lightgreen"}}>Regform</Link>
                    </Button>
                    <Button>
                    <Link to={"/g"} style={{ color:"lightgreen"}}>Statebasics</Link>
                    </Button>
                    <Button>
                    <Link to={"/a"} style={{ color:"lightgreen"}}>Task</Link>
                    </Button>

                </Toolbar>
                </AppBar>
                </Box>
    </div>
  )
}

export default Navbar
