import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Sidebar from "../Components/Sidebar"
import { useGetUserQuery } from '../state/api';
// import { useGetUserQuery } from 'state/api';

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const[isSidebarOpen,setisSidebarOpen]=useState(true);
  const userId = useSelector((state)=>state.global.userId);
  const {data}=useGetUserQuery(userId);
  console.log('data',data);
  return (
    <Box display={isNonMobile ? "flex" :"block"} height="100%" width="100%">
      <Sidebar 
              user={data || {}}
              isNonMobile={isNonMobile}
              drawerWidth="250px"
              isSidebarOpen={isSidebarOpen}
              setisSidebarOpen={setisSidebarOpen}
      />

      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setisSidebarOpen={setisSidebarOpen}
        />
        <Outlet/>
      </Box>
    </Box>
  );
};

export default Layout