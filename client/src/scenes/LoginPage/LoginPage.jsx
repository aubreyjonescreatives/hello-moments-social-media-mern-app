import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"; 
import RegisterLoginForm from "../../components/RegisterLoginForm.jsx"; 
//import logo from "../../assets/hmlogo.png"; 
//import HelloMoments from "../../assets/hellomomentstextlogo.png"; 
import LoginNavBarComponent from "../LoginNavBar/LoginNavBar.jsx"; 



const LoginPage = () => {
  const theme = useTheme(); 
  const isNonMobileScreens = useMediaQuery("min-width: 1000px"); 
 // const primaryMain = theme.palette.primary.main; 


  // const buttonStyles = {
  //   color: primaryMain, 
  //   fontWeight: '800'
  // }

  return (
    <Box>
    
    <LoginNavBarComponent />

        <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="800" varient="h5" sx={{ mb: "1.5rem"}} textAlign="center" fontSize="25px">
            Welcome to Hello Moments
          </Typography>
          <Typography fontWeight="800" varient="h5" sx={{ mb: "1.5rem"}} textAlign="center" fontSize="25px">
            Connect with your loved ones from all over the world.
          </Typography>

        <RegisterLoginForm />

        </Box>
    </Box>
  )
}

export default LoginPage; 