import React from 'react' // Importing React
import { Link } from 'react-router-dom';  // Importing Link component for internal navigation
import { Stack } from '@mui/material';  // Importing Stack component from Material UI for layout
import Logo from '../assets/images/Logo.png'; // Importing the logo image


const Navbar = () => {
  return (
    <Stack direction="row" // Stack components horizontally (row)
    justifyContent="space-around" // Space the elements evenly
      sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm:'32px', xs: '20px'}, justifyContent:'none'}} 
      px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{
          width: '48px', height: '48px', margin:
          '0 20px'}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration:
          'none', color: "#3A1212",
          borderBottom:'3px solid #FF2625'}}
          >Home</Link>
        <a href="#exercises" style={
          {textDecoration: 'none', color:
          '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar // Exporting the Navbar component for use elsewhere