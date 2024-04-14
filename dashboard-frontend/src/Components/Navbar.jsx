import React, { useState } from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIc, Search, SettingsOutlined, ArrowDropDownOutlined} from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { AppBar, useTheme } from '@mui/material';

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
  return (
    <AppBar></AppBar>
  )
}

export default Navbar