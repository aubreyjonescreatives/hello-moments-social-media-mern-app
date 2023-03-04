import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"; 
import RegisterLoginForm from "../../components/RegisterLoginForm.jsx"; 
import logo from "../../assets/hmlogo.png"; 



const LoginPage = () => {
  const theme = useTheme(); 
  const isNonMobileScreens = useMediaQuery("min-width: 1000px"); 
  return (
    <Box>
<Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
  <img src={logo} alt="Hello Moments Logo"/>
<Typography
        fontWeight="bold"
        fontSize="32px"
        color="primary"
        >
          Hello Moments
        </Typography>


        </Box>

        <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="500" varient="h5" sx={{ mb: "1.5rem"}} textAlign="center" fontSize="25px">
            Welcome to Hello Moments
          </Typography>
          <Typography fontWeight="500" varient="h5" sx={{ mb: "1.5rem"}} textAlign="center" fontSize="25px">
            Connect with your loved ones from all over the world.
          </Typography>

        <RegisterLoginForm />

        </Box>
    </Box>
  )
}

export default LoginPage; 