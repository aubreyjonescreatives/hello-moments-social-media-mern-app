import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 
import NavBar from 'scenes/NavBar';
import HomePage from 'scenes/HomePage'; 
import LoginPage from 'scenes/LoginPage';
import ProfilePage from 'scenes/ProfilePage';
 

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

 


  return (
   <>
  <RouterProvider router={router}></RouterProvider>
   </>
  );
}

export default App;
