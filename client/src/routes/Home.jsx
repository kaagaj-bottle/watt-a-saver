import React from 'react'
import { Box, Button } from '@mui/material'

import { styleObject } from '../utils/globalConsts'
import SignIn from '../components/SignIn.jsx'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <Box sx={styleObject}>
        <Button variant='contained' component={Link} to='signin'>Sign In</Button>
        <Button variant='contained' component={Link} to='signup'>Sign Up</Button>
      </Box>

    </>
  )
}


