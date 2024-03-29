import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 
import { useMemo } from "react"; 
import { useSelector } from 'react-redux'; 
import {CssBaseline, ThemeProvider} from "@mui/material"; 
import { createTheme } from "@mui/material/styles"; 
import { themeSettings } from "./theme"; 
import HelloMoments from 'scenes/HelloMoments/HelloMoments'; 
import NewsFeed from 'scenes/NewsFeed/NewsFeed'; 
import LoginPage from 'scenes/LoginPage/LoginPage';
import ProfilePage from 'scenes/ProfilePage/ProfilePage';
import MomentMessages from 'scenes/MomentMessages/MomentMessages'; 
import MomentNotifications from 'scenes/MomentNotifications/MomentNotifications';
import SettingsandPrivacy from 'scenes/SettingsandPrivacy/SettingsandPrivacy';
 




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
      {
        path: '/messages', 
        element: <MomentMessages />
      }, 
      {
        path: '/notifications', 
        element: <MomentNotifications />
      }, 
      {
        path: '/settingsandprivacy', 
        element: <SettingsandPrivacy />
      }, 
    ]
  }
])

function App() {

 const mode = useSelector((state) => state.mode); 
 const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); 
// const isAuth = Boolean(useSelector((state) => state.token)); 

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
