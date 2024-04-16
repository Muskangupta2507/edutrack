import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {createTheme} from '@mui/material/styles'
import {themeSettings} from './theme';
import { useSelector } from 'react-redux';
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import Layout from './Pages/Layout';
<<<<<<< HEAD
import Courses from "./Pages/Courses.jsx"

=======
import Courses from "./Pages/Courses";
import Student from "./Pages/Students";
>>>>>>> 85e7f13a8cd9fefab9788e05eb198432d2372551

const App = () => {

  const mode = useSelector((state)=>state.global.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);

  return (
    <div className="app">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
              <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/students" element={<Student />} />
              {/* <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} /> */}
            </Route>
          </Routes>
        </ThemeProvider>
    </div>
  )
}

export default App