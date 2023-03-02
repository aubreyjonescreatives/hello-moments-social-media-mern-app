import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 
import NavBar from 'scenes/NavBar';
import HomePage from 'scenes/HomePage'; 
import LoginPage from 'scenes/LoginPage';
import ProfilePage from 'scenes/ProfilePage';
import { useMemo } from "react"; 
import { useSelector } from 'react-redux'; 
import {CssBaseline, ThemeProvider} from "@mui/material"; 
import { createTheme } from "@mui/material/styles"; 
import { themeSettings } from "./theme"; 
 




const Layout = () => {
  return (
    <>
    <NavBar />
    <Outlet />

    </>
  )
}


const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,

    children: [
      {
        path: '/', 
        element: <HomePage />
      }, 
      {
        path: '/login', 
        element: <LoginPage />
      }, 
      {
        path: '/profile/:userId', 
        element: <ProfilePage />
      }, 
    ]
  }
])

function App() {

 const mode = useSelector((state) => state.mode); 
 const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); 


  return (
   <>
   <ThemeProvider theme={theme}>
    <CssBaseline />
  <RouterProvider router={router}></RouterProvider>
  </ThemeProvider>
   </>
  );
}

export default App;
