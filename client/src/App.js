import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 
import NavBar from 'scenes/NavBar/NavBar';
import HelloMoments from 'scenes/HelloMoments/HelloMoments'; 
import NewsFeed from 'scenes/NewsFeed/NewsFeed'; 
import LoginPage from 'scenes/LoginPage/LoginPage';
import ProfilePage from 'scenes/ProfilePage/ProfilePage';
import { useMemo } from "react"; 
import { useSelector } from 'react-redux'; 
import {CssBaseline, ThemeProvider} from "@mui/material"; 
import { createTheme } from "@mui/material/styles"; 
import { themeSettings } from "./theme"; 
 




const Layout = () => {
  return (
    <>
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
        element: <HelloMoments />
      },
      {
        path: '/feed', 
        element: <NewsFeed />
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
 const isAuth = Boolean(useSelector((state) => state.token)); 

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
