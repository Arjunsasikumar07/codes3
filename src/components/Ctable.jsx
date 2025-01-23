import { TableBody,Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Ctable()  {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Arjun</TableCell>
                <TableCell>19</TableCell>
                <TableCell>IJK</TableCell>
                </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
              
    </div>
  )
}

export default Ctable