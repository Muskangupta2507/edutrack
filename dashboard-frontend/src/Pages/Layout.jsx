import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from 'Components/Navbar';

const Layout = () => {
  return (
    <Box height="100%" width="100%">
      <Box>
        <Navbar/>
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout